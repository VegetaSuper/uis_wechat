import { http } from '@/http/http';

export interface IWechatInitResult {
  openid: string,
  session_key: string
}

/**
 * 通过logincode 从后台换取 openId, sessionKey, unionId
 * @returns 
 */
export const wechatInit = (code: string) => {
  return http.post<IWechatInitResult>('/system/user/wechatInit', { code });
}