import type { IAuthLoginRes } from '@/api/types/login';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue'; // 修复：导入 computed
import { logout as _logout } from '@/api/login';
import { useUserStore } from './user';
import { LOGIN_PAGE } from '@/router/config';

// 初始化状态
const tokenInfoState = {
  token: '',
  expiresIn: 0
}

export const useTokenStore = defineStore(
  'token',
  () => {
    // 定义用户信息
    const tokenInfo = ref<IAuthLoginRes>({ ...tokenInfoState });
    // 设置用户信息
    const setTokenInfo = (val: IAuthLoginRes) => {
      tokenInfo.value = val;

      // 计算并存储过期时间
      const expireTime = val.expiresIn * 1000;
      uni.setStorageSync('accessTokenExpireTime', expireTime);
    };

    /**
     * 判断token是否过期
     */
    const isTokenExpired = computed(() => {
      const now = Date.now();
      const expireTime = uni.getStorageSync('accessTokenExpireTime');
      // 空表示永不过期
      if (!expireTime) return false;
      return now >= expireTime;
    });

    /**
     * 退出登录 并 删除用户信息
     */
    const logout = async () => {
      try {
        await _logout();
        tokenInfo.value = {
          token: '',
          expiresIn: 0
        };

        // 清除存储的过期时间
        uni.removeStorageSync('accessTokenExpireTime');
        uni.reLaunch({ url: LOGIN_PAGE });
        return Promise.resolve();
      } catch (error) {
        console.error('退出登录失败:', error);
        return Promise.reject(error);
      } finally {
        // 无论成功失败，都需要清除本地token信息
        const userStore = useUserStore();
        await userStore.removeUserInfo();
      }
    };

    /**
     * 获取有效的token
     * 注意：在computed中不直接调用异步函数，只做状态判断
     * 实际的刷新操作应由调用方处理
     */
    const getValidToken = computed(() => {
      // token已过期，返回空
      if (isTokenExpired.value) {
        return '';
      }
      return tokenInfo.value.token || ''
    });

    /**
     * 检查是否有登录信息（不考虑token是否过期）
     */
    const hasLoginInfo = computed(() => {
      return !!tokenInfo.value.token
    });

    /**
     * 检查是否已登录且token有效
     */
    const hasValidLogin = computed(() => {
      return hasLoginInfo.value && !isTokenExpired.value;
    });

    const isLoggingOut = ref<boolean>(false);

    // 新增：设置退出登录状态
    function setIsLoggingOut(status: boolean) {
      isLoggingOut.value = status;
    }

    return {
      // 核心API方法
      logout,
      isLoggingOut,
      setIsLoggingOut,
      // 认证状态判断（最常用的）
      hasLogin: hasValidLogin,

      // 调试或特殊场景可能需要直接访问的信息
      tokenInfo,
      setTokenInfo,
      getValidToken
    };
  },
  {
    // 添加持久化配置，确保刷新页面后token信息不丢失
    persist: true
  }
);
