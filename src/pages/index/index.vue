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

const message = ref('这是一条消息提示信息，这是一条消息提示信息，这是一条消息提示信息');

onShow(async () => {
  const data = await getAnnouncementApi();
  if (data && data.list) {
    message.value = data.list[0]?.topic;
  }
});

interface IModule {
  key: string;
  isTab?: boolean;
  path: string;
  title: string;
  icon: string;
}

const modules = ref<IModule[]>([
  {
    key: '1',
    isTab: true,
    path: '/pages/task/index',
    title: '审批任务',
    icon: '/static/images/home/task.png'
  },
  {
    key: '2',
    path: '/pages/notice/index',
    title: '公告',
    icon: '/static/images/home/notice.png'
  },
  {
    key: '3',
    path: '/pages/task/add',
    title: '发起审批',
    icon: '/static/images/home/add-task.png'
  }
]);

function goPage(item: IModule) {
  if (item.isTab) {
    uni.switchTab({ url: item.path });
    return;
  }
  uni.navigateTo({ url: item.path });
}
</script>

<template>
  <view class="page-container">
    <!-- 滚动公告 -->
    <view class="notice-bar">
      <wd-notice-bar custom-class="rounded-0! text-24rpx!" :text="message" color="#000" background-color="transparent">
        <template #prefix>公告：</template>
      </wd-notice-bar>
    </view>

    <!-- 首页模块 -->
    <view class="grid grid-cols-3 p-32rpx gap-32rpx">
      <view
        v-for="item in modules"
        :key="item.key"
        class="py-50rpx flex flex-col justify-center items-center bg-white"
        @click="goPage(item)"
      >
        <image class="size-50rpx mb-15rpx" :src="item.icon"></image>
        <text class="text-26rpx">{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.notice-bar {
  background: linear-gradient(90deg, #83aee2, #d2ebfd);
}

@media (prefers-color-scheme: dark) {
  .notice-bar {
    background: linear-gradient(90deg, #202a38, #495763);
  }
}
</style>
