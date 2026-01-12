import type { CustomRequestOptions } from '@/http/types'
import { useGlobalToast } from '@/composables/useGlobalToast'
import { LOGIN_PAGE } from '@/router/config'
import { useTokenStore, useUserStore } from '@/store'
import { currRoute, uniNavigateTo } from '@/utils'

// 模块级重试状态
let reloginPromise: Promise<void> | null = null
let retryQueue: Array<{
  options: CustomRequestOptions
  resolve: (res: any) => void
  reject: (err: any) => void
}> = []

/**
 * 统一处理登出及跳转
 */
async function handleLogout() {
  const tokenStore = useTokenStore()
  if (tokenStore.isLoggingOut)
    return

  tokenStore.setIsLoggingOut(true)
  tokenStore.logout()
  const { path } = currRoute()
  if (path !== LOGIN_PAGE) {
    await uniNavigateTo(LOGIN_PAGE)
  }
  tokenStore.setIsLoggingOut(false)
}

/**
 * 触发重登录并重放队列中的请求
 */
async function triggerReloginAndReplay() {
  if (reloginPromise)
    return reloginPromise

  const userStore = useUserStore()
  // 检查用户信息是否存在
  if (!userStore.userInfo?.tellphone) {
    const err = new Error('未登录')
    handleLogout()
    retryQueue.forEach(q => q.reject(err))
    retryQueue = []
    return Promise.reject(err)
  }

  reloginPromise = userStore
    .login(userStore.userInfo.tellphone, false)
    .then(() => {
      // 登录成功，重放所有请求
      const currentQueue = [...retryQueue]
      retryQueue = []
      currentQueue.forEach((q) => {
        http({ ...q.options, _isRetry: true }).then(q.resolve).catch(q.reject)
      })
    })
    .catch((err) => {
      // 登录失败，清理队列
      handleLogout()
      retryQueue.forEach(q => q.reject(err))
      retryQueue = []
      throw err
    })
    .finally(() => {
      reloginPromise = null
    })

  return reloginPromise
}

export function http<T>(options: CustomRequestOptions) {
  return new Promise<T>((resolve, reject) => {
    const toast = useGlobalToast()

    uni.request({
      ...options,
      dataType: 'json',
      // #ifndef MP-WEIXIN
      responseType: 'json',
      // #endif
      success: async (res) => {
        const resData = res.data as IResData<T>
        const is401 = res.statusCode === 401 || (resData && resData.code === 401)

        // 1. 处理登录失效
        if (is401) {
          if (options._isRetry) {
            handleLogout()
            return reject(res)
          }
          // 加入重试队列并触发静默重登录
          retryQueue.push({ options, resolve, reject })
          triggerReloginAndReplay().catch(() => {})
          return
        }

        // 2. 处理 HTTP 成功状态
        if (res.statusCode >= 200 && res.statusCode < 300) {
          if (resData?.success) {
            return resolve(resData.content)
          }
          // 业务错误
          const msg = resData?.message || '请求错误'
          !options.hideErrorToast && toast.error(msg)
          return reject(msg)
        }

        // 3. 其他错误
        !options.hideErrorToast && toast.error(resData?.message || '请求错误')
        reject(res)
      },
      fail: (err) => {
        toast.error('网络错误，换个网络试试')
        reject(err)
      },
    })
  })
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
  options?: Partial<CustomRequestOptions>,
) {
  return http<T>({
    url,
    query,
    method: 'GET',
    header,
    ...options,
  })
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
  options?: Partial<CustomRequestOptions>,
) {
  return http<T>({
    url,
    query,
    data,
    method: 'POST',
    header,
    ...options,
  })
}
/**
 * PUT 请求
 */
export function httpPut<T>(
  url: string,
  data?: Record<string, any>,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>,
) {
  return http<T>({
    url,
    data,
    query,
    method: 'PUT',
    header,
    ...options,
  })
}

/**
 * DELETE 请求（无请求体，仅 query）
 */
export function httpDelete<T>(
  url: string,
  query?: Record<string, any>,
  header?: Record<string, any>,
  options?: Partial<CustomRequestOptions>,
) {
  return http<T>({
    url,
    query,
    method: 'DELETE',
    header,
    ...options,
  })
}

http.get = httpGet
http.post = httpPost
http.put = httpPut
http.delete = httpDelete

http.Get = httpGet
http.Post = httpPost
http.Put = httpPut
http.Delete = httpDelete
