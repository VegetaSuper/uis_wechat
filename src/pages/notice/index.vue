<script lang="ts" setup>
import { uniNavigateBack } from '@/utils';
import CustomNavbar from '@/components/custom-navbar/index.vue';

defineOptions({
  name: 'Notice'
});
definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·公告',
    enablePullDownRefresh: true
  }
});
</script>

<template>
  <view class="page-container">
    <CustomNavbar left-arrow fixed placeholder title="嘉盛石化·公告" safeAreaInsetTop @click-left="uniNavigateBack"></CustomNavbar>
  </view>
</template>

<style lang="scss" scoped></style>
