import { useQueryStore } from '@/store'
import { getSystemCacheQueryApi } from '@/api/common'
import { SYSTEM_CACHE_QUERY } from '@/enums/query'

/**
 * 获取系统缓存数据
 */
export function useCacheQuery(...args: SYSTEM_CACHE_QUERY[]) {
  const res: Ref<Recordable> = ref({})
  return (() => {
    args.forEach((queryKey) => {
      res.value[queryKey] = []
      const data = useQueryStore().getSystemCacheQuery(queryKey)
      if (data) {
        res.value[queryKey] = data
      } else {
        getSystemCacheQueryApi(queryKey).then((result) => {
          res.value[queryKey] = result.map((item) => {
            // 可扩展
            return {
              value: item.id,
              label: item.name,
              name: item.name,
              nameEn: item.nameEn,
            }
          })
          useQueryStore().setQuery(queryKey, res.value[queryKey])
        })
      }
    })
    return toRefs(res.value)
  })()
}
