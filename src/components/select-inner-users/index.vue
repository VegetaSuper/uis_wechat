<script lang="ts" setup>
import { getInnerUsersApi } from '@/api/common';
import { LOAD_MORE_STATE } from '@/enums';
import { throttle } from 'wot-design-uni/components/common/util';
import { useToast } from 'wot-design-uni';

defineOptions({
  name: 'SelectInnerUsers'
});

const emit = defineEmits(['update:modelValue']);

const toast = useToast();

const props = defineProps({
  modelValue: {
    type: [Number, String, Array]
  },
  multiple: {
    type: Boolean,
    default: false
  },
  inputAttrs: {
    type: Object
  }
});

const show = ref<boolean>(false);

const data = reactive({
  state: LOAD_MORE_STATE.FINISH,
  keyword: '',
  page: 1,
  size: 10,
  total: 0,
  list: [],
  listMap: new Map()
});

const { keyword, page, size, total, state, list, listMap } = toRefs(data);

// 是否存在更多数据
const hasMore = computed(() => {
  return page.value * size.value < total.value;
});

const handleQuery = throttle(() => {
  if (keyword.value) {
    page.value = 1;
    list.value = [];
    size.value = 10000;
    getList();
  }
}, 300);

const handleClear = () => {
  page.value = 1;
  size.value = 20;
  list.value = [];
  getList();
};

async function getList() {
  try {
    toast.loading('加载中...');
    state.value = LOAD_MORE_STATE.LOAD;
    const res = await getInnerUsersApi({
      page: page.value,
      size: size.value,
      enable: 1,
      name: keyword.value
    });
    total.value = res.total;
    res.list.forEach((i) => {
      if (!unref(listMap).get(i.id)) {
        listMap.value.set(i.id, i.name);
      }
    });
    list.value = [...list.value, ...res.list];
    state.value = LOAD_MORE_STATE.FINISH;
  } catch (e) {
    state.value = LOAD_MORE_STATE.ERROR;
  } finally {
    toast.close();
  }
}

function scrollEndHandle() {
  if (unref(hasMore)) {
    page.value++;
    state.value = LOAD_MORE_STATE.LOAD;
    getList();
  }
}

function open() {
  show.value = true;
  getList();
}

function close() {
  show.value = false;
  keyword.value = undefined;
  list.value = [];
}

const selectValue = computed({
  get() {
    if (props.multiple) {
      return props.modelValue || [];
    }
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  }
});

const selectNames = computed(() => {
  const val = unref(selectValue);
  if (props.multiple) {
    if (!Array.isArray(val) || !val.length) return '';
    return val
      .map((v) => listMap.value.get(v) || '')
      .filter(Boolean)
      .join('、');
  }
  return listMap.value.get(val) || '';
});

const boxRefs = ref([] as any[]);

// 多选
function handleCheck(index) {
  const el = boxRefs.value[index];
  el && el.toggle();
}

// 单选
function handleRadio(item) {
  selectValue.value = item.id;
}
</script>

<template>
  <view>
    <wd-textarea
      v-bind="inputAttrs"
      auto-height
      type="textarea"
      placeholder=""
      readonly
      v-model="selectNames"
      @tap="open"
    />
    <!-- <wd-input v-bind="inputAttrs" placeholder="" readonly v-model="selectNames" @click="open" /> -->
    <wd-popup
      v-model="show"
      root-portal
      position="bottom"
      lock-scroll
      safe-area-inset-bottom
      custom-style="height: 60%; border-top-left-radius: 20rpx; border-top-right-radius: 20rpx"
      @close="close"
    >
      <view class="list">
        <view class="list-title">
          <text>请选择</text>
        </view>
        <view class="list-search">
          <wd-search
            v-model="keyword"
            placeholder-left
            placeholder="请输入关键字查询"
            @change="handleQuery()"
            @clear="handleClear()"
            hide-cancel
          />
        </view>
        <scroll-view scroll-y class="list-scroll" :show-scrollbar="false" @scrolltolower="scrollEndHandle">
          <wd-cell-group border>
            <!-- 多选模式 -->
            <wd-checkbox-group v-if="multiple" v-model="selectValue">
              <wd-cell
                v-for="(item, index) in list"
                :key="item.id"
                :title="item.name"
                custom-class="m-0!"
                clickable
                @click="handleCheck(index)"
              >
                <view @click.stop="">
                  <wd-checkbox :ref="(el) => (boxRefs[index] = el)" :modelValue="item.id" custom-class="p-0!" />
                </view>
              </wd-cell>
            </wd-checkbox-group>

            <!-- 单选模式 -->
            <wd-radio-group v-else v-model="selectValue">
              <wd-cell
                v-for="(item, index) in list"
                :key="item.id"
                custom-class="m-0! py-0!"
                :title="item.name"
                clickable
                @click="handleRadio(item)"
              >
                <view @click.stop="">
                  <wd-radio :ref="(el) => (boxRefs[index] = el)" :value="item.id" custom-class="py-0! mt-0!" />
                </view>
              </wd-cell>
            </wd-radio-group>
          </wd-cell-group>
          <!-- 加载更多组件 -->
          <wd-loadmore v-if="list.length" :state="state" @reload="getList" />
          <wd-status-tip v-if="!list.length" image="/static/images/search-empty.png" tip="暂无内容" />
        </scroll-view>
        <view class="list-cancel">
          <wd-button type="info" block custom-class="rounded-[5rpx]!" @click="close">取 消</wd-button>
        </view>
      </view>
    </wd-popup>
    <wd-toast />
  </view>
</template>

<style lang="scss" scoped>
.list {
  @apply h-full overflow-hidden flex flex-col;

  .list-title {
    @apply py-[16rpx] font-550 text-[32rpx] text-center text-black;
  }

  .list-search {
    @apply border-x-0 border-y-1 border-solid border-gray-100;
  }

  .list-scroll {
    @apply box-border flex-1;
  }

  .list-cancel {
    @apply p-[20rpx];
  }
}
</style>

