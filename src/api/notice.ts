import { http } from '@/http/http';

/**
 * 获取公告
 * @returns
 */
export const getNoticeApi = (params: IListParams) => {
  return http.post<IListResult<any>>('/websocket/systemBulletin/listValidity', params);
};
