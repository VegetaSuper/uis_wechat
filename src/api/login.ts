import type { IAuthLoginRes } from './types/login';
import { http } from '@/http/http';


/**
 * 使用手机号码登录
 * @param tellphone 手机号码
 * @returns 
 */
export function loginByTellphone(tellphone: string) {
  return http.post<IAuthLoginRes>('/system/user/wechatLogin', { tellphone });
}

/**
 * 退出登录
 */
export function logout() {
  return http.post<void>('/logout');
}

/**
 * 获取微信登录凭证
 * @returns 
 */
export function getWxCode() {
  return new Promise<UniApp.LoginRes>((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (res) => resolve(res),
      fail: (err) => reject(new Error(err))
    });
  });
}


