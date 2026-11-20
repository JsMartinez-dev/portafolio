import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const locale of ['es', 'en'] as const) {
  test(`${locale}: semantic page, language navigation, responsive layout and axe`, async ({
    page,
  }, testInfo) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(`/${locale}/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('[aria-current="page"]')).toHaveText(
      locale.toUpperCase(),
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const audit = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(audit.violations).toEqual([]);
    await page.screenshot({
      path: testInfo.outputPath(`${locale}.png`),
      fullPage: true,
    });
    await page
      .getByRole('link', { name: locale === 'es' ? 'English' : 'Español' })
      .click();
    await expect(page).toHaveURL(locale === 'es' ? /\/en\/$/ : /\/es\/$/);
    expect(errors).toEqual([]);
  });
}

test('root redirects to Spanish', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/es\/$/);
});

test('keyboard reaches skip link, content and language selector', async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, 'Hardware keyboard checked with desktop Chromium');
  await page.goto('/es/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Saltar al contenido' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).toBeFocused();
  await page.goto('/es/');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Español' })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'English' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/en\/$/);
});

test('content remains visible with reduced motion and without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  for (const locale of ['es', 'en']) {
    await page.goto(`http://127.0.0.1:4321/${locale}/`);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.getByRole('main')).toBeVisible();
  }
  await context.close();
});
