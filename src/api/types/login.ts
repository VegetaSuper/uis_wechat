
/**
 * 登录返回的信息，其实就是 token 信息
 */
export type IAuthLoginRes = {
  token: string;
  expiresIn: number; // 有效期(秒)
};

/**
 * 用户信息
 */
export interface IUserInfoRes {
  [key: string]: any; // 允许其他扩展字段
}


