import type { CustomRequestOptions } from '@/http/types';
import { LOGIN_PAGE } from '@/router/config';
import { useTokenStore } from '@/store/token';
import { currRoute } from '@/utils';
import { useGlobalToast } from '@/composables/useGlobalToast';

export function http<T>(options: CustomRequestOptions) {
  // 1. 返回 Promise 对象
  return new Promise<T>((resolve, reject) => {
    const toast = useGlobalToast();

    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      // 响应成功
      success: async (res) => {
        const resData: IResData<T> = res.data as IResData<T>;

        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          let msg = resData.message || '请求错误';
          if (resData.success) {
            return resolve(resData.content);
          } else {
            // 登录超时
            if ([401].includes(resData.code)) {
              const tokenStore = useTokenStore();

              if (!tokenStore.isLoggingOut) {
                // 清理用户信息，跳转到登录页
                // 设置退出状态为true（加锁）
                tokenStore.setIsLoggingOut(true);

                await tokenStore.logout();
                const { path: currentPath } = currRoute();
                if (currentPath !== LOGIN_PAGE) {
                  uni.navigateTo({
                    url: LOGIN_PAGE,
                    complete: () => tokenStore.setIsLoggingOut(false)
                  });
                } else {
                  // 已在登录页，直接解锁
                  tokenStore.setIsLoggingOut(false);
                }
              }
            }

            toast.error(msg);
            return reject(msg);
          }
        }
        if (res.statusCode === 401 || resData.code === 401) {
          const tokenStore = useTokenStore();
          if (!tokenStore.isLoggingOut) {
            // 加锁
            tokenStore.setIsLoggingOut(true);
            tokenStore.logout();
            const { path: currentPath } = currRoute();
            if (currentPath !== LOGIN_PAGE) {
              uni.navigateTo({
                url: LOGIN_PAGE,
                complete: () => tokenStore.setIsLoggingOut(false)
              });
            } else {
              tokenStore.setIsLoggingOut(false);
            }
            return reject(res);
          }
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          !options.hideErrorToast && toast.error((res.data as IResData<T>).message || '请求错误');
          reject(res);
        }
      },
      // 响应失败
      fail(err) {
        toast.error('网络错误，换个网络试试');
        reject(err);
      }
    });
  });
}

/**
 * GET 请求
 * @param url 后台地址
 * @param query 请求query参数
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpGet<T>(
  url: string,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>
) {
  return http<T>({
    url,
    query,
    method: 'GET',
    header,
    ...options
  });
}

/**
 * POST 请求
 * @param url 后台地址
 * @param data 请求body参数
 * @param query 请求query参数，post请求也支持query，很多微信接口都需要
 * @param header 请求头，默认为json格式
 * @returns
 */
export function httpPost<T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>
) {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
    header,
    ...options
  });
}
/**
 * PUT 请求
 */
export function httpPut<T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>
) {
  return http<T>({
    url,
    data,
    query,
    method: 'PUT',
    header,
    ...options
  });
}

/**
 * DELETE 请求（无请求体，仅 query）
 */
export function httpDelete<T>(
  url: string,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>
) {
  return http<T>({
    url,
    query,
    method: 'DELETE',
    header,
    ...options
  });
}

http.get = httpGet;
http.post = httpPost;
http.put = httpPut;
http.delete = httpDelete;

http.Get = httpGet;
http.Post = httpPost;
http.Put = httpPut;
http.Delete = httpDelete;
