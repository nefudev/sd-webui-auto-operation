import { test } from '@playwright/test';
import { locators } from '../const/locators';
import { config } from '../const/config';
import { utils } from '../utils/utils';

test.beforeEach(async ({ page }) => {
  await page.goto(config.baseURL);
  await page.locator(locators.checkpointLoaded).waitFor();
  await page.locator(locators.vaeLoaded).waitFor();
});
test.afterEach(async ({ page }) => {
  await page.pause();
});

test('Execute t2i once', async ({ page }) => {
  await utils.inputPrompt(page, 't2i', config.t2i.prompt, config.t2i.negative);
  await utils.parameterSetting(page, 't2i', config.t2i.params);
  await utils.generateImg(page, 't2i');
});
