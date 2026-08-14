export const PROJECT_SCREENSHOT_QUALITY = 95;

export const PROJECT_SCREENSHOT_SIZES =
  "(max-width: 1152px) 100vw, 1152px";

/** Native dimensions for StoreSetup screenshots (1839×928). */
export const ECOM_SCREENSHOT_DIMENSIONS = {
  width: 1839,
  height: 928,
};

/** Native dimensions for ChampKoder screenshots (1854×922). */
export const CHAMPKODER_SCREENSHOT_DIMENSIONS = {
  width: 1854,
  height: 922,
};

/** @deprecated Use getScreenshotDimensions() */
export const PROJECT_SCREENSHOT_DIMENSIONS = ECOM_SCREENSHOT_DIMENSIONS;

export function getScreenshotDimensions(image) {
  if (image?.startsWith("/champkoder/")) {
    return CHAMPKODER_SCREENSHOT_DIMENSIONS;
  }
  if (image?.startsWith("/ecom-saas/")) {
    return ECOM_SCREENSHOT_DIMENSIONS;
  }
  return null;
}

export function isNativeScreenshot(image) {
  return getScreenshotDimensions(image) !== null;
}
