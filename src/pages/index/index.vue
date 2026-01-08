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

const message = ref('这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息')

onShow(async () => {
  const data = await getAnnouncementApi();
  if (data && data.list) {
    message.value = data.list[0]?.topic
  }
});
</script>

<template>
  <view class="page-container">
    <view class="notice-bar">
      <wd-notice-bar
        custom-class="rounded-0! text-24rpx!"
        :text="message"
        color="#000"
        background-color="transparent"
      >
        <template #prefix>公告：</template>
      </wd-notice-bar>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.notice-bar {
  background: linear-gradient(90deg, #83aee2, #d2ebfd);
}

@media (prefers-color-scheme: dark) {
  .notice-bar {
    background: linear-gradient(90deg, #202a38, #495763) !important;
  }
}
</style>
