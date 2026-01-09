import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getWxCode } from '@/api/login';
import { wechatInit } from '@/api/common';
import { useUserStore } from '@/store';
import { useTokenStore } from './token';
import { tabbarStore } from '@/tabbar/store';

export const useAppStore = defineStore(
  'app',
  () => {
    const session_key = ref('');

    const userStore = useUserStore();

    async function setSessionKey() {
      try {
        const tokenStore = useTokenStore();

        const res = await getWxCode();
        const data = await wechatInit(res.code);
        // openid 暂时没有用到
        // console.log('openid', data.openid);

        session_key.value = data.session_key;

        if (userStore.userInfo && !tokenStore.hasLogin) {
          await userStore.login(userStore.userInfo.tellphone);
        } else {
          tabbarStore.setTabbarList();
        }
      } catch (error) {
        console.error('setSessionKey', error);
      }
    }
    return {
      session_key,
      setSessionKey
    };
  },
  {
    persist: false
  }
);
