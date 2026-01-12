<script lang="ts" setup>
import CustomNavbar from '@/components/custom-navbar/index.vue';

defineOptions({
  name: 'Chance'
});
definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·机会',
    enablePullDownRefresh: true
  }
});

onShow(() => {});

// 下拉刷新
onPullDownRefresh(() => {});
</script>

<template>
  <view class="page-container">
    <CustomNavbar fixed placeholder title="嘉盛石化·机会" safeAreaInsetTop></CustomNavbar>
  </view>
</template>

<style lang="scss" scoped></style>
