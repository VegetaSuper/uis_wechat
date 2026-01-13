<script lang="ts" setup>
import { uniNavigateBack } from '@/utils';
import CustomNavbar from '@/components/custom-navbar/index.vue';
import { FormRules } from 'wot-design-uni/components/wd-form/types';
import { getTaskTypesApi } from '@/api/task';
import SelectInnerUsers from '@/components/select-inner-users/index.vue';

defineOptions({
  name: 'AddTask'
});
definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·发起审批',
    enablePullDownRefresh: true
  }
});

const loading = ref(false);

const model = reactive({
  taskType: undefined,
  remark: undefined,
  nextUser: undefined,
  csUsers: undefined
});

const taskTypes = ref([]);

const rules = ref<FormRules>({});

onLoad(async () => {
  taskTypes.value = await getTaskTypesApi(6);
});

function handleSubmit() {}
</script>

<template>
  <view class="page-container">
    <CustomNavbar
      left-arrow
      fixed
      placeholder
      title="嘉盛石化·发起审批"
      safeAreaInsetTop
      @click-left="uniNavigateBack"
    ></CustomNavbar>
    <wd-form ref="formRef" :model="model" :rules="rules" errorType="toast">
      <wd-cell-group custom-class="group" title="基础信息" border>
        <wd-picker
          label="审批流程"
          placeholder="请先选择审批流程"
          label-width="100px"
          value-key="id"
          label-key="name"
          prop="taskType"
          v-model="model.taskType"
          :columns="taskTypes"
        />
        <wd-textarea
          label="情况说明"
          label-width="100px"
          auto-height
          type="textarea"
          v-model="model.remark"
          show-word-limit
          clearable
          prop="remark"
        />
        <SelectInnerUsers :inputAttrs="{ label: '下一个审批人', labelWidth: '100px' }" v-model="model.nextUser"></SelectInnerUsers>
        <SelectInnerUsers :inputAttrs="{ label: '抄送人', labelWidth: '100px' }" multiple v-model="model.csUsers"></SelectInnerUsers>
      </wd-cell-group>
    </wd-form>
    <view class="handle-box fixed bottom-0 left-0 bg-white w-full p-[32rpx] pb-safe box-border">
      <wd-button block custom-class="rounded-[5rpx]!" :loading="loading" @click="handleSubmit">保存</wd-button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@media (prefers-color-scheme: dark) {
  .handle-box {
    background-color: #000;
  }
}
</style>

