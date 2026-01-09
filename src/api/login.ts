import { http } from '@/http/http';
import { IUserInfoRes } from '@/typings';

/**
 * 使用手机号码登录
 * @param tellphone 手机号码
 * @returns
 */
export function loginByTellphone(tellphone: string) {
  return http.post<IUserInfoRes>('/system/user/wechatLogin', { tellphone }, undefined, { secure: 'false' });
}

/**
 * 使用userId获取用户详情
 * @param id 
 * @returns 
 */
export function getUserDetailApi(id) {
  return http.post<IUserInfoRes>('/system/user/detail', { id });
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
