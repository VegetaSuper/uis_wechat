<script lang="ts" setup>
import { useThemeStore } from '@/store';
import lightLogo from '@/static/images/login/light-logo.png';
import darkLogo from '@/static/images/login/dark-logo.png';

const themeStore = useThemeStore();

const themeLogo = computed(() => {
  if (themeStore.theme === 'dark') {
    return darkLogo;
  }
  return lightLogo;
});
</script>

<template>
  <view>
    <cover-image :src="themeLogo"></cover-image>
  </view>
</template>

