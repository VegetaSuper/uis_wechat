import { http } from '@/http/http';
import { IWechatInitResult } from '@/typings';

/**
 * 通过logincode 从后台换取 openId, sessionKey, unionId
 * @returns 
 */
export const wechatInit = (code: string) => {
  return http.post<IWechatInitResult>('/system/user/wechatInit', { code }, undefined, { secure: 'false' });
}