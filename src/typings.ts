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

// 高德地图选址
export interface AmapPickData {
  address: string;
  city: string;
  citycode: string;
  district: string;
  adcode: string;
  id: string;
  location: string;
  name: string;
  province: string;
  pcode: string;
  finallyAddress?: string;
  lngLat?: string[];
}
