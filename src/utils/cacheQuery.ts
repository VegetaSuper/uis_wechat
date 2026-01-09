import { useQueryStore } from '@/store'
import { SYSTEM_CACHE_QUERY } from '@/enums/query'

/**
 * 获取系统缓存数据
 */
export function useCacheQuery(...args: SYSTEM_CACHE_QUERY[]) {
  const res: Ref<Recordable> = ref({})
  return (() => {
    args.forEach(async (queryKey) => {
      res.value[queryKey] = []
      const data = await useQueryStore().getSystemCacheQuery(queryKey)
      res.value[queryKey] = data
    })
    return toRefs(res.value)
  })()
}
