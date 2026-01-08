<script setup lang="ts">
import { ref } from 'vue';
import { useThemeStore } from '@/store';
import FgTabbar from '@/tabbar/index.vue';
import { isPageTabbar } from './tabbar/store';
import { currRoute } from './utils';
import GlobalLoading from '@/components/global/GlobalLoading.vue';
import GlobalMessage from '@/components/global/GlobalMessage.vue';
import GlobalToast from '@/components/global/GlobalToast.vue';

const themeStore = useThemeStore();

const isCurrentPageTabbar = ref(true);
onShow(() => {
  const { path } = currRoute();
  isCurrentPageTabbar.value = isPageTabbar(path);
});

onLoad(() => {

});
</script>

<template>
  <wd-config-provider :theme-vars="themeStore.themeVars" :theme="themeStore.theme">
    <view class="flex flex-col h-screen overflow-hidden">
      <view class="flex-1 overflow-hidden">
        <KuRootView />
      </view>
      <FgTabbar v-if="isCurrentPageTabbar" />
    </view>
    <wd-toast />
    <wd-message-box />
    <GlobalLoading />
    <GlobalMessage />
    <GlobalToast />
  </wd-config-provider>
</template>
