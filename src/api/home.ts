import { http } from '@/http/http';
import { IListResult } from '@/typings';

/**
 * 获取首页公告
 * @returns
 */
export const getAnnouncementApi = () => {
  return http.post<IListResult<any>>('/websocket/systemBulletin/listValidity', { page: 1, size: 1 });
};
