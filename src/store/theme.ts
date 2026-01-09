import type { ConfigProviderThemeVars } from 'wot-design-uni';

import { defineStore } from 'pinia';

type Theme = 'light' | 'dark'
export const useThemeStore = defineStore(
  'theme-store',
  () => {
    /** 主题 */
    const theme = ref<Theme>('light');

    /** 主题变量 */
    const themeVars = ref<ConfigProviderThemeVars>({
      // colorTheme: 'red',
      // buttonPrimaryBgColor: '#07c160',
      // buttonPrimaryColor: '#07c160',
    });

    /** 设置主题变量 */
    const setThemeVars = (partialVars: Partial<ConfigProviderThemeVars>) => {
      themeVars.value = { ...themeVars.value, ...partialVars };
    };

    /** 切换主题 */
    const setTheme = (value: string = 'light') => {
      theme.value = value as Theme;
    };

    const overflowHidden = ref<boolean>(false);

    const setOverflowHidden = (value) => {
      overflowHidden.value = value;
      console.log(overflowHidden.value);
    };

    return {
      /** 设置主题变量 */
      setThemeVars,
      /** 设置主题 */
      setTheme,
      /** 主题变量 */
      themeVars,
      /** 主题 */
      theme,
      overflowHidden,
      setOverflowHidden
    };
  },
  {
    persist: true
  }
);
