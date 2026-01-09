<script lang="ts" setup>
import { useUserStore } from '@/store';
import Logo from '@/components/logo/index.vue'

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·我的'
  }
});

const userStore = useUserStore();
</script>

<template>
  <view class="page-container px-32rpx">
    <wd-navbar fixed placeholder title="嘉盛石化·我的" safeAreaInsetTop></wd-navbar>
    <view class="p-32rpx">
      <Logo></Logo>
    </view>
    <wd-cell-group>
      <wd-cell title="标题文字" value="内容" icon="setting" />
      <wd-cell title="标题文字" value="内容">
        <template #icon>
          <view class="cell-icon"></view>
        </template>
      </wd-cell>
    </wd-cell-group>
  </view>
</template>

<style lang="scss"></style>
