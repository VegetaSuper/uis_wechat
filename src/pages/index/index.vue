<script lang="ts" setup>
defineOptions({
  name: 'Home'
});
definePage({
  // 使用 type: "home" 属性设置首页，其他页面不需要设置，默认为page
  type: 'home',
  style: {
    navigationBarTitleText: '嘉盛石化·首页',
    enablePullDownRefresh: true
  }
});

</script>

<template>
  <view class="page-container">
    
  </view>
</template>

<style lang="scss" scoped>

</style>
