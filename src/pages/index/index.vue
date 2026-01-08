<script lang="ts" setup>
import { getAnnouncementApi } from '@/api/home';

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

onShow(async () => {
  const data = await getAnnouncementApi()
  console.log('getAnnouncementApi', data);
})
</script>

<template>
  <view class="page-container">
    
  </view>
</template>

<style lang="scss" scoped>

</style>
