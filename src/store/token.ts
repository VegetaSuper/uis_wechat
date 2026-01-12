import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useUserStore } from './user';
import { LOGIN_PAGE } from '@/router/config';
import { IAuthLoginRes } from '@/typings';

// 初始化状态
const tokenInfoState = {
  token: '',
  expiresIn: 0
};

export const useTokenStore = defineStore(
  'token',
  () => {
    // 定义用户信息
    const tokenInfo = ref<IAuthLoginRes>({ ...tokenInfoState });
    // 设置用户信息
    const setTokenInfo = (val: IAuthLoginRes) => {
      const input = Number(val.expiresIn) || 0;
      // 如果是 0/未传 -> 默认 1 小时（秒）
      const defaultSeconds = 60 * 60;
      const secs = input || defaultSeconds;
      // 如果输入值看起来像 ms（> 1e12），直接当作到期时间戳，否则按秒转换为到期时间戳（ms）
      const expiresAt = input > 1e12 ? input : Date.now() + secs * 1000;

      tokenInfo.value = {
        token: val.token,
        expiresIn: expiresAt
      };
    };

    /**
     * 判断token是否过期
     */
    const isTokenExpired = computed(() => {
      const now = Date.now();
      const expireTime = tokenInfo.value.expiresIn

      // 空表示永不过期
      if (!expireTime) return false;
      return now >= expireTime;
    });

    const clearToken = () => {
      tokenInfo.value = {
        token: '',
        expiresIn: 0
      };
      uni.reLaunch({ url: LOGIN_PAGE });
    }

    /**
     * 退出登录 并 删除用户信息
     */
    const logout = () => {
      // 无论成功失败，都需要清除本地token信息
      const userStore = useUserStore();
      userStore.removeUserInfo();

      clearToken()
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
      return tokenInfo.value.token || '';
    });

    /**
     * 检查是否已登录且token有效
     */
    const hasLogin = computed(() => {
      return !!tokenInfo.value.token && !isTokenExpired.value;
    });

    const isLoggingOut = ref<boolean>(false);

    // 新增：设置退出登录状态
    function setIsLoggingOut(status: boolean) {
      isLoggingOut.value = status;
    }

    return {
      logout,
      isLoggingOut,
      setIsLoggingOut,
      // 认证状态判断（最常用的）
      hasLogin,

      // 调试或特殊场景可能需要直接访问的信息
      tokenInfo,
      setTokenInfo,
      clearToken,
      getValidToken
    };
  },
  {
    // 添加持久化配置，确保刷新页面后token信息不丢失
    persist: true
  }
);
