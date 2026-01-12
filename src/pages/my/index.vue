<script lang="ts" setup>
import { useQueryStore, useUserStore } from '@/store';
import Logo from '@/components/logo/index.vue';
import { SYSTEM_CACHE_QUERY } from '@/enums';
import { getUserDetailApi } from '@/api/login';
import type { ICacheUuery } from '@/typings';
import { GENDER_ARRAY } from '@/enums/enums';
import CustomNavbar from '@/components/custom-navbar/index.vue';

definePage({
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '嘉盛石化·我的'
  }
});

type queryMap = Map<any, ICacheUuery>;

const userStore = useUserStore();
const { getSystemCacheQuery } = useQueryStore();

const genderName = ref('');
// 公司&部门
const companyDept = ref('');
// 角色
const roleNames = ref('');

const cells = computed(() => {
  return [
    {
      label: '账号',
      value: userStore.userInfo?.loginName
    },
    {
      label: '手机',
      value: userStore.userInfo?.tellphone
    },
    {
      label: '中文名',
      value: userStore.userInfo?.name
    },
    {
      label: '英文名',
      value: userStore.userInfo?.nameEn
    },
    {
      label: '中文昵称',
      value: userStore.userInfo?.namesJson?.name_abbreviation
    },
    {
      label: '英文昵称',
      value: userStore.userInfo?.namesJson?.name_en_abbreviation
    },
    {
      label: '性别',
      value: genderName.value
    },
    {
      label: '公司部门',
      value: companyDept.value
    },
    {
      label: '角色',
      value: roleNames.value
    }
  ];
});

onLoad(async () => {
  const gender = GENDER_ARRAY.find((i) => i.value === userStore.userInfo?.gender);
  if (gender) {
    genderName.value = gender.label;
  }
  const user = await getUserDetailApi(userStore.userInfo?.id);

  const companys = (await getSystemCacheQuery(SYSTEM_CACHE_QUERY.COMPANY, 'map')) as queryMap;
  const roles = (await getSystemCacheQuery(SYSTEM_CACHE_QUERY.ROLE, 'map')) as queryMap;
  const departments = (await getSystemCacheQuery(SYSTEM_CACHE_QUERY.DEPARTMENT, 'map')) as queryMap;

  // 公司/部门 组合
  const companyDeptList: string[] = [];
  user?.userCompanyDtoList?.forEach((item) => {
    const company = companys.get(item.companyId);
    const dept = departments.get(item.department);
    const compLabel = company?.label ?? company?.name ?? '';
    const deptLabel = dept?.label ?? dept?.name ?? '';
    if (compLabel && deptLabel) {
      companyDeptList.push(`${compLabel}/${deptLabel}`);
    } else if (compLabel) {
      companyDeptList.push(compLabel);
    }
  });
  companyDept.value = companyDeptList.join('、');

  // 角色名称
  const roleList: string[] = [];
  user?.userRoleDtoList?.forEach((r) => {
    const role = roles.get(r.roleId);
    const roleLabel = role?.label ?? role?.name;
    if (roleLabel) roleList.push(roleLabel);
  });
  roleNames.value = roleList.join('、');
});
</script>

<template>
  <view class="page-container px-32rpx">
    <CustomNavbar fixed placeholder title="嘉盛石化·我的" safeAreaInsetTop></CustomNavbar>
    <view class="p-32rpx">
      <Logo></Logo>
    </view>
    <wd-cell-group border>
      <wd-cell
        v-for="(item, index) in cells"
        :key="index"
        :title="item.label"
        :value="item.value || ''"
        custom-class="info-cell"
      >
        <!-- <template #icon>
          </template> -->
      </wd-cell>
    </wd-cell-group>
  </view>
</template>

<style lang="scss" scoped>
  :deep(.info-cell) {
    .wd-cell__right {
      min-width: 450rpx!important;
    }
  }
</style>
