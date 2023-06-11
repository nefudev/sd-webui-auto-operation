import { Page } from '@playwright/test';
import { locators } from '../const/locators';
import { Params, HiresFix } from '../const/config';
import { extLocators } from '../const/extLocators';

export const utils = {
  inputPrompt: async (page: Page, tabName: string, positive: string, negative: string) => {
    await page.locator(locators[tabName].promptTextarea).click();
    await page.locator(locators[tabName].promptTextarea).fill(positive);
    await page.locator(locators[tabName].negativeTextarea).click();
    await page.locator(locators[tabName].negativeTextarea).fill(negative);
  },
  stylesSetting: async (page: Page, tabName: string, styleName: string) => {
    await page.locator(locators[tabName].styles).click();
    await page.locator(locators[tabName].styles).fill(styleName);
    await page.keyboard.press('Enter');
    await page.locator(locators[tabName].tools.apply).click();
  },
  generateImg: async (page: Page, tabName: string) => {
    await page.locator(locators[tabName].generateBtn).click();
    await page.locator(locators[tabName].interrupt).waitFor({ state: 'hidden' });
  },
  checkpointSetting: async (page: Page, modelName: string) => {
    await page.locator(locators.checkpointPullDown).click();
    await page.locator(locators.checkpointList(modelName)).click();
    await page.locator(locators.checkpointLoaded).waitFor();
  },
  vaeSetting: async (page: Page, modelName: string) => {
    await page.locator(locators.vaePullDown).click();
    await page.locator(locators.vaeList(modelName)).click();
    await page.locator(locators.vaeLoaded).waitFor();
  },
  clipSkipSetting: async (page: Page, clipSkip: number) => {
    await page.locator(locators.clipSkip).click();
    await page.locator(locators.clipSkip).fill(String(clipSkip));
  },
  // samplerList:Euler a,Euler,LMS,Heun,DPM2,DPM2 a,DPM++ 2S a,DPM++ 2M,DPM++ SDE,DPM fast,DPM adaptive,LMS Karras,DPM2 Karras,DPM2 a Karras,DPM++ 2S a Karras,DPM++ 2M Karras,DPM++ SDE Karras,DDIM,PLMS,UniPC
  samplerSetting: async (page: Page, tabName: string, sampler: string) => {
    await page.locator(locators[tabName].params.samplerPullDown).click();
    await page.locator(locators[tabName].params.samplerList(sampler)).click();
  },
  stepsSetting: async (page: Page, tabName: string, steps: number) => {
    await page.locator(locators[tabName].params.steps).click();
    await page.locator(locators[tabName].params.steps).fill(String(steps));
  },
  batchSetting: async (page: Page, tabName: string, batchCount: number, batchSize: number) => {
    await page.locator(locators[tabName].params.batchCount).click();
    await page.locator(locators[tabName].params.batchCount).fill(String(batchCount));
    await page.locator(locators[tabName].params.batchSize).click();
    await page.locator(locators[tabName].params.batchSize).fill(String(batchSize));
  },
  cfgScaleSetting: async (page: Page, tabName: string, cfgScale: number) => {
    await page.locator(locators[tabName].params.cfgScale).click();
    await page.locator(locators[tabName].params.cfgScale).fill(String(cfgScale));
  },
  strengthSetting: async (page: Page, strength: number) => {
    await page.locator(locators.i2i.params.strength).click();
    await page.locator(locators.i2i.params.strength).fill(String(strength));
  },
  seedSetting: async (page: Page, tabName: string, seed: number) => {
    await page.locator(locators[tabName].params.seed).click();
    await page.locator(locators[tabName].params.seed).fill(String(seed));
  },

  sizeSetting: async (page: Page, tabName: string, width: number, height: number) => {
    await page.locator(locators[tabName].params.width).click();
    await page.locator(locators[tabName].params.width).fill(String(width));
    await page.locator(locators[tabName].params.height).click();
    await page.locator(locators[tabName].params.height).fill(String(height));
  },
  parameterSetting: async (page: Page, tabName: string, params: Params) => {
    await utils.samplerSetting(page, tabName, params.sampler);
    await utils.sizeSetting(page, tabName, params.width, params.height);
    await utils.stepsSetting(page, tabName, params.steps);
    await utils.batchSetting(page, tabName, params.batchCount, params.batchSize);
    await utils.cfgScaleSetting(page, tabName, params.cfgScale);
    tabName === 'i2i' ? await utils.strengthSetting(page, params.strength ?? 0) : '';
    await utils.seedSetting(page, tabName, params.seed);
  },
  hiresFixSetting: async (page: Page, tabName: string, hiresFix: HiresFix) => {
    await page.locator(locators[tabName].hiresFix.chkbox).click();
    await page.locator(locators[tabName].hiresFix.upScalerDropBox).click();
    await page.locator(locators[tabName].hiresFix.upScalerList(hiresFix.upScaler)).click();
    await page.locator(locators[tabName].hiresFix.hiresSteps).fill(String(hiresFix.hiresSteps));
    await page.locator(locators[tabName].hiresFix.strength).fill(String(hiresFix.strength));
    await page.locator(locators[tabName].hiresFix.upScaleBy).fill(String(hiresFix.upScaleBy));
    await page.locator(locators[tabName].hiresFix.width).fill(String(hiresFix.width));
    await page.locator(locators[tabName].hiresFix.height).fill(String(hiresFix.height));
  },

  // extensions
  // ======================================

  // configPresets
  configPresetsSetting: async (page: Page, tabName: string, presetName: string) => {
    await page.locator(extLocators[tabName].configPresets.pullDown).click();
    await page.locator(extLocators[tabName].configPresets.listItems(presetName)).click();
    await page.keyboard.press('Enter');
  },
};
