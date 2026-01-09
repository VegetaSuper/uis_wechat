<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
import { navigateToInterceptor } from '@/router/interceptor';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';
import { useAppStore, useThemeStore } from '@/store';
import { systemInfo } from './utils/systemInfo';

onLaunch(async (options) => {
  console.log('App Launch', options);
  useThemeStore().setTheme(systemInfo?.theme);
  await useAppStore().setSessionKey();
});
onShow((options) => {
  console.log('App Show', options);
  // 处理直接进入页面路由的情况：如h5直接输入路由、微信小程序分享后进入等
  // https://github.com/unibest-tech/unibest/issues/192
  if (options?.path) {
    navigateToInterceptor.invoke({ url: `/${options.path}`, query: options.query });
  } else {
    navigateToInterceptor.invoke({ url: '/' });
  }
});
onHide(() => {
  console.log('App Hide');
});

onThemeChange(({ theme }) => {
  useThemeStore().setTheme(theme);
});
</script>

<style lang="scss">
swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>
