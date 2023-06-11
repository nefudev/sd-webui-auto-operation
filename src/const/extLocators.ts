// Elements added by extensions are described in XPath

export const extLocators = {
  t2i: {
    configPresets: {
      pullDown:
        "//div[@id='txt2img_results']//span[text()='Config Presets']/..//div[contains(@class,'wrap-inner')]",
      listItems: (presetName) =>
        `//div[@id='txt2img_results']//span[text()='Config Presets']/..//div[contains(@class,'wrap')]//li[contains(@data-value,'${presetName}')]`,
    },
  },
  i2i: {
    configPresets: {
      pullDown:
        "//div[@id='img2img_results']//span[text()='Config Presets']/..//div[contains(@class,'wrap-inner')]",
      listItems: (presetName) =>
        `//div[@id='img2img_results']//span[text()='Config Presets']/..//div[contains(@class,'wrap')]//li[contains(@data-value,'${presetName}')]`,
    },
  },
};
