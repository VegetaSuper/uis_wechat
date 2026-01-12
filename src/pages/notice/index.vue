<script lang="ts" setup>
import { uniNavigateBack, uniNavigateTo } from '@/utils';
import CustomNavbar from '@/components/custom-navbar/index.vue';
import { LOAD_MORE_STATE, SYSTEM_CACHE_QUERY } from '@/enums';
import { getNoticeApi } from '@/api/notice';
import { useQueryStore } from '@/store';

defineOptions({
  name: 'Notice'
});

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·公告',
    enablePullDownRefresh: true
  }
});

const data = reactive({
  users: undefined,
  page: 1,
  size: 20,
  loading: false,
  total: 0,
  state: LOAD_MORE_STATE.FINISH,
  list: []
});

const { users, page, size, loading, total, state, list } = toRefs(data);

// 是否存在更多数据
const hasMore = computed(() => {
  return page.value * size.value < total.value;
});

async function getList(refresh?: boolean) {
  try {
    state.value = LOAD_MORE_STATE.LOAD;
    loading.value = true;

    const res = await getNoticeApi({ page: page.value, size: size.value });

    if (unref(users)) {
      res.list.forEach((i) => {
        const createUser = unref(users).get(i.createUser);
        i.createUserName = createUser.label;
        const updateUser = unref(users).get(i.updateUser);
        i.updateUserName = updateUser.label;
      });
    }

    total.value = res.total;
    list.value = [...list.value, ...res.list];

    state.value = LOAD_MORE_STATE.FINISH;
  } catch (error) {
    state.value = LOAD_MORE_STATE.ERROR;
  } finally {
    loading.value = false;
    refresh && uni.stopPullDownRefresh();
  }
}

const { getSystemCacheQuery } = useQueryStore();

onLoad(async () => {
  users.value = await getSystemCacheQuery(SYSTEM_CACHE_QUERY.USER, 'map');
  getList();
});

function scrollEndHandle() {
  if (!unref(loading) && unref(hasMore)) {
    page.value++;
    getList();
  }
}

// 下拉刷新
onPullDownRefresh(() => {
  page.value = 1;
  list.value = [];
  getList(true);
});

async function lookDetail(data) {
  const dataStr = JSON.stringify(data);
  await uniNavigateTo(`/pages/notice/detail?data=${dataStr}`);
}
</script>

<template>
  <view class="page-container flex flex-col overflow-hidden">
    <CustomNavbar
      left-arrow
      fixed
      placeholder
      title="嘉盛石化·公告"
      safeAreaInsetTop
      @click-left="uniNavigateBack"
    ></CustomNavbar>
    <scroll-view scroll-y class="flex-1 pb-safe" @scrolltolower="scrollEndHandle">
      <template v-if="list.length">
        <view class="title">系统公告</view>
        <wd-cell-group border custom-class="mx-[32rpx]">
          <wd-cell v-for="item in list" :key="item.id" :title="item.topic" clickable @click="lookDetail(item)" />
        </wd-cell-group>
        <wd-loadmore :state="state" @reload="getList" />
      </template>
      <wd-status-tip v-else image="/static/images/search-empty.png" image-size="120" tip="暂无内容" />
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.title {
  margin: 0 32rpx;
  padding-left: 24rpx;
  height: 80rpx;
  line-height: 80rpx;
  color: #fff;
  background: linear-gradient(360deg, #63aef8, #2d94fc);
}

@media (prefers-color-scheme: dark) {
  .title {
    background: linear-gradient(360deg, #050f19, #073767);
  }
}
</style>

