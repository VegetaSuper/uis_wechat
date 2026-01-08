import { defineStore } from 'pinia';
import { ref } from 'vue';
import { loginByTellphone } from '@/api/login';
import { useTokenStore } from './token';
import { tabbarStore } from '@/tabbar/store';
import { IUserInfoRes } from '@/typings';

// 默认头像

export const useUserStore = defineStore(
  'user',
  () => {
    const { setTokenInfo } = useTokenStore();

    // 定义用户信息
    const userInfo = ref<IUserInfoRes>(null);

    // 设置用户信息
    const setUserInfo = (val: IUserInfoRes) => {
      userInfo.value = val;
    };

    // 删除用户信息
    const removeUserInfo = () => {
      userInfo.value = null
    };

    // 登录
    async function login(tellphone: string, goIndex: boolean = true): Promise<void> {
      try {
        const res = await loginByTellphone(tellphone);
        setUserInfo({ ...res, tellphone })

        setTokenInfo({
          token: res.token,
          expiresIn: 0
        });
        tabbarStore.setTabbarList()
        goIndex && uni.switchTab({ url: '/pages/index/index' })

        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return {
      userInfo,
      removeUserInfo,
      setUserInfo,
      login,
    };
  },
  {
    persist: true
  }
);
