<script lang="ts" setup>
import CustomNavbar from '@/components/custom-navbar/index.vue';
import { options, statusOptions } from './data';
import { LOAD_MORE_STATE, SYSTEM_CACHE_QUERY } from '@/enums';
import { useQueryStore } from '@/store';
import { getTaskListApi } from '@/api/task';
import { getSystemDataDict } from '@/api/common';
import { getEnvBaseUrl, uniNavigateTo } from '@/utils';

defineOptions({
  name: 'Task'
});
definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·我的任务',
    enablePullDownRefresh: true
  }
});

const data = reactive({
  users: undefined,
  page: 1,
  size: 20,
  type: 0,
  taskStatus: 1,
  loading: false,
  total: 0,
  state: LOAD_MORE_STATE.FINISH,
  list: []
});

const { users, type, taskStatus, page, size, loading, total, state, list } = toRefs(data);

// 是否存在更多数据
const hasMore = computed(() => {
  return page.value * size.value < total.value;
});

// 币种列表（用于展示货币符号或 code）
const currencyList = ref<any[]>([]);

function formatCondition() {
  const conditionList = [];
  const typeCondition = {
    fileName: 'type',
    type: '3',
    valueA: `[${type.value}]`
  };

  const statusCondition = {
    fileName: 'taskStatus',
    type: '3',
    valueA: `[${taskStatus.value}]`
  };
  if (type.value !== 0) {
    conditionList.push(typeCondition);
  }

  if (taskStatus.value !== 0) {
    // 已审批
    if (taskStatus.value === 2) {
      statusCondition.valueA = '[2,3]';
    }
    conditionList.push(statusCondition);
  }
  return conditionList;
}

