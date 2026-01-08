<script lang="ts" setup>
defineOptions({
  name: 'Chance'
});
definePage({
  style: {
    navigationBarTitleText: '嘉盛石化·机会',
    enablePullDownRefresh: true
  }
});

onShow(() => {});

// 下拉刷新
onPullDownRefresh(() => {});
</script>

<template>
  <view class="h-full flex flex-col"> </view>
</template>

<style lang="scss" scoped></style>
