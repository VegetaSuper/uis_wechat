<script lang="ts" setup>
import { ref, watch } from 'vue';
import type { UploadMethod, UploadFile } from 'wot-design-uni/components/wd-upload/types';
import { buildShortUUID } from '@/utils';
import { getEnvBaseUploadUrl } from '@/utils';
import { useTokenStore } from '@/store/token';
import { useGlobalToast } from '@/composables/useGlobalToast';

interface Props {
  modelValue: UploadFile[];
  limit?: number;
}

interface Emits {
  (e: 'update:modelValue', value: UploadFile[]): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => [],
  limit: 3
});

const emit = defineEmits<Emits>();

const toast = useGlobalToast();
const { getValidToken } = useTokenStore();

// 内部文件列表
const fileList = ref<UploadFile[]>([...props.modelValue]);

// 监听外部值变化
watch(
  () => props.modelValue,
  (newVal) => {
    fileList.value = [...newVal];
  },
  { deep: true }
);

// 自定义上传方法
const customUpload: UploadMethod = (file, formData, options) => {
  // 创建一个临时文件对象，用于显示上传状态
  const tempFile: UploadFile = {
    id: buildShortUUID('upload'),
    url: file.url,
    status: 'loading', // 上传中状态
    percent: 0
  };

  // 添加到文件列表
  fileList.value.push(tempFile);
  const fileIndex = fileList.value.length - 1;

  // 更新父组件
  emit('update:modelValue', fileList.value);

  const uploadTask = uni.uploadFile({
    url: getEnvBaseUploadUrl(),
    header: { token: getValidToken },
    name: options.name,
    fileName: options.name,
    fileType: options.fileType,
    formData,
    filePath: file.url,
    success(res) {
      const result = JSON.parse(res.data);
      if (result.code === 200) {
        // 更新文件状态为成功
        fileList.value[fileIndex].status = 'success';
        fileList.value[fileIndex].percent = 100;
        fileList.value[fileIndex].url = result.url;
        // 设置上传成功
        options.onSuccess(result, file, formData);
      } else {
        // 更新文件状态为失败
        fileList.value[fileIndex].status = 'fail';
        fileList.value[fileIndex].percent = 0;
        // 设置上传失败
        const errMsg = result.msg || '上传失败';
        toast.error(errMsg);
        options.onError({ ...res, errMsg }, file, formData);
      }
      // 更新父组件
      emit('update:modelValue', fileList.value);
    },
    fail(err) {
      // 更新文件状态为失败
      fileList.value[fileIndex].status = 'fail';
      fileList.value[fileIndex].percent = 0;
      // 设置上传失败
      options.onError(err, file, formData);
      // 更新父组件
      emit('update:modelValue', fileList.value);
    }
  });

  // 设置当前文件加载的百分比
  uploadTask.onProgressUpdate((res) => {
    // 更新文件上传进度
    fileList.value[fileIndex].percent = res.progress;
    options.onProgress(res, file);
    // 更新父组件
    emit('update:modelValue', fileList.value);
  });
};

// 处理文件移除
function handleUploadRemove(e: { file: UploadFile }) {
  const index = fileList.value.findIndex((item) => item.id === e.file.id);
  if (index > -1) {
    fileList.value.splice(index, 1);
    // 更新父组件
    emit('update:modelValue', fileList.value);
  }
}

defineExpose({
  fileList
});
</script>

<template>
  <wd-upload
    :file-list="fileList"
    :upload-method="customUpload"
    multiple
    show-limit-num
    accept="image"
    :limit="limit"
    @remove="handleUploadRemove"
  ></wd-upload>
</template>