// 数字千分位（简化版，保留两位小数）
function thousandBit(num: any) {
  if (num == null || num === '') return '';
  if (isNaN(num)) return '';
  const n = Number(num);
  return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// 根据 currency id 返回 currencyCode（简化查找）
function getCurrencyCode(currencyList: any[], id: any) {
  if (!currencyList || !id) return '';
  const found = currencyList.find((c: any) => c.id == id);
  return found ? found.currencyCode || found.code || '' : '';
}

/**
 * 格式化单条任务数据：
 * - 映射审批人名称、创建人名称
 * - 统一处理头像、状态文本
 * - 生成卡片展示的 `labelShowData`
 */
function formatTaskItem(item: any, usersMap: any, currencyListLocal: any[]) {
  // 创建人
  const cUser = usersMap.get(item.createUser);
  item.avatar = cUser.avatar;
  item.createUserName = cUser?.label;
  item.avatarPath = cUser.avatarPath;

  // 审批人列表
  const approvers: string[] = [];
  if (item.processor && Array.isArray(item.processor)) {
    item.processor.forEach((p: any) => {
      const name = usersMap.get(p.operationUser)?.label;
      if (name) approvers.push(name);
    });
  }
  item.Approver = approvers.join(',');

  // 节点名解析
  if (item.nodeNames) {
    try {
      item.nodeNames = JSON.parse(item.nodeNames).name;
    } catch (e) {
      // ignore
    }
  }
  // 头像处理
  if (item.avatar == 2) {
    item.avatarPath = getEnvBaseUrl() + cUser.avatarPath;
  } else if (item.avatar == 3 && cUser.loginName) {
    item.serPhoto = cUser.loginName.charAt(0).toLocaleUpperCase();
  }

  // 流程/任务状态映射
  if (item.processStatus) {
    const map: any = { 1: '草本', 2: '待审批', 3: '审批中', 4: '已完成', 5: '已取消' };
    item.processStatusMsgs = map[item.processStatus] || '';
  }
  if (item.taskStatus) {
    const mapT: any = { 1: '待处理', 2: '已处理', 3: '弃权', 4: '抄送' };
    item.taskStatus = mapT[item.taskStatus] || item.taskStatus;
  }

  // 卡片展示字段
  item.labelShowData = {};
  const cCode = getCurrencyCode(currencyListLocal, item.approvalTaskCoreInfoVO?.currency);

  const moneyStr = (val: any) => (cCode ? cCode : '') + thousandBit(val || 0);

  // 按类型简化构建展示字段（覆盖多数常见类型）
  switch (item.type) {
    case 30:
    case 33:
    case 34:
      item.labelShowData = {
        label1: '付款金额',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: '收款方',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务主谈',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '付款编号',
        value4: item.objectCode || ''
      };
      break;
    case 28:
    case 29:
      item.labelShowData = {
        label1: '结算总金额',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: item.type == 29 ? item.approvalTaskCoreInfoVO?.counterpartyName : '卖方',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '订单所属部门',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '关联订单',
        value4: item.objectCode || ''
      };
      break;
    case 1:
      item.labelShowData = {
        label1: '金额',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: item.approvalTaskCoreInfoVO?.counterpartyName,
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务主谈',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '订单编号',
        value4: item.objectCode || ''
      };
      // 若有 objectCode，尝试根据首字母加前缀
      if (item.objectCode) {
        const orderType: any = { P: '采购', S: '销售', I: '内部', O: '外部' };
        const key = item.objectCode.substring(0, 1).toUpperCase();
        item.name = (orderType[key] || '') + '·' + (item.name || '');
      }
      break;
    case 2:
      item.labelShowData = {
        label1: '利润率',
        value1: (item.approvalTaskCoreInfoVO?.amount || 0) + '%',
        label2: '数量',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务部门',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '预算编号',
        value4: item.objectCode || ''
      };
      break;
    case 6:
      // 自定义：取前4个 otherCoreInfoVOList 字段
      item.labelShowData = {};
      for (let idx = 0; idx < 4; idx++) {
        item.labelShowData[`label${idx + 1}`] = item.otherCoreInfoVOList?.[idx]?.fieldName || '';
        item.labelShowData[`value${idx + 1}`] = item.otherCoreInfoVOList?.[idx]?.value || '';
      }
      break;
    case 20:
    case 23:
    case 45:
      item.labelShowData = {
        label1: '单价',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: '卖方',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务主谈',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '询价编号',
        value4: item.objectCode || ''
      };
      break;
    case 19:
      item.labelShowData = {
        label1: '金额',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: '卖方',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务主谈',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '机会编号',
        value4: item.objectCode || ''
      };
      break;
    case 35:
    case 36:
    case 44:
      item.labelShowData = {
        label1: '入库总数量',
        value1: '',
        label2: '出口总数量',
        value2: '',
        label3: '出入库单个数',
        value3: '',
        label4: '出入库单编号',
        value4: item.objectCode || ''
      };
      if (item.otherCoreInfoVOList) {
        for (const it of item.otherCoreInfoVOList) {
          if (it.fieldName === '入库总数量') item.labelShowData.value1 = it.value;
          if (it.fieldName === '出库总数量') item.labelShowData.value2 = it.value;
          if (it.fieldName === '出入库单个数') item.labelShowData.value3 = it.value;
        }
      }
      break;
    default:
      item.labelShowData = {
        label1: '金额',
        value1: moneyStr(item.approvalTaskCoreInfoVO?.amount),
        label2: '卖方',
        value2: item.approvalTaskCoreInfoVO?.counterparty || '',
        label3: '业务主谈',
        value3: item.approvalTaskCoreInfoVO?.departmentName || '',
        label4: '关联订单',
        value4: item.objectCode || ''
      };
  }
}

async function getList(refresh?: boolean) {
  try {
    state.value = LOAD_MORE_STATE.LOAD;
    loading.value = true;
    const conditionDtoList = formatCondition();
    const res = await getTaskListApi({ page: page.value, size: size.value, conditionDtoList });

    total.value = res.total;

    if (unref(users)) {
      // 对每一项进行统一格式化（头像、审批人、状态映射、卡片展示项等）

      res.list.forEach((i) => {
        formatTaskItem(i, unref(users), currencyList.value);
      });
    }

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
  const k = await getSystemDataDict("['data_currency']");
  currencyList.value = k || [];
  getList();
});

// 下拉刷新
onPullDownRefresh(() => {
  page.value = 1;
  list.value = [];
  getList(true);
});

function scrollEndHandle() {
  if (!unref(loading) && unref(hasMore)) {
    page.value++;
    getList();
  }
}

async function lookDetail(data) {
  const dataStr = encodeURIComponent(JSON.stringify(data))
  await uniNavigateTo(`/pages/task/detail?data=${dataStr}`);
}
</script>

<template>
  <view class="page-container flex flex-col overflow-hidden">
    <CustomNavbar fixed placeholder title="嘉盛石化·我的任务" safeAreaInsetTop></CustomNavbar>
    <wd-drop-menu>
      <wd-drop-menu-item v-model="type" :options="options" @change="getList()" />
      <wd-drop-menu-item v-model="taskStatus" :options="statusOptions" @change="getList()" />
    </wd-drop-menu>
    <scroll-view scroll-y class="flex-1 mt-4rpx" @scrolltolower="scrollEndHandle">
      <template v-if="list.length">
        <wd-card type="rectangle" v-for="item in list" :key="item.id" @tap="lookDetail(item)">
          <template #title>
            <view class="flex items-center">
              <wd-avatar v-if="item.avatar === 1" size="40rpx" :src="`/static/avatar/${item.avatarPath}.png`" />
              <wd-avatar v-else-if="item.avatar === 2" size="40rpx" :src="item.avatarPath" />
              <wd-avatar v-else-if="item.avatar === 3" size="40rpx" :text="item.serPhoto" />
              <text class="mr-auto ml-20rpx">{{ item.createUserName }}</text>
              <text class="text-primary">{{ item.name }}</text>
            </view>
          </template>

          <view class="flex flex-col text-26rpx gap-24rpx text-#333 card-content">
            <view class="flex items-center gap-24rpx">
              <text>{{ item.labelShowData.label1 }}</text>
              <text>{{ item.labelShowData.value1 }}</text>
              <text class="ml-auto">{{ item.labelShowData.label2 }}</text>
              <text>{{ item.labelShowData.value2 }}</text>
            </view>
            <view class="flex items-center gap-24rpx">
              <text>{{ item.labelShowData.label3 }}</text>
              <text>{{ item.labelShowData.value3 }}</text>
              <text class="ml-auto">流程状态</text>
              <text class="text-primary">
                {{ item.processStatusMsgs }}
                <template v-if="item.processStatus == 4">
                  <template v-if="item.passOrNot == 1">(通过)</template>
                  <template v-else>(驳回)</template>
                </template>
              </text>
            </view>
            <view class="flex items-center gap-24rpx">
              <text>{{ item.labelShowData.label4 }}</text>
              <text>{{ item.labelShowData.value4 }}</text>
              <text class="ml-auto">任务状态</text>
              <text class="text-primary">
                {{ item.taskStatus || '未知' }}
              </text>
            </view>
            <view class="flex items-center gap-24rpx">
              <text>情况说明</text>
              <text>{{ item.remark || '' }}</text>
            </view>
          </view>

          <template #footer>
            <view class="flex items-center">
              <text>当前审批人</text>
              <text class="ml-20rpx mr-auto">{{ item.Approver || '无' }}</text>
              <text class="text-24rpx">{{ item.createTime }}</text>
            </view>
          </template>
        </wd-card>
        <wd-loadmore :state="state" @reload="getList" />
      </template>
      <wd-status-tip v-else image="/static/images/search-empty.png" image-size="120" tip="暂无内容" />
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
@media (prefers-color-scheme: dark) {
  .card-content {
    color: #fff;
  }
}
</style>
