<script lang="ts" setup>
import { getFileAttachmentsApi, getFileApi } from '@/api/common';
import { useGlobalToast } from '@/composables/useGlobalToast';
import { getEnvBaseUrl, uniNavigateBack } from '@/utils';
import CustomNavbar from '@/components/custom-navbar/index.vue';

defineOptions({
  name: 'TaskDetail'
});

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·任务详情'
  }
});

const toast = useGlobalToast();

const data = ref({
  
});


onLoad(async (options) => {
  try {
    data.value = JSON.parse(decodeURIComponent(options.data));
    console.log(data.value);
    
  } catch (error) {}
});


</script>

<template>
  <view class="page-container">
    <CustomNavbar
      left-arrow
      fixed
      placeholder
      title="嘉盛石化·任务详情"
      safeAreaInsetTop
      @click-left="uniNavigateBack"
    ></CustomNavbar>
  </view>
</template>

