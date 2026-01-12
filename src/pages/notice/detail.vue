<script lang="ts" setup>
import { getFileAttachmentsApi, getFileApi } from '@/api/common';
import { useGlobalToast } from '@/composables/useGlobalToast';
import { getEnvBaseUrl, uniNavigateBack } from '@/utils';
import CustomNavbar from '@/components/custom-navbar/index.vue';

defineOptions({
  name: 'NoticeDetail'
});

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·公告详情'
  }
});

const toast = useGlobalToast();

const data = ref({
  id: undefined,
  code: undefined,
  topic: undefined,
  detail: undefined,
  createUserName: undefined,
  createTime: undefined,
  updateUserName: undefined,
  updateTime: undefined
});

const files = ref([]);

onLoad(async (options) => {
  try {
    data.value = JSON.parse(options.data);
    if (unref(data).id) {
      files.value = await getFileAttachmentsApi({
        tableCode: 'system_bulletin',
        tableId: unref(data).id,
        use: '',
        system: 'system'
      });
    }
  } catch (error) {}
});

const imageTypes = ['png', 'jpg', 'jpeg'];

const docTypes = ['doc', 'xls', 'ppt', 'pdf', 'docx', 'xlsx', 'pptx'];

/**
 * 预览附件
 * @param file
 */
async function handleClick({ id, fileName, fileType, url }) {
  const baseURL = getEnvBaseUrl();
  const fileUrl = baseURL + url;
  if (imageTypes.includes(fileType)) {
    uni.previewImage({
      current: 0,
      urls: [fileUrl],
      showmenu: true
    });
  } else if (docTypes.includes(fileType)) {
    const res = await getFileApi({ id, system: 'system' });
    const filePath = baseURL + res.url;
    uni.downloadFile({
      url: filePath,
      success(result) {
        const tempFilePath = result.tempFilePath;
        uni.openDocument({
          filePath: tempFilePath,
          fileType: res.fileType,
          fail(e) {
            toast.error('文件格式不支持');
            console.error('openDocument fail', e);
          }
        });
      },
      fail(e) {
        toast.error(`文件${fileName}预览失败`);
        console.error('downloadFile fail', e);
      }
    });
  } else {
    toast.error('该文件格式不支持预览');
  }
}
</script>

<template>
  <view class="page-container">
    <CustomNavbar
      left-arrow
      fixed
      placeholder
      title="嘉盛石化·公告详情"
      safeAreaInsetTop
      @click-left="uniNavigateBack"
    ></CustomNavbar>
    <wd-cell-group border>
      <wd-cell title="编号" :value="data.code" />
      <wd-cell title="主题" :value="data.topic" />
      <wd-cell title="内容" :value="data.detail" />
      <wd-cell title="创建人" :value="data.createUserName" />
      <wd-cell title="创建时间" :value="data.createTime" />
      <wd-cell title="修改人" :value="data.updateUserName" />
      <wd-cell title="最后修改时间" :value="data.updateTime" />
      <wd-cell title="附件" :value="files.length === 0 ? '无' : ''" />
      <template v-if="files.length">
        <wd-cell
          v-for="item in files"
          :key="item.id"
          :title="item.fileName"
          :label="item.remark"
          is-link
          @click="handleClick(item)"
        />
      </template>
    </wd-cell-group>
  </view>
</template>

