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
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Juan Sebastián Martínez',
    );
    await expect(
      page.getByText(
        locale === 'es' ? 'Desarrollador de Software' : 'Software Developer',
        {
          exact: true,
        },
      ),
    ).toBeVisible();
    const aboutTitle = locale === 'es' ? 'Sobre mí' : 'About me';
    const aboutFragment = locale === 'es' ? '#sobre-mi' : '#about';
    await page.getByRole('link', { name: aboutTitle, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${aboutFragment}$`));
    const about = page.getByRole('region', { name: aboutTitle });
    await expect(about).toBeFocused();
    await expect(about.getByRole('heading', { level: 2 })).toBeInViewport();
    await expect(about.locator('p')).toHaveCount(2);
    const stackTitle = locale === 'es' ? 'Tecnologías' : 'Technologies';
    const stackFragment = locale === 'es' ? '#tecnologias' : '#technologies';
    await page.getByRole('link', { name: stackTitle, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`${stackFragment}$`));
    const stack = page.getByRole('region', { name: stackTitle });
    await expect(stack).toBeFocused();
    const database = locale === 'es' ? 'Bases de datos' : 'Database';
    const otherTools = locale === 'es' ? 'Otras herramientas' : 'Other tools';
    await expect(stack.getByRole('heading', { level: 3 })).toHaveText([
      'Backend',
      database,
      'DevOps',
      otherTools,
    ]);
    const iconsByGroup = [
      ['Backend', ['Java', 'Spring Boot']],
      [database, ['DynamoDB', 'MySQL', 'Neo4j']],
      ['DevOps', ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'Azure']],
      [otherTools, ['Flyway', 'Swagger', 'Postman', 'Linux', 'Power BI']],
    ] as const;
    for (const [group, technologies] of iconsByGroup) {
      const list = stack.getByRole('list', { name: group, exact: true });
      for (const technology of technologies) {
        const card = list
          .getByRole('listitem')
          .filter({ has: page.getByText(technology, { exact: true }) });
        await card.scrollIntoViewIfNeeded();
        await expect(card.locator('img')).not.toHaveJSProperty(
          'naturalWidth',
          0,
        );
      }
    }
    const projectLink = page.getByRole('link', {
      name: locale === 'es' ? 'Ver proyectos' : 'View projects',
    });
    await expect(projectLink).toHaveCSS('background-color', 'rgb(2, 29, 68)');
    await expect(projectLink).not.toHaveText(/[↓↧]/);
    await projectLink.click();
    const fragment = locale === 'es' ? '#proyectos' : '#projects';
    await expect(page).toHaveURL(new RegExp(`${fragment}$`));
    await expect(page.locator(fragment)).toBeInViewport();
    await page.goto(`/${locale}/`);
    await expect(
      page.locator('.language-list [aria-current="page"]'),
    ).toHaveText(locale.toUpperCase());
    await expect(
      page.getByRole('img', { name: 'Juan Sebastián Martínez' }),
    ).toBeVisible();
    const cv = page.getByRole('link', {
      name: locale === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)',
    });
    await expect(cv).not.toHaveText(/[↓↧]/);
    const downloadPromise = page.waitForEvent('download');
    await cv.click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/\.pdf$/);
    expect(await download.failure()).toBeNull();
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
    const aboutTitle = locale === 'es' ? 'Sobre mí' : 'About me';
    await page.getByRole('link', { name: aboutTitle, exact: true }).click();
    const about = page.getByRole('region', { name: aboutTitle });
    await expect(about.getByRole('heading')).toBeInViewport();
    await expect(about.locator('p').last()).toBeVisible();
    const stackTitle = locale === 'es' ? 'Tecnologías' : 'Technologies';
    await page.getByRole('link', { name: stackTitle, exact: true }).click();
    const stack = page.getByRole('region', { name: stackTitle });
    await expect(stack.getByRole('heading', { level: 2 })).toBeInViewport();
    await expect(stack.getByText('Power BI', { exact: true })).toBeVisible();
  }
  await context.close();
});
