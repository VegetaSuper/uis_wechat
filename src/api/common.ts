import { http } from '@/http/http';
import { IWechatInitResult } from '@/typings';
import type { SYSTEM_CACHE_QUERY } from '@/enums/query'

/**
 * 通过logincode 从后台换取 openId, sessionKey, unionId
 * @returns
 */
export const wechatInit = (code: string) => {
  return http.post<IWechatInitResult>('/system/user/wechatInit', { code }, undefined, { secure: 'false' });
};


/**
 * 获取系统下缓存数据
 * @param data
 * @returns
 */
export function getSystemCacheQueryApi(cacheField: SYSTEM_CACHE_QUERY) {
  return http.post<any[]>('/system/cache/query', { cacheField })
}