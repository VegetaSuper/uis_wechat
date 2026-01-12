/**
 * 系统缓存枚举
 */
export enum SYSTEM_CACHE_QUERY {
  /** 所有用户 */
  USER = 'USER_LIST_ALL',

  /** 所有公司 */
  COMPANY = 'COMPANY_LIST_ALL',

  /** 所有角色 */
  ROLE = 'ROLE_LIST_ALL',

  /** 所有部门 */
  DEPARTMENT = 'DEPARTMENT_LIST_ALL'
}

export enum LOAD_MORE_STATE {
  FINISH = 'finished',
  LOAD = 'loading',
  ERROR = 'error'
}