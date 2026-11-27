import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
for (const locale of ['es', 'en'] as const) {
  test(`project dialogs in ${locale}`, async ({ page }, info) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    const requested: string[] = [];
    await page.route('https://www.youtube-nocookie.com/**', (route) => {
      requested.push(route.request().url());
      return route.fulfill({
        contentType: 'text/html',
        body: '<!doctype html><html lang="en"><title>Video</title><body></body></html>',
      });
    });
    await page.goto('/' + locale + '/');
    await expect(page.locator('iframe')).toHaveCount(0);
    expect(requested).toEqual([]);
    for (const [name, id] of [
      ['FlashBid', 'FhAbjOKOKME'],
      ['Eventario', 'eoqXi59Zoag'],
      ['Oscila', 'hewkh3YumVw'],
    ]) {
      const trigger = page.getByRole('link', {
        name:
          (locale === 'es' ? 'Ver detalles' : 'View details') + ' · ' + name,
      });
      await trigger.click();
      const dialog = page.getByRole('dialog', { name, exact: true });
      await expect(dialog).toBeVisible();
      await expect(dialog.locator('iframe')).toHaveAttribute(
        'src',
        'https://www.youtube-nocookie.com/embed/' + id,
      );
      await expect
        .poll(() =>
          requested.includes('https://www.youtube-nocookie.com/embed/' + id),
        )
        .toBe(true);
      const close = dialog.getByRole('button');
      await expect(close).toBeFocused();
      if (name === 'FlashBid') {
        const audit = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze();
        expect(audit.violations).toEqual([]);
        await page.screenshot({ path: info.outputPath('dialog.png') });
        await page.keyboard.press('Escape');
      } else if (name === 'Eventario') {
        await page.mouse.click(1, 1);
      } else {
        await close.click();
      }
      await expect(dialog).not.toBeVisible();
      await expect(page.locator('iframe')).toHaveCount(0);
      await expect(trigger).toBeFocused();
    }
    expect(errors).toEqual([]);
  });
}
test('narrow and wide layouts respect reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [320, 375, 768, 1024, 1920]) {
    await page.setViewportSize({ width, height: 850 });
    await page.goto('/es/');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(page.locator('.hero figure')).toHaveCSS(
      'animation-name',
      'none',
    );
  }
});
