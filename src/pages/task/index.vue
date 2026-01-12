<script lang="ts" setup>
import CustomNavbar from '@/components/custom-navbar/index.vue';

defineOptions({
  name: 'Task'
});
definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·我的任务',
    enablePullDownRefresh: true
  }
});
</script>

<template>
  <view class="page-container">
    <CustomNavbar fixed placeholder title="嘉盛石化·我的任务" safeAreaInsetTop></CustomNavbar>
  </view>
</template>

<style lang="scss" scoped></style>
