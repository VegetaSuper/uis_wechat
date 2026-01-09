<script lang="ts" setup>
import { ensureDecodeURIComponent } from '@/utils';
import { tabbarList } from '@/tabbar/config';
import lightLogo from '@/static/images/login/light-logo.png';
import darkLogo from '@/static/images/login/dark-logo.png';
import { useAppStore, useThemeStore, useUserStore } from '@/store';
import { decryptWXBizData } from '@/utils/secret';

defineOptions({
  name: 'Login'
});

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·登录'
  }
});

const redirectUrl = ref('');

onLoad((options) => {
  if (options.redirect) {
    redirectUrl.value = ensureDecodeURIComponent(options.redirect);
  } else {
    redirectUrl.value = tabbarList[0].pagePath;
  }
});

const themeStore = useThemeStore();

const themeLogo = computed(() => {
  if (themeStore.theme === 'dark') {
    return darkLogo;
  }
  return lightLogo;
});

const appStore = useAppStore();

const { login } = useUserStore();

async function getPhoneNumber(e) {
  if (e.detail.encryptedData && e.detail.iv) {
    const appId = import.meta.env.VITE_WX_APPID;
    const data = decryptWXBizData(appId, appStore.session_key, e.detail.encryptedData, e.detail.iv);
    await login(data.phoneNumber);
  }
}
</script>

<template>
  <view class="flex flex-col justify-center items-center px-10%">
    <wd-navbar fixed placeholder title="嘉盛石化·登录" safeAreaInsetTop></wd-navbar>
    <cover-image :src="themeLogo"></cover-image>
    <text class="text-primary mt-20rpx mb-100rpx">欢迎登录嘉盛石化</text>
    <view class="indent-72rpx text-36rpx">
      本小程序（嘉胜石化）仅限上海嘉胜石油化工有限公司<text class="text-primary">内部员工</text
      >使用，用于公司内部管理，不对外开放。本小程序需使用预设的手机号码登录方可使用。
    </view>
    <button class="w-80% mt-40%" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" type="primary">
      使用手机号码登录
    </button>
  </view>
</template>
