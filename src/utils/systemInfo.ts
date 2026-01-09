/* eslint-disable import/no-mutable-exports */

import { isApp, isMpWeixin } from './platform';

let systemInfo = uni.getSystemInfoSync();
// 获取屏幕边界到安全区域距离
let safeAreaInsets = systemInfo.safeAreaInsets;

// 微信里面打印
// pixelRatio: 3
// safeArea: {top: 47, left: 0, right: 390, bottom: 810, width: 390, …}
// safeAreaInsets: {top: 47, left: 0, right: 0, bottom: 34}
// screenHeight: 844
// screenTop: 91
// screenWidth: 390
// statusBarHeight: 47
// windowBottom: 0
// windowHeight: 753
// windowTop: 0
// windowWidth: 390

/**
 * 获取应用版本号
 * @returns
 */
function getVersion(): Promise<string> {
  if (isApp) {
    document.addEventListener('plusready', () => {
      plus.runtime.getProperty(plus.runtime.appid, (info) => {
        return Promise.resolve(info.version);
      });
    });
  }
  if (isMpWeixin) {
    const accountInfo = uni.getAccountInfoSync();
    return Promise.resolve(accountInfo.miniProgram.version);
  }
}

export { safeAreaInsets, systemInfo, getVersion };
