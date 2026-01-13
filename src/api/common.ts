import { http } from '@/http/http';
import { IFileAttachmentsQuery, IFileQuery, IWechatInitResult } from '@/typings';
import type { SYSTEM_CACHE_QUERY } from '@/enums'

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

/**
 * 获取系统字典数据
 * @param keys 
 * @returns 
 */
export function getSystemDataDict(keys: string) {
  return http.post<any[]>('/system/dataDict/listDataDict', { keys })
}

interface FileAttachment {
  fileType: string;
  id: string;
  url: string;
  fileName: string;
}

/**
 * 获取附件列表
 * @param data 
 * @returns 
 */
export function getFileAttachmentsApi(data: IFileAttachmentsQuery) {
  return http.post<FileAttachment[]>('/file/fileAttachments/list', data)
}

/**
 * 根据id获取附件
 * @param data 
 * @returns 
 */
export function getFileApi(data: IFileQuery) {
  return http.post<FileAttachment>('/file/fileAttachments/listFileById', data)
}

/**
 * 获取内部用户
 * @param data 
 * @returns 
 */
export function getInnerUsersApi(data: IListParams) {
  console.log('aas', data);
  
  return http.post<IListResult<any>>('/system/user/inner/list', data)
}