<script lang="ts" setup>
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
    <wd-navbar fixed placeholder title="嘉盛石化·机会" safeAreaInsetTop></wd-navbar>
  </view>
</template>

<style lang="scss" scoped></style>
