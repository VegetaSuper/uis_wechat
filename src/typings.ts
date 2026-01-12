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

export interface IFileAttachmentsQuery {
  tableCode: string;
  tableId: number;
  use: string;
  system: string
}

export interface IFileQuery {
  id: string;
  system: string
}


/**
 * 登录返回的信息，其实就是 token 信息
 */
export interface IAuthLoginRes {
  token: string;
  expiresIn: number; // 有效期(秒)
};

interface userCompanyDto {
  companyId: number | string;
  department: number | string;
  [key: string]: any; // 允许其他扩展字段
}

/**
 * 用户信息
 */
export interface IUserInfoRes {
  token: string;
  id: number;
  loginName: string;
  gender: number;
  tellphone: string;
  name: string;
  nameEn: string;
  namesJson: {
    name_abbreviation: string;
    name_en_abbreviation: string;
  };
  userCompanyDtoList?: userCompanyDto[];
  [key: string]: any; // 允许其他扩展字段
}

export interface ICacheUuery {
  value: number | string
  label: string,
  name: string,
  nameEn: string,
  [key: string]: any; // 允许其他扩展字段
}