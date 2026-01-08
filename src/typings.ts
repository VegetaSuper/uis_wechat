// 枚举定义

export enum TestEnum {
  A = '1',
  B = '2'
}

// uni.uploadFile文件上传参数
export interface IUniUploadFileOptions {
  file?: File;
  files?: UniApp.UploadFileOptionFiles[];
  filePath?: string;
  name?: string;
  formData?: any;
}

export interface IWechatInitResult {
  openid: string;
  session_key: string;
}

export interface IListResult<T> {
  list: T[];
  page: number;
  size: number;
  total: number;
}

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
