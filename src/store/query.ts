import { defineStore } from 'pinia';
import { SYSTEM_CACHE_QUERY } from '@/enums'
import { getSystemCacheQueryApi } from '@/api/common';
import { ICacheUuery } from '@/typings';


export const useQueryStore = defineStore('query', () => {

  const systemCacheQuery: Ref<Map<SYSTEM_CACHE_QUERY, ICacheUuery[]>> = ref(new Map())

  async function getSystemCacheQuery(key: SYSTEM_CACHE_QUERY, type: 'list' | 'map' = 'list') {
    if (!key) return null
    let list = systemCacheQuery.value.get(key)
    if (!list) {
      list = await getSystemCacheQueryApi(key)
      list = list.map(item => {
        // 可扩展
        return {
          avatar: item.avatar,
          loginName: item.loginName,
          avatarPath: item.avatarPath,
          value: item.id,
          label: item.name,
          name: item.name,
          nameEn: item.nameEn,
        }
      })
      setQuery(key, list)
    }
    if (type === 'map') {
      const data: Map<any, ICacheUuery> = new Map()
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
