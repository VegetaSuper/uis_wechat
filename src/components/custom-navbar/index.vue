<script lang="ts" setup>
defineOptions({
  name: 'CustomNavbar'
});

const emit = defineEmits(['click-left'])

const $attrs = useAttrs();

const isDev = import.meta.env.DEV;
</script>

<template>
  <wd-navbar v-bind="$attrs" custom-class="custom-navber" @click-left="emit('click-left')">
    <template #right v-if="isDev">
      <view>
        <text class="bg-#ff0000 text-white px-10rpx py-4rpx rounded-20rpx text-[24rpx]">试运行</text>
      </view>
    </template>
  </wd-navbar>
</template>
