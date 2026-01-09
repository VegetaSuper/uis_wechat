<script lang="ts" setup>
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
    <wd-navbar fixed placeholder title="嘉盛石化·我的任务" safeAreaInsetTop></wd-navbar>
  </view>
</template>

<style lang="scss" scoped></style>
