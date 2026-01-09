<script lang="ts" setup>
import { uniNavigateBack } from '@/utils';

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
    <wd-navbar left-arrow fixed placeholder title="嘉盛石化·公告" safeAreaInsetTop @click-left="uniNavigateBack"></wd-navbar>
  </view>
</template>

<style lang="scss" scoped></style>
