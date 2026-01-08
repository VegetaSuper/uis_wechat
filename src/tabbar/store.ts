import type { CustomTabBarItem, CustomTabBarItemBadge } from './config';
import { reactive } from 'vue';

import { FG_LOG_ENABLE } from '@/router/interceptor';
import { customTabbarEnable, TABBAR_FOUR, TABBAR_THREE } from './config';
import { useUserStore } from '@/store';

const BULGE_ENABLE = false;

function initTabbarList(list: CustomTabBarItem[]): CustomTabBarItem[] {
  const processedList = list.map((item) => ({
    ...item,
    pagePath: item.pagePath.startsWith('/') ? item.pagePath : `/${item.pagePath}`
  }));

  if (customTabbarEnable && BULGE_ENABLE) {
    if (processedList.length % 2) {
      console.error('有鼓包时 tabbar 数量必须是偶数，否则样式很奇怪！！');
    }
    processedList.splice(processedList.length / 2, 0, {
      isBulge: true
    } as CustomTabBarItem);
  }

  return processedList;
}

const initList = initTabbarList(TABBAR_THREE);

const tabbarList = reactive<CustomTabBarItem[]>(initList);

export function isPageTabbar(path: string) {
  const _path = path.split('?')[0];
  return tabbarList.some((item) => item.pagePath === _path);
}

/** 允许进入机会页的用户 */
/**
 * 允许进入机会页的用户
 * 6553
 */
// const permissionUserList = [134, 140, 146, 170, 497, 167, 596, 652, 74, 75, 126, 88, 112];

const permissionUserList = [6553];

const tabbarStore = reactive({
  curIdx: uni.getStorageSync('app-tabbar-index') || 0,
  prevIdx: uni.getStorageSync('app-tabbar-index') || 0,

  setCurIdx(idx: number) {
    this.prevIdx = this.curIdx;
    this.curIdx = idx;
    uni.setStorageSync('app-tabbar-index', idx);
  },

  setTabbarItemBadge(idx: number, badge: CustomTabBarItemBadge) {
    if (tabbarList[idx]) {
      tabbarList[idx].badge = badge;
    }
  },

  setAutoCurIdx(path: string) {
    const _path = path.split('?')[0];
    const index = tabbarList.findIndex((item) => item.pagePath === _path);

    FG_LOG_ENABLE && console.log('自动匹配TabBar索引:', index, '路径:', _path);

    if (index === -1) {
      const pagesPathList = getCurrentPages().map((item) =>
        item.route.startsWith('/') ? item.route : `/${item.route}`
      );
      const hasTabbarPage = tabbarList.some((item) => pagesPathList.includes(item.pagePath));

      if (!hasTabbarPage) {
        this.setCurIdx(0);
      }
    } else {
      this.setCurIdx(index);
    }
  },

  restorePrevIdx() {
    if (this.prevIdx === this.curIdx) return;
    this.setCurIdx(this.prevIdx);
    this.prevIdx = this.curIdx;
  },

  setTabbarList() {
    let list = TABBAR_THREE;
    const userStore = useUserStore();
    if (userStore.userInfo && userStore.userInfo.id) {
      if (permissionUserList.includes(userStore.userInfo.id)) {
        list = TABBAR_FOUR;
      }
    }
    const newTabbarList = initTabbarList(list);

    tabbarList.length = 0;
    tabbarList.push(...newTabbarList);

    const safeIdx = Math.min(this.curIdx, tabbarList.length - 1);
    this.setCurIdx(safeIdx);
  }
});

export { tabbarList, tabbarStore };
