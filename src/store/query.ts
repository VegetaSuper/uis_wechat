import { defineStore } from 'pinia';
import { SYSTEM_CACHE_QUERY } from '@/enums/query'

export const useQueryStore = defineStore('query', () => {

  const systemCacheQuery: Ref<Map<SYSTEM_CACHE_QUERY, any[]>> = ref(new Map())

  function getSystemCacheQuery(key: SYSTEM_CACHE_QUERY, type: 'list' | 'map' = 'list') {
    if (!key) return null
    const list = systemCacheQuery.value.get(key)
    if (type === 'map') {
      const data = new Map()
      list.forEach(item => {
        data.set(item.value, item)
      })
      return data
    }
    return list
  }

  function setQuery(key: SYSTEM_CACHE_QUERY, value: any) {
    if (key && value) {
      systemCacheQuery.value.set(key, value)
    }
  }

  function reset() {
    systemCacheQuery.value.clear()
  }

  return {
    systemCacheQuery,
    getSystemCacheQuery,
    setQuery,
    reset,
  }
})
