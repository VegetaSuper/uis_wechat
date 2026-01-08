<script lang="ts" setup>
import { useUserStore } from '@/store';

definePage({
  style: {
    navigationBarTitleText: '嘉盛石化·我的'
  }
});

const userStore = useUserStore();
</script>

<template>
  <view class="page-container"> </view>
</template>

<style lang="scss"></style>
