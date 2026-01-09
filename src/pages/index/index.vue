<script lang="ts" setup>
import { getAnnouncementApi } from '@/api/home';
import { useThemeStore } from '@/store';
import { uniNavigateTo } from '@/utils';

defineOptions({
  name: 'Home'
});
definePage({
  // 使用 type: "home" 属性设置首页，其他页面不需要设置，默认为page
  type: 'home',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·首页',
    enablePullDownRefresh: true
  }
});

const themeStore = useThemeStore();

const noticeColor = computed(() => {
  if(themeStore.theme === 'dark') {
    return '#fff'
  }
  return '#000'
})

const message = ref('');

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

async function goNotice() {
  await uniNavigateTo('/pages/notice/index')
}

</script>

<template>
  <view class="page-container">
    <wd-navbar fixed placeholder title="嘉盛石化·首页" safeAreaInsetTop></wd-navbar>
    <!-- 滚动公告 -->
    <view class="notice-bar">
      <wd-notice-bar custom-class="rounded-0! text-24rpx!" :text="message" :color="noticeColor" background-color="transparent" @click="goNotice">
        <template #prefix>公告：</template>
      </wd-notice-bar>
    </view>

    <!-- 首页模块 -->
    <view class="grid grid-cols-3 p-32rpx gap-32rpx">
      <view
        v-for="item in modules"
        :key="item.key"
        class="module"
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
.module {
  @apply flex flex-col py-50rpx items-center justify-center bg-white;
}

@media (prefers-color-scheme: dark) {
  .notice-bar {
    background: linear-gradient(90deg, #202a38, #495763);
  }
  .module {
    background: #303030;
  }
}
</style>
