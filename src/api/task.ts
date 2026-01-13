import { http } from '@/http/http';

/**
 * 获取任务列表
 * @param params 
 * @returns 
 */
export const getTaskListApi = (data: IListParams) => {
  return http.post<IListResult<any>>('/approval/approvalProcessTask/listApprovalTask', data);
};

/**
 * 查询审批流程
 * @param type 
 * @returns 
 */
export const getTaskTypesApi = (type: number) => {
  return http.post<any[]>('/approval/approvalProcess/listByType', { type });
};