import CryptoJS from 'crypto-js';

/**
 * AES 加密/解密工具类
 * 使用 AES-CBC 模式，ZeroPadding 填充方式
 */

/**
 * AES 加密函数
 * @param word - 待加密的字符串
 * @param keyStr - 可选的加密密钥（UTF-8 字符串），如果不提供则使用默认密钥
 * @param ivStr - 可选的初始化向量（UTF-8 字符串），如果不提供则使用默认 IV
 * @returns 加密后的 Base64 编码字符串
 * @example
 * ```ts
 * const encrypted = Encrypt('hello world', 'my-key', 'my-iv');
 * ```
 */
export function Encrypt(word: string, keyStr: string, ivStr: string): string {
  // 使用自定义密钥和 IV，否则使用默认值
  const key = CryptoJS.enc.Utf8.parse(keyStr);
  const iv = CryptoJS.enc.Utf8.parse(ivStr);

  // 将待加密字符串转换为 WordArray
  const srcs = CryptoJS.enc.Utf8.parse(word);

  // 执行 AES 加密
  const encrypted = CryptoJS.AES.encrypt(word, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });

  // 返回 Base64 编码的密文
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * AES 解密函数
 * @param word - 待解密的 Base64 编码字符串
 * @param keyStr - 可选的解密密钥（UTF-8 字符串），如果不提供则使用默认密钥
 * @param ivStr - 可选的初始化向量（UTF-8 字符串），如果不提供则使用默认 IV
 * @returns 解密后的原始字符串
 * @example
 * ```ts
 * const decrypted = Decrypt('encrypted-base64-string');
 * const decrypted2 = Decrypt('encrypted-base64-string', 'my-key', 'my-iv');
 * ```
 */
export function Decrypt(word: string, keyStr: string, ivStr: string): string {
  // 使用自定义密钥和 IV，否则使用默认值
  const key = CryptoJS.enc.Utf8.parse(keyStr);
  const iv = CryptoJS.enc.Utf8.parse(ivStr);

  // 清理输入字符串（移除换行符）
  const cleanedWord = word ? word.replace(/\n/g, '') : '';

  // 如果输入为空，直接返回空字符串
  if (!cleanedWord) {
    return '';
  }

  // 解析 Base64 字符串
  const base64 = CryptoJS.enc.Base64.parse(cleanedWord);
  const src = CryptoJS.enc.Base64.stringify(base64);

  // 执行 AES 解密
  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  });

  // 转换为 UTF-8 字符串并返回
  return decrypt.toString(CryptoJS.enc.Utf8);
}

/**
 * 解密微信小程序/小程序云函数返回的加密数据（WXBizDataCrypt）
 * @param appId - 小程序 appId
 * @param sessionKey - sessionKey（Base64 编码字符串）
 * @param encryptedData - 加密数据（Base64 编码）
 * @param iv - 初始化向量（Base64 编码）
 * @returns 解密后的对象，失败返回 null
 */
export function decryptWXBizData(appId: string, sessionKey: string, encryptedData: string, iv: string): any | null {
  try {
    // sessionKey/iv/encryptedData 均为 Base64 编码
    const sessionKeyWords = CryptoJS.enc.Base64.parse(sessionKey);
    const ivWords = CryptoJS.enc.Base64.parse(iv);
    const encryptedWords = CryptoJS.enc.Base64.parse(encryptedData);

    // CryptoJS.AES.decrypt 接收一个 CipherParams 对象作为第一个参数
    const cipherParams: any = { ciphertext: encryptedWords };

    const decrypted = CryptoJS.AES.decrypt(cipherParams, sessionKeyWords, {
      iv: ivWords,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    const decoded = decrypted.toString(CryptoJS.enc.Utf8);
    if (!decoded) return null;

    const data = JSON.parse(decoded);
    if (data && data.watermark && data.watermark.appid !== appId) {
      console.error('appid not match:', data.watermark?.appid, 'expect:', appId);
      return null;
    }
    return data;
  } catch (err) {
    console.error('decryptWXBizData error:', err);
    return null;
  }
}
