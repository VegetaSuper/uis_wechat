import { http } from '@/http/http';

/**
 * 获取任务列表
 * @param params 
 * @returns 
 */
export const getTaskListApi = (data: IListParams) => {
  return http.post<IListResult<any>>('/approval/approvalProcessTask/listApprovalTask', data);
};
