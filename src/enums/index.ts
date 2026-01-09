/**  枚举生成 - 2026/1/7 17:15:44 */

/**  用户类型;Account type */
export const ACCOUNT_TYPE_ARRAY = [
  {
    value: 0,
    label: '超级管理员',
    name: '超级管理员',
    nameEn: 'Super Admin',
  },
  {
    value: 1,
    label: '管理员',
    name: '管理员',
    nameEn: 'Administrator',
  },
  {
    value: 2,
    label: '公司用户',
    name: '公司用户',
    nameEn: 'Company user',
  },
  {
    value: 3,
    label: '外部用户',
    name: '外部用户',
    nameEn: 'External user',
  },
]

/**  业务范围;Business scope */
export const AGENT_TYPE_ARRAY = [
  {
    value: 1,
    label: '出口报关',
    name: '出口报关',
    nameEn: 'Export declaration',
  },
  {
    value: 2,
    label: '进口报关',
    name: '进口报关',
    nameEn: 'Import declaration',
  },
  {
    value: 3,
    label: '仓储',
    name: '仓储',
    nameEn: 'Storage',
  },
  {
    value: 4,
    label: '装船',
    name: '装船',
    nameEn: 'Loading on board',
  },
  {
    value: 5,
    label: '卸船',
    name: '卸船',
    nameEn: 'Ship unloading',
  },
]

/**  节点类型;Node type */
export const APPROVAL_NODE_TYPE_ARRAY = [
  {
    value: 1,
    label: '开始节点',
    name: '开始节点',
    nameEn: 'Start node',
  },
  {
    value: 2,
    label: '过程节点',
    name: '过程节点',
    nameEn: 'Process node',
  },
  {
    value: 3,
    label: '结束节点',
    name: '结束节点',
    nameEn: 'End node',
  },
]

/**  状态;Status */
export const APPROVAL_PROCESS_DESIGN_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已提交',
    name: '已提交',
    nameEn: 'Submit',
  },
]

/**  审批任务状态;Approval status */
export const APPROVAL_PROCESS_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待审批',
    name: '待审批',
    nameEn: 'Approved Pending',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In Approved',
  },
  {
    value: 4,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
  {
    value: 5,
    label: '已取消',
    name: '已取消',
    nameEn: 'Canceled',
  },
]

/**  审批规则;Approval rule */
export const APPROVAL_RULE_ARRAY = [
  {
    value: 1,
    label: '一票否决制',
    name: '一票否决制',
    nameEn: 'One vote',
  },
  {
    value: 2,
    label: '竞争决策',
    name: '竞争决策',
    nameEn: 'Competitive Decision',
  },
  {
    value: 3,
    label: '少数服从多数',
    name: '少数服从多数',
    nameEn: 'Most vote',
  },
]

/**  审批状态;Approval status */
export const APPROVAL_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待审批',
    name: '待审批',
    nameEn: 'Approved pending',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '驳回',
    name: '驳回',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
]

/**  状态;Status */
export const APPROVAL_TASK_NODE_STATUS_ARRAY = [
  {
    value: 1,
    label: '待处理',
    name: '待处理',
    nameEn: 'Pending',
  },
  {
    value: 2,
    label: '已处理',
    name: '已处理',
    nameEn: 'Processed',
  },
  {
    value: 3,
    label: '弃权',
    name: '弃权',
    nameEn: 'Waiver',
  },
  {
    value: 4,
    label: '抄送',
    name: '抄送',
    nameEn: 'Copy',
  },
]

/**  审批人;Approver */
export const APPROVER_ARRAY = [
  {
    value: 1,
    label: '待定',
    name: '待定',
    nameEn: 'Undetermined',
  },
  {
    value: 2,
    label: '角色',
    name: '角色',
    nameEn: 'Role',
  },
  {
    value: 3,
    label: '部门',
    name: '部门',
    nameEn: 'Department',
  },
  {
    value: 4,
    label: '固定人员',
    name: '固定人员',
    nameEn: 'Fixed personnel',
  },
]

/**  级别;Regional level */
export const AREA_LEVEL_ARRAY = [
  {
    value: 1,
    label: '国家',
    name: '国家',
    nameEn: 'State',
  },
  {
    value: 2,
    label: '省',
    name: '省',
    nameEn: 'Province',
  },
  {
    value: 3,
    label: '市',
    name: '市',
    nameEn: 'City',
  },
  {
    value: 4,
    label: '区',
    name: '区',
    nameEn: 'Area',
  },
  {
    value: 5,
    label: '港口',
    name: '港口',
    nameEn: 'Port',
  },
  {
    value: 6,
    label: '大洲',
    name: '大洲',
    nameEn: 'Continent',
  },
]

/**  参数类型;Arithmetic parameter type */
export const ARITHMETIC_PARAMETER_TYPE_ARRAY = [
  {
    value: 1,
    label: '参数',
    name: '参数',
    nameEn: 'Parameter',
  },
  {
    value: 2,
    label: '算式结果',
    name: '算式结果',
    nameEn: 'Calculation result',
  },
]

/**  人员类型;Attendees type */
export const ATTENDEES_TYPE_ARRAY = [
  {
    value: 1,
    label: '主持人',
    name: '主持人',
    nameEn: 'President',
  },
  {
    value: 2,
    label: '与会人员',
    name: '与会人员',
    nameEn: 'Participants',
  },
  {
    value: 3,
    label: '抄送人',
    name: '抄送人',
    nameEn: 'Cc to',
  },
]

/**  归属预算或构思;Attributable budget */
export const ATTRIBUTABLE_BUDGET_ARRAY = [
  {
    value: 1,
    label: '预算',
    name: '预算',
    nameEn: 'Attributable budget',
  },
  {
    value: 2,
    label: '构思',
    name: '构思',
    nameEn: 'Belonging concept',
  },
]

/**  场景;Scene */
export const AUXILIARY_IDENTIFIER_ARRAY = [
  {
    value: 1,
    label: '机会',
    name: '机会',
    nameEn: 'Opportunity',
  },
  {
    value: 2,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 3,
    label: '询价',
    name: '询价',
    nameEn: 'Inquiry',
  },
  {
    value: 4,
    label: '服务',
    name: '服务',
    nameEn: 'Service',
  },
  {
    value: 5,
    label: '项目',
    name: '项目',
    nameEn: 'Project',
  },
]

/**  类型;Type */
export const AUXILIARY_IDENTIFIER_TYPE_ARRAY = [
  {
    value: 1,
    label: '货物编号',
    name: '货物编号',
    nameEn: 'Goods Number',
  },
  {
    value: 2,
    label: '单价',
    name: '单价',
    nameEn: 'Price',
  },
  {
    value: 3,
    label: '数量',
    name: '数量',
    nameEn: 'Quantity',
  },
  {
    value: 4,
    label: '币种',
    name: '币种',
    nameEn: 'Currency',
  },
  {
    value: 5,
    label: '交易对手',
    name: '交易对手',
    nameEn: 'Counterparty',
  },
  {
    value: 6,
    label: '出运方式',
    name: '出运方式',
    nameEn: 'Shipping Method',
  },
]

/**  头像;Avatar */
export const AVATAR_TYPE_ARRAY = [
  {
    value: 1,
    label: '系统头像',
    name: '系统头像',
    nameEn: 'System',
  },
  {
    value: 2,
    label: '自选图片',
    name: '自选图片',
    nameEn: 'Image',
  },
  {
    value: 3,
    label: '未设置',
    name: '未设置',
    nameEn: 'Empty',
  },
]

/**  预算状态;Status */
export const BUDGET_STATUS_ARRAY = [
  {
    value: 2,
    label: '待执行',
    name: '待执行',
    nameEn: 'To be executed',
  },
  {
    value: 3,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 4,
    label: '执行完成',
    name: '执行完成',
    nameEn: 'Executed completed',
  },
  {
    value: 5,
    label: '结算完成',
    name: '结算完成',
    nameEn: 'Settlement Completed',
  },
  {
    value: 6,
    label: '关账',
    name: '关账',
    nameEn: 'Closed',
  },
  {
    value: 7,
    label: '已取消',
    name: '已取消',
    nameEn: 'Canceled',
  },
]

/**  串行关系;Dependency */
export const BUDGET_TASK_DEPENDENCY_ARRAY = [
  {
    value: 1,
    label: '完成-开始',
    name: '完成-开始',
    nameEn: 'Finsh-Start',
  },
  {
    value: 2,
    label: '完成-完成',
    name: '完成-完成',
    nameEn: 'Finsh-Finsh',
  },
  {
    value: 3,
    label: '开始-完成',
    name: '开始-完成',
    nameEn: 'Start-Finsh',
  },
  {
    value: 4,
    label: '开始-开始',
    name: '开始-开始',
    nameEn: 'Start-Start',
  },
]

/**  偏移类型;Offset type */
export const BUDGET_TASK_OFFSET_TYPE_ARRAY = [
  {
    value: 1,
    label: '无偏移',
    name: '无偏移',
    nameEn: 'No offset',
  },
  {
    value: 2,
    label: '提前',
    name: '提前',
    nameEn: 'Advance',
  },
  {
    value: 3,
    label: '延迟',
    name: '延迟',
    nameEn: 'Delay',
  },
]

/**  任务状态;Status */
export const BUDGET_TASK_STATUS_ARRAY = [
  {
    value: 1,
    label: '未激活',
    name: '未激活',
    nameEn: 'Not active',
  },
  {
    value: 2,
    label: '待执行',
    name: '待执行',
    nameEn: 'Unexecuted',
  },
  {
    value: 3,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 4,
    label: '执行完毕',
    name: '执行完毕',
    nameEn: 'Completed',
  },
  {
    value: 5,
    label: '暂停',
    name: '暂停',
    nameEn: 'Suspend',
  },
  {
    value: 6,
    label: '取消',
    name: '取消',
    nameEn: 'Canceled',
  },
]

/**  任务类型;Type */
export const BUDGET_TASK_TYPE_ARRAY = [
  {
    value: 1,
    label: '预算任务',
    name: '预算任务',
    nameEn: 'Budget task',
  },
  {
    value: 2,
    label: '订单任务',
    name: '订单任务',
    nameEn: 'Order task',
  },
  {
    value: 3,
    label: '加工服务任务',
    name: '加工服务任务',
    nameEn: 'Processing task',
  },
  {
    value: 4,
    label: '物流服务任务',
    name: '物流服务任务',
    nameEn: 'Logistics task',
  },
  {
    value: 5,
    label: '商检服务任务',
    name: '商检服务任务',
    nameEn: 'Commodity inspection task',
  },
  {
    value: 6,
    label: '货代服务任务',
    name: '货代服务任务',
    nameEn: 'Freight Forwarder task',
  },
  {
    value: 7,
    label: '海运服务任务',
    name: '海运服务任务',
    nameEn: 'Ocean shipping task',
  },
  {
    value: 8,
    label: '保险服务任务',
    name: '保险服务任务',
    nameEn: 'Insurance task',
  },
  {
    value: 9,
    label: '银行服务任务',
    name: '银行服务任务',
    nameEn: 'Bank service task',
  },
  {
    value: 10,
    label: '销售代理任务',
    name: '销售代理任务',
    nameEn: 'Sales task',
  },
  {
    value: 11,
    label: '其他任务',
    name: '其他任务',
    nameEn: 'Other task',
  },
  {
    value: 12,
    label: '机会成交任务',
    name: '机会成交任务',
    nameEn: 'Opportunity deal task',
  },
  {
    value: 13,
    label: '服务成交任务',
    name: '服务成交任务',
    nameEn: 'Service deal task',
  },
  {
    value: 14,
    label: '合同任务',
    name: '合同任务',
    nameEn: 'Contract task',
  },
  {
    value: 15,
    label: '执行任务',
    name: '执行任务',
    nameEn: 'Operate',
  },
  {
    value: 16,
    label: '结算任务',
    name: '结算任务',
    nameEn: 'Settlement task',
  },
  {
    value: 17,
    label: '物流指令',
    name: '物流指令',
    nameEn: 'Logistics instruction',
  },
  {
    value: 18,
    label: '物流委托任务',
    name: '物流委托任务',
    nameEn: 'Logistics entrust task',
  },
  {
    value: 19,
    label: '商检委托任务',
    name: '商检委托任务',
    nameEn: 'Test entrust task',
  },
  {
    value: 20,
    label: '货代委托任务',
    name: '货代委托任务',
    nameEn: 'Agent entrust task',
  },
  {
    value: 21,
    label: '租船委托任务',
    name: '租船委托任务',
    nameEn: 'Shipping entrust task',
  },
  {
    value: 22,
    label: '货权转移任务',
    name: '货权转移任务',
    nameEn: 'Transfer of cargo rights',
  },
  {
    value: 23,
    label: '加工委托任务',
    name: '加工委托任务',
    nameEn: 'Processing entrust task',
  },
  {
    value: 24,
    label: '保险委托任务',
    name: '保险委托任务',
    nameEn: 'Insurance entrust task',
  },
  {
    value: 25,
    label: '银行服务委托任务',
    name: '银行服务委托任务',
    nameEn: 'Bank entrust task',
  },
  {
    value: 26,
    label: '销售代理委托任务',
    name: '销售代理委托任务',
    nameEn: 'Sales entrust task',
  },
  {
    value: 27,
    label: '关账任务',
    name: '关账任务',
    nameEn: 'Close task',
  },
]

/**  关联的交易类型;Transaction type */
export const BUDGET_TRANSACTION_TYPE_ARRAY = [
  {
    value: 1,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '机会',
    name: '机会',
    nameEn: 'Opportunity',
  },
  {
    value: 3,
    label: '假设交易',
    name: '假设交易',
    nameEn: 'Assume',
  },
]

/**  服务方类型;Seller type */
export const BUYER_OR_SELLER_TYPE_ARRAY = [
  {
    value: 1,
    label: '公司',
    name: '公司',
    nameEn: 'Compnay',
  },
  {
    value: 2,
    label: '区域',
    name: '区域',
    nameEn: 'Area',
  },
  {
    value: 3,
    label: '不设置',
    name: '不设置',
    nameEn: 'Empty',
  },
]

/**  委托方类型;Buyer type */
export const BUYER_TYPE_FOR_TEST_ARRAY = [
  {
    value: 1,
    label: '内部公司',
    name: '内部公司',
    nameEn: 'Inner Company',
  },
  {
    value: 2,
    label: '外部公司',
    name: '外部公司',
    nameEn: 'Outer Company',
  },
]

/**  计算方式;Calculation method */
export const CALCULATION_METHOD_ARRAY = [
  {
    value: 1,
    label: '+',
    name: '+',
    nameEn: '+',
  },
  {
    value: 2,
    label: '-',
    name: '-',
    nameEn: '-',
  },
  {
    value: 3,
    label: '×',
    name: '×',
    nameEn: '×',
  },
  {
    value: 4,
    label: '÷',
    name: '÷',
    nameEn: '÷',
  },
]

/**  加工重量计算标准;Weight calculation standard */
export const CALCULATION_STANDARD_ARRAY = [
  {
    value: 1,
    label: '收货仓库入库磅单',
    name: '收货仓库入库磅单',
    nameEn: 'Arrival',
  },
  {
    value: 2,
    label: '加工厂出厂磅单',
    name: '加工厂出厂磅单',
    nameEn: 'Leaving',
  },
]

/**  租船方式;Chartering mode */
export const CHARTERING_MODE_ARRAY = [
  {
    value: 1,
    label: '租整船',
    name: '租整船',
    nameEn: 'Whole ship charter',
  },
  {
    value: 2,
    label: '租仓位',
    name: '租仓位',
    nameEn: 'Rental position',
  },
]

/**  状态;Status */
export const COLLECTION_RECORDS_STATUS_ARRAY = [
  {
    value: 1,
    label: '待认领',
    name: '待认领',
    nameEn: 'Unclaimed',
  },
  {
    value: 2,
    label: '认领中',
    name: '认领中',
    nameEn: 'Claiming',
  },
  {
    value: 3,
    label: '已认领',
    name: '已认领',
    nameEn: 'Claimed',
  },
  {
    value: 4,
    label: '已核销',
    name: '已核销',
    nameEn: 'Write off',
  },
]

/**  类型;Type */
export const COMMODITY_LEVEL_ARRAY = [
  {
    value: 1,
    label: '普通',
    name: '普通',
    nameEn: 'Common',
  },
  {
    value: 2,
    label: '地脚料',
    name: '地脚料',
    nameEn: 'Footing',
  },
]

/**  关联类型;Trade type */
export const COMMODITY_TRADE_TYPE_ARRAY = [
  {
    value: 1,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '长约',
    name: '长约',
    nameEn: 'Long term',
  },
]

/**  个人/企业;Is personal */
export const COMPANY_PERSONAL_TYPE_ARRAY = [
  {
    value: 1,
    label: '企业',
    name: '企业',
    nameEn: 'Company',
  },
  {
    value: 2,
    label: '个人',
    name: '个人',
    nameEn: 'Personal',
  },
]

/**  业务类型;Business type */
export const CONCEPT_TYPE_ARRAY = [
  {
    value: 1,
    label: '敞口业务',
    name: '敞口业务',
    nameEn: 'Exposure business',
  },
  {
    value: 2,
    label: '闭口业务',
    name: '闭口业务',
    nameEn: 'Closed business',
  },
]

/**  报关类型;Type */
export const DECLARATION_TYPE_ARRAY = [
  {
    value: 1,
    label: '出口报关',
    name: '出口报关',
    nameEn: 'Export Declaration',
  },
  {
    value: 2,
    label: '进口报关',
    name: '进口报关',
    nameEn: 'Import Declaration',
  },
]

/**  状态;Status */
export const DECLARE_STATUS_ARRAY = [
  {
    value: 1,
    label: '待执行',
    name: '待执行',
    nameEn: 'To be executed',
  },
  {
    value: 2,
    label: '已交货代',
    name: '已交货代',
    nameEn: 'Submitted',
  },
  {
    value: 3,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
  {
    value: 4,
    label: '改单',
    name: '改单',
    nameEn: 'Change',
  },
]

/**  抵扣类型;Type */
export const DEDUCT_TYPE_ARRAY = [
  {
    value: 1,
    label: '抵扣',
    name: '抵扣',
    nameEn: 'Deduct',
  },
  {
    value: 2,
    label: '增加',
    name: '增加',
    nameEn: 'Increase',
  },
]

/**  交付条款;Delivery terms */
export const DELIVERY_TERMS_ARRAY = [
  {
    value: 6,
    label: '自提',
    name: '自提',
    nameEn: 'EX Works',
  },
  {
    value: 7,
    label: '出厂',
    name: '出厂',
    nameEn: 'EX Factory',
  },
  {
    value: 15,
    label: '送到',
    name: '送到',
    nameEn: 'Free Carrier',
  },
  {
    value: 8,
    label: '舱底交货',
    name: '舱底交货',
    nameEn: 'Free on Board',
  },
  {
    value: 1,
    label: 'EXW',
    name: 'EXW',
    nameEn: 'EXW',
  },
  {
    value: 2,
    label: 'FCA',
    name: 'FCA',
    nameEn: 'FCA',
  },
  {
    value: 3,
    label: 'FOB',
    name: 'FOB',
    nameEn: 'FOB',
  },
  {
    value: 4,
    label: 'CFR',
    name: 'CFR',
    nameEn: 'CFR',
  },
  {
    value: 5,
    label: 'CIF',
    name: 'CIF',
    nameEn: 'CIF',
  },
  {
    value: 9,
    label: 'CPT',
    name: 'CPT',
    nameEn: 'CPT',
  },
  {
    value: 10,
    label: 'CIP',
    name: 'CIP',
    nameEn: 'CIP',
  },
  {
    value: 11,
    label: 'DAT',
    name: 'DAT',
    nameEn: 'DAT',
  },
  {
    value: 12,
    label: 'DAP',
    name: 'DAP',
    nameEn: 'DAP',
  },
  {
    value: 13,
    label: 'DDP',
    name: 'DDP',
    nameEn: 'DDP',
  },
  {
    value: 14,
    label: 'FAS',
    name: 'FAS',
    nameEn: 'FAS',
  },
]

/**  类型;Design type */
export const DESIGN_TYPE_ARRAY = [
  {
    value: 1,
    label: '原型',
    name: '原型',
    nameEn: 'Prototype',
  },
  {
    value: 2,
    label: '方案',
    name: '方案',
    nameEn: 'Plan',
  },
  {
    value: 3,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
]

/**  生效范围;Effective scope */
export const EFFECTIVE_SCOPE_ARRAY = [
  {
    value: 1,
    label: '销售交易',
    name: '销售交易',
    nameEn: 'Sales transactions',
  },
  {
    value: 2,
    label: '采购交易',
    name: '采购交易',
    nameEn: 'Procurement transactions',
  },
  {
    value: 3,
    label: '销售+采购',
    name: '销售+采购',
    nameEn: 'Sales and procurement',
  },
  {
    value: 4,
    label: '预算',
    name: '预算',
    nameEn: 'Budget',
  },
  {
    value: 5,
    label: '内部流转',
    name: '内部流转',
    nameEn: 'Inner transactions',
  },
]

/**  状态;Status */
export const ENTRUST_STATUS_ARRAY = [
  {
    value: 1,
    label: '待委托',
    name: '待委托',
    nameEn: 'To be entrusted',
  },
  {
    value: 2,
    label: '已委托',
    name: '已委托',
    nameEn: 'Entrusted',
  },
  {
    value: 3,
    label: '已取消',
    name: '已取消',
    nameEn: 'Canceled',
  },
  {
    value: 4,
    label: '执行完成',
    name: '执行完成',
    nameEn: 'Executed completed',
  },
  {
    value: 5,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 6,
    label: '完成委托',
    name: '完成委托',
    nameEn: 'Entrust completed',
  },
  {
    value: 7,
    label: '结算完成',
    name: '结算完成',
    nameEn: 'Settlement Completed',
  },
  {
    value: 8,
    label: '关账',
    name: '关账',
    nameEn: 'Closed',
  },
]

/**  字段类型;Field Type */
export const FIELD_TYPE_ARRAY = [
  {
    value: 1,
    label: '文本框',
    name: '文本框',
    nameEn: 'Input box',
  },
  {
    value: 2,
    label: '富文本框',
    name: '富文本框',
    nameEn: 'Rich text box',
  },
  {
    value: 3,
    label: '日期',
    name: '日期',
    nameEn: 'Date',
  },
  {
    value: 4,
    label: '下拉框',
    name: '下拉框',
    nameEn: 'Select',
  },
]

/**  性别;Gender */
export const GENDER_ARRAY = [
  {
    value: 1,
    label: '男',
    name: '男',
    nameEn: 'Male',
  },
  {
    value: 2,
    label: '女',
    name: '女',
    nameEn: 'Famale',
  },
  {
    value: 3,
    label: '不明',
    name: '不明',
    nameEn: 'Unknown',
  },
]

/**  元素类型;Element Type */
export const GENERATE_TEMPLATE_TYPE_ARRAY = [
  {
    value: 1,
    label: '文本',
    name: '文本',
    nameEn: 'Text',
  },
  {
    value: 2,
    label: '表格',
    name: '表格',
    nameEn: 'Table',
  },
  {
    value: 3,
    label: '单元格文本',
    name: '单元格文本',
    nameEn: 'Text in table',
  },
  {
    value: 4,
    label: '图片',
    name: '图片',
    nameEn: 'Image',
  },
  {
    value: 5,
    label: '单元格图片',
    name: '单元格图片',
    nameEn: 'Image in table',
  },
  {
    value: 6,
    label: '合同条款',
    name: '合同条款',
    nameEn: 'Terms',
  },
  {
    value: 7,
    label: '货物列表',
    name: '货物列表',
    nameEn: 'Commodities',
  },
  {
    value: 8,
    label: '分页',
    name: '分页',
    nameEn: 'New page',
  },
]

/**  装卸方式;Handling mode */
export const HANDLING_MODE_ARRAY = [
  {
    value: 1,
    label: '直取',
    name: '直取',
    nameEn: 'Pickup',
  },
  {
    value: 2,
    label: '进库/场',
    name: '进库/场',
    nameEn: 'Storehouse',
  },
  {
    value: 3,
    label: '灌吨包',
    name: '灌吨包',
    nameEn: 'Filling ton bags',
  },
]

/**  入库或出库;In or out */
export const IN_OR_OUT_ARRAY = [
  {
    value: 1,
    label: '入库',
    name: '入库',
    nameEn: 'In',
  },
  {
    value: 2,
    label: '出库',
    name: '出库',
    nameEn: 'Out',
  },
]

/**  出入库的方式;Type */
export const IN_OR_OUT_TYPE_ARRAY = [
  {
    value: 1,
    label: '物流',
    name: '物流',
    nameEn: 'Logist',
  },
  {
    value: 2,
    label: '货权转移',
    name: '货权转移',
    nameEn: 'Transfer cargo right',
  },
  {
    value: 3,
    label: '装船',
    name: '装船',
    nameEn: 'Loading',
  },
  {
    value: 4,
    label: '卸船',
    name: '卸船',
    nameEn: 'Unloading',
  },
]

/**  检验项;Inspection */
export const INSPECTION_ARRAY = [
  {
    value: 4,
    label: '验厂',
    name: '验厂',
    nameEn: 'Factory inspection',
  },
  {
    value: 2,
    label: '监装',
    name: '监装',
    nameEn: 'Loading supervision',
  },
  {
    value: 3,
    label: '检验',
    name: '检验',
    nameEn: 'Test',
  },
  {
    value: 1,
    label: '水尺',
    name: '水尺',
    nameEn: 'Water gauge',
  },
]

/**  保险类别;Insurance category */
export const INSURANCE_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '信用保险',
    name: '信用保险',
    nameEn: 'Credit insurance',
  },
  {
    value: 2,
    label: '海运保险',
    name: '海运保险',
    nameEn: 'Marine insurance',
  },
]

/**  状态;Status */
export const INVOICE_STATUS_ARRAY = [
  {
    value: 1,
    label: '待开票',
    name: '待开票',
    nameEn: 'To be invoiced',
  },
  {
    value: 2,
    label: '已开票',
    name: '已开票',
    nameEn: 'Invoiced',
  },
  {
    value: 3,
    label: '已邮寄',
    name: '已邮寄',
    nameEn: 'Mailed',
  },
]

/**  状态;Status */
export const LADING_BILL_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
  {
    value: 3,
    label: '正本',
    name: '正本',
    nameEn: 'Original',
  },
  {
    value: 4,
    label: '作废',
    name: '作废',
    nameEn: 'Cancellation',
  },
]

/**  纬度类型;Latitude type */
export const LATITUDE_TYPE_ARRAY = [
  {
    value: 1,
    label: 'N',
    name: 'N',
    nameEn: 'N',
  },
  {
    value: 2,
    label: 'S',
    name: 'S',
    nameEn: 'S',
  },
]

/**  信用证模式;Mode */
export const LETTER_CREDIT_MODE_ARRAY = [
  {
    value: 1,
    label: '即期',
    name: '即期',
    nameEn: 'Immediately',
  },
  {
    value: 2,
    label: '远期',
    name: '远期',
    nameEn: 'Future',
  },
]

/**  装卸率条款;Loading rate terms */
export const LOADING_RATE_TERM_ARRAY = [
  {
    value: 1,
    label: 'SHINC',
    name: 'SHINC',
    nameEn: 'SHINC',
  },
  {
    value: 2,
    label: 'SHEXUU',
    name: 'SHEXUU',
    nameEn: 'SHEXUU',
  },
  {
    value: 3,
    label: 'SHEXEIU',
    name: 'SHEXEIU',
    nameEn: 'SHEXEIU',
  },
  {
    value: 4,
    label: 'SSHEXEIU',
    name: 'SSHEXEIU',
    nameEn: 'SSHEXEIU',
  },
  {
    value: 5,
    label: 'CQD',
    name: 'CQD',
    nameEn: 'CQD',
  },
  {
    value: 6,
    label: 'SSHEXUU',
    name: 'SSHEXUU',
    nameEn: 'SSHEXUU',
  },
]

/**  类型;Type */
export const LOADING_TYPE_ARRAY = [
  {
    value: 1,
    label: '开始',
    name: '开始',
    nameEn: 'Start',
  },
  {
    value: 2,
    label: '过程',
    name: '过程',
    nameEn: 'Process',
  },
  {
    value: 3,
    label: '暂停',
    name: '暂停',
    nameEn: 'Pause',
  },
  {
    value: 4,
    label: '继续',
    name: '继续',
    nameEn: 'Continue',
  },
  {
    value: 5,
    label: '完成',
    name: '完成',
    nameEn: 'Complete',
  },
]

/**  装/卸类型;Loading/unloading type */
export const LOADING_UNLOADING_TYPE_ARRAY = [
  {
    value: 1,
    label: '装船',
    name: '装船',
    nameEn: 'Loading on board',
  },
  {
    value: 2,
    label: '卸船',
    name: '卸船',
    nameEn: 'Unload from boat',
  },
]

/**  操作类型;Login type */
export const LOGIN_TYPE_ARRAY = [
  {
    value: 1,
    label: 'LOGIN',
    name: 'LOGIN',
    nameEn: 'LOGIN',
  },
  {
    value: 2,
    label: 'LOGOUT',
    name: 'LOGOUT',
    nameEn: 'LOGOUT',
  },
]

/**  核查状态;Check status */
export const LOGISTICS_CHECK_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 4,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
  {
    value: 5,
    label: '复核中',
    name: '复核中',
    nameEn: 'Under review',
  },
  {
    value: 2,
    label: '复核通过',
    name: '复核通过',
    nameEn: 'Pass',
  },
  {
    value: 3,
    label: '复核未通过',
    name: '复核未通过',
    nameEn: 'Refuse',
  },
  {
    value: 6,
    label: '复核回退中',
    name: '复核回退中',
    nameEn: 'Checked rollback',
  },
]

/**  控制级别;Control level */
export const LOGISTICS_CONTROL_LEVEL_ARRAY = [
  {
    value: 1,
    label: '需要磅单',
    name: '需要磅单',
    nameEn: 'A weight list is required',
  },
  {
    value: 2,
    label: '需要验货',
    name: '需要验货',
    nameEn: 'Inspection required',
  },
  {
    value: 3,
    label: '需要核查',
    name: '需要核查',
    nameEn: 'Check required',
  },
  {
    value: 4,
    label: '需要到达',
    name: '需要到达',
    nameEn: 'Destination information required',
  },
  {
    value: 5,
    label: '需要出发',
    name: '需要出发',
    nameEn: 'Departure information required',
  },
]

/**  物流委托备案的状态;Status */
export const LOGISTICS_ENTRUSTMENT_FILING_STATUS_ARRAY = [
  {
    value: 1,
    label: '待委托',
    name: '待委托',
    nameEn: 'Unknown',
  },
  {
    value: 2,
    label: '已通知',
    name: '已通知',
    nameEn: 'Notified',
  },
  {
    value: 3,
    label: '拒绝',
    name: '拒绝',
    nameEn: 'Refuse',
  },
  {
    value: 4,
    label: '备案完成',
    name: '备案完成',
    nameEn: 'Completed',
  },
  {
    value: 5,
    label: '取消',
    name: '取消',
    nameEn: 'Canceled',
  },
]

/**  验货状态;Inspection */
export const LOGISTICS_INSPECTION_ARRAY = [
  {
    value: 1,
    label: '未验货',
    name: '未验货',
    nameEn: 'No inspection',
  },
  {
    value: 2,
    label: '合格',
    name: '合格',
    nameEn: 'Qualified',
  },
  {
    value: 3,
    label: '全部退回',
    name: '全部退回',
    nameEn: 'Unqualified',
  },
  {
    value: 4,
    label: '部分退回',
    name: '部分退回',
    nameEn: 'Partial return',
  },
]

/**  物流指令的状态;Status */
export const LOGISTICS_INSTRUCTIONS_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待确认',
    name: '待确认',
    nameEn: 'To be confirmed',
  },
  {
    value: 3,
    label: '接收',
    name: '接收',
    nameEn: 'Receive',
  },
  {
    value: 4,
    label: '退回',
    name: '退回',
    nameEn: 'Send back',
  },
  {
    value: 6,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 7,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
  {
    value: 8,
    label: '取消',
    name: '取消',
    nameEn: 'Canceled',
  },
]

/**  物流方案状态;Status */
export const LOGISTICS_PROGRAMME_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待执行',
    name: '待执行',
    nameEn: 'Unexecuted',
  },
  {
    value: 3,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 4,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
]

/**  物流信息的状态;Status */
export const LOGISTICS_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '在途',
    name: '在途',
    nameEn: 'On the way',
  },
  {
    value: 3,
    label: '到达',
    name: '到达',
    nameEn: 'Arrive',
  },
  {
    value: 4,
    label: '拒收',
    name: '拒收',
    nameEn: 'Rejection',
  },
]

/**  经度类型;Longitude type */
export const LONGITUDE_TYPE_ARRAY = [
  {
    value: 1,
    label: 'E',
    name: 'E',
    nameEn: 'E',
  },
  {
    value: 2,
    label: 'W',
    name: 'W',
    nameEn: 'W',
  },
]

/**  交易频率;Frequency */
export const LONG_TERM_FREQUENCY_ARRAY = [
  {
    value: 1,
    label: '按月',
    name: '按月',
    nameEn: 'Monthly',
  },
  {
    value: 2,
    label: '按天',
    name: '按天',
    nameEn: 'By day',
  },
  {
    value: 3,
    label: '不确定',
    name: '不确定',
    nameEn: 'Uncertain',
  },
]

/**  状态;Status */
export const LONG_TERM_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '未成交',
    name: '未成交',
    nameEn: 'Unsettled',
  },
  {
    value: 3,
    label: '履约中',
    name: '履约中',
    nameEn: 'In performance',
  },
  {
    value: 4,
    label: '暂停',
    name: '暂停',
    nameEn: 'Suspend',
  },
  {
    value: 5,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
  {
    value: 6,
    label: '已取消',
    name: '已取消',
    nameEn: 'Canceled',
  },
]

/**  菜单类型 */
export const MENU_TYPE_ARRAY = [
  {
    value: 1,
    label: '系统',
    name: '系统',
    nameEn: 'System',
  },
  {
    value: 2,
    label: '模块',
    name: '模块',
    nameEn: 'Module',
  },
  {
    value: 3,
    label: '按钮',
    name: '按钮',
    nameEn: 'Button',
  },
  {
    value: 4,
    label: '子模块',
    name: '子模块',
    nameEn: 'Child module',
  },
]

/**  类型;Message type */
export const MESSAGE_TYPE_ARRAY = [
  {
    value: 1,
    label: '其他消息',
    name: '其他消息',
    nameEn: 'Other',
  },
  {
    value: 2,
    label: '审批消息',
    name: '审批消息',
    nameEn: 'Approval',
  },
  {
    value: 3,
    label: '任务消息',
    name: '任务消息',
    nameEn: 'Task',
  },
  {
    value: 4,
    label: '物流指令',
    name: '物流指令',
    nameEn: 'Logistics instructions',
  },
  {
    value: 5,
    label: '物流任务',
    name: '物流任务',
    nameEn: 'Logistics',
  },
  {
    value: 6,
    label: '商检任务',
    name: '商检任务',
    nameEn: 'Test',
  },
  {
    value: 7,
    label: '货代任务',
    name: '货代任务',
    nameEn: 'Agent',
  },
  {
    value: 8,
    label: '租船指令',
    name: '租船指令',
    nameEn: 'Shipping instructions',
  },
  {
    value: 9,
    label: '海运任务',
    name: '海运任务',
    nameEn: 'Shipping',
  },
  {
    value: 10,
    label: '付款申请',
    name: '付款申请',
    nameEn: 'Payment request',
  },
  {
    value: 11,
    label: '收款记录',
    name: '收款记录',
    nameEn: 'Collection records',
  },
]

/**  类型;Type */
export const OPPORTUNITY_SERVICE_TYPE_ARRAY = [
  {
    value: 1,
    label: '询价',
    name: '询价',
    nameEn: 'Inquiry',
  },
  {
    value: 2,
    label: '核价',
    name: '核价',
    nameEn: 'Pricing',
  },
]

/**  来源;Source */
export const OPPORTUNITY_SOURCE_ARRAY = [
  {
    value: 1,
    label: '供应商报价',
    name: '供应商报价',
    nameEn: 'Supplier quotation',
  },
  {
    value: 3,
    label: '客户询价',
    name: '客户询价',
    nameEn: 'Customer inquiry',
  },
  {
    value: 4,
    label: '线索报价',
    name: '线索报价',
    nameEn: 'Clue Quotation',
  },
  {
    value: 2,
    label: '框架协议',
    name: '框架协议',
    nameEn: 'Plan Order',
  },
  {
    value: 5,
    label: '长约协议',
    name: '长约协议',
    nameEn: 'Long term',
  },
  {
    value: 6,
    label: '假设交易',
    name: '假设交易',
    nameEn: 'Assume',
  },
  {
    value: 7,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
]

/**  状态;Status */
export const OPPORTUNITY_STATUS_ARRAY = [
  {
    value: 1,
    label: '未成交',
    name: '未成交',
    nameEn: 'Unsettled',
  },
  {
    value: 2,
    label: '已成交',
    name: '已成交',
    nameEn: 'Deal',
  },
  {
    value: 3,
    label: '过期',
    name: '过期',
    nameEn: 'Invalid',
  },
  {
    value: 4,
    label: '修改中',
    name: '修改中',
    nameEn: 'Updating',
  },
  {
    value: 5,
    label: '修改完成',
    name: '修改完成',
    nameEn: 'Updated',
  },
  {
    value: 6,
    label: '订单已取消',
    name: '订单已取消',
    nameEn: 'Cancel',
  },
]

/**  状态;Status */
export const OPPORTUNITY_TASK_STATUS_ARRAY = [
  {
    value: 1,
    label: '待执行',
    name: '待执行',
    nameEn: 'Executed',
  },
  {
    value: 2,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 3,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
  {
    value: 4,
    label: '已取消',
    name: '已取消',
    nameEn: 'Canceled',
  },
]

/**  类型;Opportunity type */
export const OPPORTUNITY_TYPE_ARRAY = [
  {
    value: 4,
    label: '实盘报价',
    name: '实盘报价',
    nameEn: 'OFFER',
  },
  {
    value: 3,
    label: '实盘出价',
    name: '实盘出价',
    nameEn: 'BID',
  },
  {
    value: 5,
    label: '实盘还盘',
    name: '实盘还盘',
    nameEn: 'COUNTER-OFFER',
  },
  {
    value: 1,
    label: '确认实盘',
    name: '确认实盘',
    nameEn: 'ACCEPT OFFER',
  },
  {
    value: 6,
    label: '框架协议交付',
    name: '框架协议交付',
    nameEn: 'PO CONFIRM',
  },
  {
    value: 7,
    label: '长约协议交付',
    name: '长约协议交付',
    nameEn: 'DELIVER ORDER',
  },
  {
    value: 2,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
]

/**  选择权;Option */
export const OPTION_ARRAY = [
  {
    value: 1,
    label: '买方选择',
    name: '买方选择',
    nameEn: "AT BUYER'S OPTION",
  },
  {
    value: 2,
    label: '卖方选择',
    name: '卖方选择',
    nameEn: "AT SELLER'S OPTION",
  },
]

/**  联系方式的所有者 */
export const ORDER_CONTACT_OWNER_ARRAY = [
  {
    value: 1,
    label: '买方',
    name: '买方',
    nameEn: 'Buyer',
  },
  {
    value: 2,
    label: '卖方',
    name: '卖方',
    nameEn: 'Seller',
  },
  {
    value: 3,
    label: '见证人',
    name: '见证人',
    nameEn: 'Witness',
  },
]

/**  保险;Insure */
export const ORDER_INSURE_ARRAY = [
  {
    value: 1,
    label: '由买方投保',
    name: '由买方投保',
    nameEn: 'Covered by buyer',
  },
  {
    value: 2,
    label: '由卖方投保',
    name: '由卖方投保',
    nameEn: 'Covered by seller',
  },
]

/**  订单状态;Status */
export const ORDER_STATUS_ARRAY = [
  {
    value: 1,
    label: '待签订',
    name: '待签订',
    nameEn: 'To be signed',
  },
  {
    value: 2,
    label: '我司已签',
    name: '我司已签',
    nameEn: 'Our company has signed',
  },
  {
    value: 13,
    label: '对方已签',
    name: '对方已签',
    nameEn: 'The other party has signed',
  },
  {
    value: 3,
    label: '已双签',
    name: '已双签',
    nameEn: 'Double signed',
  },
  {
    value: 4,
    label: '交付中',
    name: '交付中',
    nameEn: 'Delivery',
  },
  {
    value: 5,
    label: '我司已签补充协议',
    name: '我司已签补充协议',
    nameEn: 'Our company has signed agreement',
  },
  {
    value: 14,
    label: '对方已签补充协议',
    name: '对方已签补充协议',
    nameEn: 'The other party has signed agreement',
  },
  {
    value: 6,
    label: '补充协议已双签',
    name: '补充协议已双签',
    nameEn: 'Double signed agreement',
  },
  {
    value: 12,
    label: '交付完成确认中',
    name: '交付完成确认中',
    nameEn: 'Delivery completion confirmation in progress',
  },
  {
    value: 7,
    label: '交付完成',
    name: '交付完成',
    nameEn: 'Delivery completed',
  },
  {
    value: 8,
    label: '部分已结算',
    name: '部分已结算',
    nameEn: 'Settlement',
  },
  {
    value: 9,
    label: '结算完成',
    name: '结算完成',
    nameEn: 'Settlement completed',
  },
  {
    value: 10,
    label: '关账',
    name: '关账',
    nameEn: 'Closed',
  },
  {
    value: 11,
    label: '订单已取消',
    name: '订单已取消',
    nameEn: 'Canceled',
  },
]

/**  过时;Out-of-date */
export const OUT_OF_DATE_ARRAY = [
  {
    value: 1,
    label: '过时',
    name: '过时',
    nameEn: 'Outdated',
  },
  {
    value: 2,
    label: '正常',
    name: '正常',
    nameEn: 'Usable',
  },
  {
    value: 3,
    label: '过期',
    name: '过期',
    nameEn: 'Out of date',
  },
]

/**  参数类型;Parameter type */
export const PARAMETER_TYPE_ARRAY = [
  {
    value: 1,
    label: '价格参数',
    name: '价格参数',
    nameEn: 'Price parameter',
  },
  {
    value: 2,
    label: '固定参数',
    name: '固定参数',
    nameEn: 'Fixed parameter',
  },
]

/**  类别;Category */
export const PAYMENT_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '预付款',
    name: '预付款',
    nameEn: 'Advance charge',
  },
  {
    value: 2,
    label: '结算',
    name: '结算',
    nameEn: 'Settle accounts',
  },
  {
    value: 3,
    label: '尾款',
    name: '尾款',
    nameEn: 'Final payment',
  },
]

/**  现金方向;Payment direction */
export const PAYMENT_DIRECTION_ARRAY = [
  {
    value: 1,
    label: '付款',
    name: '付款',
    nameEn: 'Disburse',
  },
  {
    value: 2,
    label: '收款',
    name: '收款',
    nameEn: 'Collection',
  },
]

/**  付款方式;Payment */
export const PAYMENT_ARRAY = [
  {
    value: 1,
    label: '一次付清',
    name: '一次付清',
    nameEn: 'One time payment',
  },
  {
    value: 2,
    label: '分批付款',
    name: '分批付款',
    nameEn: 'Partial payment',
  },
  {
    value: 3,
    label: '按单付款',
    name: '按单付款',
    nameEn: 'Payment per order',
  },
]

/**  付款性质;Nature of Payment */
export const PAYMENT_NATURE_ARRAY = [
  {
    value: 1,
    label: '预付款',
    name: '预付款',
    nameEn: 'In advance',
  },
  {
    value: 2,
    label: '尾款',
    name: '尾款',
    nameEn: 'Balance payment',
  },
]

/**  付款方式;Payment */
export const PAYMENT_ORDER_ARRAY = [
  {
    value: 1,
    label: '一次付清',
    name: '一次付清',
    nameEn: 'One time payment',
  },
  {
    value: 2,
    label: '分批付款',
    name: '分批付款',
    nameEn: 'Partial payment',
  },
  {
    value: 3,
    label: '按单付款',
    name: '按单付款',
    nameEn: 'Payment per order',
  },
  {
    value: 4,
    label: '信用证付款',
    name: '信用证付款',
    nameEn: 'Payment by letter of credit',
  },
]

/**  状态;Status */
export const PAYMENT_PLAN_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待付款',
    name: '待付款',
    nameEn: 'Unpaid',
  },
  {
    value: 3,
    label: '已付款',
    name: '已付款',
    nameEn: 'Paid',
  },
]

/**  状态;Status */
export const PAYMENT_REQUEST_STATUS_ARRAY = [
  {
    value: 1,
    label: '待支付',
    name: '待支付',
    nameEn: 'To be paid',
  },
  {
    value: 2,
    label: '支付中',
    name: '支付中',
    nameEn: 'Payment in progress',
  },
  {
    value: 3,
    label: '支付完成',
    name: '支付完成',
    nameEn: 'Completed',
  },
  {
    value: 4,
    label: '取消支付',
    name: '取消支付',
    nameEn: 'Canceled',
  },
]

/**  付款申请类型;Payment request type */
export const PAYMENT_REQUEST_TYPE_ARRAY = [
  {
    value: 2,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 3,
    label: '加工',
    name: '加工',
    nameEn: 'Processing',
  },
  {
    value: 4,
    label: '物流',
    name: '物流',
    nameEn: 'Logistics',
  },
  {
    value: 5,
    label: '商检',
    name: '商检',
    nameEn: 'Test',
  },
  {
    value: 6,
    label: '货代',
    name: '货代',
    nameEn: 'Agent',
  },
  {
    value: 7,
    label: '海运',
    name: '海运',
    nameEn: 'Shipping',
  },
  {
    value: 8,
    label: '保险',
    name: '保险',
    nameEn: 'Insurance',
  },
  {
    value: 9,
    label: '银行服务',
    name: '银行服务',
    nameEn: 'Bank',
  },
  {
    value: 10,
    label: '销售代理',
    name: '销售代理',
    nameEn: 'Sales',
  },
  {
    value: 1,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
  {
    value: 11,
    label: '其他服务',
    name: '其他服务',
    nameEn: 'Other Service',
  },
]

/**  分批方式;Payment type */
export const PAYMENT_TYPE_ARRAY = [
  {
    value: 1,
    label: '固定额度',
    name: '固定额度',
    nameEn: 'Fixed quota',
  },
  {
    value: 2,
    label: '百分比',
    name: '百分比',
    nameEn: 'Percentage limit',
  },
]

/**  维度;Vision */
export const POSITION_VISION_ARRAY = [
  {
    value: 1,
    label: '价格维度',
    name: '价格维度',
    nameEn: 'Price vision',
  },
  {
    value: 2,
    label: '数量维度',
    name: '数量维度',
    nameEn: 'Quantity vision',
  },
  {
    value: 3,
    label: '交付维度',
    name: '交付维度',
    nameEn: 'Match vision',
  },
  {
    value: 4,
    label: '无',
    name: '无',
    nameEn: 'None',
  },
]

/**  来源;Source */
export const PRICE_SOURCE_ARRAY = [
  {
    value: 1,
    label: '网络',
    name: '网络',
    nameEn: 'Network',
  },
  {
    value: 2,
    label: '杂志',
    name: '杂志',
    nameEn: 'Magazine',
  },
  {
    value: 3,
    label: '自建',
    name: '自建',
    nameEn: 'Create',
  },
]

/**  计价方式;Pricing method */
export const PRICING_METHOD_ARRAY = [
  {
    value: 1,
    label: '金额',
    name: '金额',
    nameEn: 'Price',
  },
  {
    value: 2,
    label: '比例',
    name: '比例',
    nameEn: 'Ratio',
  },
]

/**  问题状态;Status */
export const PROBLEM_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已提交',
    name: '已提交',
    nameEn: 'Submitted',
  },
  {
    value: 3,
    label: '处理中',
    name: '处理中',
    nameEn: 'Processing',
  },
  {
    value: 4,
    label: '已处理',
    name: '已处理',
    nameEn: 'Processed',
  },
  {
    value: 5,
    label: '已入库',
    name: '已入库',
    nameEn: 'In library',
  },
]

/**  问题类型;Type */
export const PROBLEM_TYPE_ARRAY = [
  {
    value: 1,
    label: '业务问题',
    name: '业务问题',
    nameEn: 'Business issues',
  },
  {
    value: 2,
    label: '系统缺陷',
    name: '系统缺陷',
    nameEn: 'Bug',
  },
]

/**  读取频率;Frequency */
export const READ_FREQUENCY_ARRAY = [
  {
    value: 1,
    label: '按分钟计',
    name: '按分钟计',
    nameEn: 'Minute',
  },
  {
    value: 2,
    label: '按小时计',
    name: '按小时计',
    nameEn: 'Hour',
  },
  {
    value: 3,
    label: '按天计',
    name: '按天计',
    nameEn: 'Day',
  },
]

/**  进销平衡提醒;Feed pin balance reminder */
export const REASONABLE_REMINDER_ARRAY = [
  {
    value: 1,
    label: '合理',
    name: '合理',
    nameEn: 'Reasonable',
  },
  {
    value: 2,
    label: '不合理',
    name: '不合理',
    nameEn: 'Unreasonable',
  },
]

/**  角色类型;Role type */
export const ROLE_TYPE_ARRAY = [
  {
    value: 1,
    label: '系统',
    name: '系统',
    nameEn: 'System',
  },
  {
    value: 2,
    label: '业务',
    name: '业务',
    nameEn: 'Business',
  },
  {
    value: 3,
    label: '项目',
    name: '项目',
    nameEn: 'Project',
  },
  {
    value: 4,
    label: '司机',
    name: '司机',
    nameEn: 'Driver',
  },
]

/**  发货地或收货地;Sender or addressee */
export const SENDER_OR_ADDRESSEE_ARRAY = [
  {
    value: 1,
    label: '发货地',
    name: '发货地',
    nameEn: 'Sender',
  },
  {
    value: 2,
    label: '收货地',
    name: '收货地',
    nameEn: 'Addressee',
  },
]

/**  服务签订状态;Status */
export const SERVICE_STATUS_ARRAY = [
  {
    value: 1,
    label: '待签订',
    name: '待签订',
    nameEn: 'To be signed',
  },
  {
    value: 2,
    label: '我司已签',
    name: '我司已签',
    nameEn: 'Our company has signed',
  },
  {
    value: 13,
    label: '对方已签',
    name: '对方已签',
    nameEn: 'The other party has signed',
  },
  {
    value: 3,
    label: '已双签',
    name: '已双签',
    nameEn: 'Double signed',
  },
  {
    value: 4,
    label: '交付中',
    name: '交付中',
    nameEn: 'Delivery',
  },
  {
    value: 5,
    label: '我司已签补充协议',
    name: '我司已签补充协议',
    nameEn: 'Our company has signed agreement',
  },
  {
    value: 14,
    label: '对方已签补充协议',
    name: '对方已签补充协议',
    nameEn: 'The other party has signed agreement',
  },
  {
    value: 6,
    label: '补充协议已双签',
    name: '补充协议已双签',
    nameEn: 'Double signed agreement',
  },
  {
    value: 7,
    label: '交付完成',
    name: '交付完成',
    nameEn: 'Delivery completed',
  },
  {
    value: 8,
    label: '部分已结算',
    name: '部分已结算',
    nameEn: 'Settlement',
  },
  {
    value: 9,
    label: '结算完成',
    name: '结算完成',
    nameEn: 'Settlement completed',
  },
  {
    value: 10,
    label: '关账',
    name: '关账',
    nameEn: 'Closed',
  },
  {
    value: 11,
    label: '取消',
    name: '取消',
    nameEn: 'Canceled',
  },
]

/**  类型;Type */
export const SERVICE_TYPE_ARRAY = [
  {
    value: 1,
    label: '单次服务',
    name: '单次服务',
    nameEn: 'Single service',
  },
  {
    value: 2,
    label: '长期服务',
    name: '长期服务',
    nameEn: 'Long service',
  },
  {
    value: 3,
    label: '框架协议',
    name: '框架协议',
    nameEn: 'Framework Agreement',
  },
]

/**  状态;Status */
export const SETTLE_ACCOUNTS_STATUS_ARRAY = [
  {
    value: 1,
    label: '未确认',
    name: '未确认',
    nameEn: 'Unconfirmed',
  },
  {
    value: 2,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
  {
    value: 3,
    label: '支付中',
    name: '支付中',
    nameEn: 'In payment',
  },
  {
    value: 4,
    label: '支付完成',
    name: '支付完成',
    nameEn: 'Payment',
  },
  {
    value: 5,
    label: '已核销',
    name: '已核销',
    nameEn: 'Checked',
  },
]

/**  结算依据;Settlement basis */
export const SETTLEMENT_BASIS_ARRAY = [
  {
    value: 1,
    label: '磅单',
    name: '磅单',
    nameEn: 'Pound list',
  },
  {
    value: 2,
    label: '货转凭证',
    name: '货转凭证',
    nameEn: 'Certificate transfer',
  },
  {
    value: 3,
    label: '大副收据',
    name: '大副收据',
    nameEn: 'Mates receipt',
  },
  {
    value: 4,
    label: '提单',
    name: '提单',
    nameEn: 'Lading bill',
  },
  {
    value: 5,
    label: '水运运单',
    name: '水运运单',
    nameEn: 'Barge Waybill',
  },
  {
    value: 6,
    label: '火运运单',
    name: '火运运单',
    nameEn: 'Train Waybill',
  },
  {
    value: 7,
    label: '水尺报告',
    name: '水尺报告',
    nameEn: 'Water Gauge',
  },
]

/**  结算类型;Settlement Type */
export const SETTLEMENT_TYPE_ARRAY = [
  {
    value: 1,
    label: '应收',
    name: '应收',
    nameEn: 'Receivable',
  },
  {
    value: 2,
    label: '应付',
    name: '应付',
    nameEn: 'Payable',
  },
]

/**  状态;Status */
export const SHIPPING_AGENT_ENTRUST_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '未推荐',
    name: '未推荐',
    nameEn: 'Not recommended',
  },
  {
    value: 3,
    label: '已推荐',
    name: '已推荐',
    nameEn: 'recommended',
  },
  {
    value: 4,
    label: '拒绝',
    name: '拒绝',
    nameEn: 'Refuse',
  },
  {
    value: 5,
    label: '采纳',
    name: '采纳',
    nameEn: 'Take',
  },
]

/**  状态;Status */
export const SHIPPING_BERTHING_PLAN_STATUS_ARRAY = [
  {
    value: 1,
    label: '待定',
    name: '待定',
    nameEn: 'Undetermined',
  },
  {
    value: 2,
    label: '已确定',
    name: '已确定',
    nameEn: 'Determined',
  },
]

/**  状态;Status */
export const SHIPPING_DECLARE_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '未宣船',
    name: '未宣船',
    nameEn: 'Not notified',
  },
  {
    value: 3,
    label: '已通知',
    name: '已通知',
    nameEn: 'Notified',
  },
  {
    value: 4,
    label: '拒绝',
    name: '拒绝',
    nameEn: 'Refuse',
  },
  {
    value: 5,
    label: '接受',
    name: '接受',
    nameEn: 'Accept',
  },
]

/**  出运方式;Shipping method */
export const SHIPPING_METHOD_ARRAY = [
  {
    value: 1,
    label: '散货船',
    name: '散货船',
    nameEn: 'Bulk',
  },
  {
    value: 2,
    label: '集装箱(整柜)',
    name: '集装箱(整柜)',
    nameEn: 'Container',
  },
  {
    value: 5,
    label: '集装箱(拼柜)',
    name: '集装箱(拼柜)',
    nameEn: 'Container(LCL)',
  },
  {
    value: 4,
    label: 'BBV',
    name: 'BBV',
    nameEn: 'BBV',
  },
  {
    value: 6,
    label: '汽运',
    name: '汽运',
    nameEn: 'Truck',
  },
  {
    value: 7,
    label: '水运',
    name: '水运',
    nameEn: 'Ship',
  },
  {
    value: 8,
    label: '火运',
    name: '火运',
    nameEn: 'Train',
  },
  {
    value: 3,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
]

/**  类型;Type */
export const SHIPPING_PORT_TYPE_ARRAY = [
  {
    value: 1,
    label: '起始港',
    name: '起始港',
    nameEn: 'Port of departure',
  },
  {
    value: 2,
    label: '目的港',
    name: '目的港',
    nameEn: 'Port of destination',
  },
]

/**  推荐人;Referrer */
export const SHIPPING_REFERRER_ARRAY = [
  {
    value: 1,
    label: '租家',
    name: '租家',
    nameEn: 'Charterer',
  },
  {
    value: 2,
    label: '船东',
    name: '船东',
    nameEn: 'Shipowner',
  },
]

/**  类别;Type */
export const TAX_RATE_TYPE_ARRAY = [
  {
    value: 1,
    label: '货物',
    name: '货物',
    nameEn: 'Commodity',
  },
  {
    value: 2,
    label: '服务',
    name: '服务',
    nameEn: 'Service',
  },
]

/**  税票类别;Category */
export const TAX_RECEIPT_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '开票',
    name: '开票',
    nameEn: 'Invoicing',
  },
  {
    value: 2,
    label: '收票',
    name: '收票',
    nameEn: 'Receipt',
  },
]

/**  税票类型;Type */
export const TAX_RECEIPT_TYPE_ARRAY = [
  {
    value: 1,
    label: '纸质发票',
    name: '纸质发票',
    nameEn: 'Paper invoice',
  },
  {
    value: 2,
    label: '电子专用发票',
    name: '电子专用发票',
    nameEn: 'Electronic special invoice',
  },
  {
    value: 3,
    label: '全电发票',
    name: '全电发票',
    nameEn: 'Full electric invoice',
  },
]

/**  条款适用范围;Scope */
export const TERMS_SCOPE_ARRAY = [
  {
    value: 1,
    label: '销售合同',
    name: '销售合同',
    nameEn: 'Sales contract',
  },
  {
    value: 2,
    label: '采购合同',
    name: '采购合同',
    nameEn: 'Purchase contract',
  },
  {
    value: 3,
    label: '加工协议',
    name: '加工协议',
    nameEn: 'Processing entrust',
  },
  {
    value: 4,
    label: '物流协议',
    name: '物流协议',
    nameEn: 'Logistics entrust',
  },
  {
    value: 5,
    label: '商检协议',
    name: '商检协议',
    nameEn: 'Commodity inspection entrust',
  },
  {
    value: 6,
    label: '报关协议',
    name: '报关协议',
    nameEn: 'Declare at customs entrust',
  },
  {
    value: 7,
    label: '装/卸船协议',
    name: '装/卸船协议',
    nameEn: 'Loading/Unloading entrust',
  },
  {
    value: 8,
    label: '货代协议',
    name: '货代协议',
    nameEn: 'Freight Forwarder entrust',
  },
  {
    value: 9,
    label: '海运协议',
    name: '海运协议',
    nameEn: 'Ocean shipping entrust',
  },
  {
    value: 10,
    label: '保险协议',
    name: '保险协议',
    nameEn: 'Insurance entrust',
  },
  {
    value: 11,
    label: '销售代理协议',
    name: '销售代理协议',
    nameEn: 'Sales agent entrust',
  },
  {
    value: 12,
    label: '银行服务协议',
    name: '银行服务协议',
    nameEn: 'Bank service entrust',
  },
  {
    value: 13,
    label: '内部流转',
    name: '内部流转',
    nameEn: 'Inner contracts',
  },
  {
    value: 14,
    label: '其他服务',
    name: '其他服务',
    nameEn: 'Other Service',
  },
]

/**  对齐方式;Alignment */
export const TEXT_ALIGN_ARRAY = [
  {
    value: 1,
    label: '左对齐',
    name: '左对齐',
    nameEn: 'Align left',
  },
  {
    value: 2,
    label: '居中',
    name: '居中',
    nameEn: 'Align center',
  },
  {
    value: 3,
    label: '右对齐',
    name: '右对齐',
    nameEn: 'Align right',
  },
]

/**  交易方向;Trade direction */
export const TRADE_DIRECTION_ARRAY = [
  {
    value: 1,
    label: '采购',
    name: '采购',
    nameEn: 'Purchase',
  },
  {
    value: 2,
    label: '销售',
    name: '销售',
    nameEn: 'Sale',
  },
  {
    value: 3,
    label: '内部流转',
    name: '内部流转',
    nameEn: 'Internal transaction',
  },
  {
    value: 4,
    label: '外部交易',
    name: '外部交易',
    nameEn: 'External transaction',
  },
]

/**  交易类型;Trade type */
export const TRADE_TYPE_ARRAY = [
  {
    value: 1,
    label: '加工',
    name: '加工',
    nameEn: 'Processing',
  },
  {
    value: 2,
    label: '物流',
    name: '物流',
    nameEn: 'Logistics',
  },
  {
    value: 3,
    label: '商检',
    name: '商检',
    nameEn: 'Commodity inspection',
  },
  {
    value: 4,
    label: '仓储',
    name: '仓储',
    nameEn: 'Storage',
  },
  {
    value: 5,
    label: '报关',
    name: '报关',
    nameEn: 'Declare at customs',
  },
  {
    value: 6,
    label: '装/卸船',
    name: '装/卸船',
    nameEn: 'Loading/Unloading',
  },
  {
    value: 7,
    label: '货代',
    name: '货代',
    nameEn: 'Freight Forwarder',
  },
  {
    value: 8,
    label: '海运',
    name: '海运',
    nameEn: 'Ocean shipping',
  },
  {
    value: 9,
    label: '保险',
    name: '保险',
    nameEn: 'Insurance',
  },
  {
    value: 10,
    label: '货权转移',
    name: '货权转移',
    nameEn: 'Transfer cargo right',
  },
]

/**  交易类别;Transaction Type */
export const TRANSACTION_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '机会',
    name: '机会',
    nameEn: 'Opportunity',
  },
  {
    value: 2,
    label: '订单',
    name: '订单',
    nameEn: 'Actual transaction',
  },
  {
    value: 3,
    label: '假设交易',
    name: '假设交易',
    nameEn: 'Hypothetical transaction',
  },
]

/**  交易类型;Transaction Type */
export const TRANSACTION_TYPE_ARRAY = [
  {
    value: 1,
    label: '进口',
    name: '进口',
    nameEn: 'Import trade',
  },
  {
    value: 2,
    label: '出口',
    name: '出口',
    nameEn: 'Export trade',
  },
  {
    value: 3,
    label: '内贸',
    name: '内贸',
    nameEn: 'Domestic trade',
  },
  {
    value: 4,
    label: '离岸',
    name: '离岸',
    nameEn: 'Offshore trade',
  },
]

/**  转移类型;Type */
export const TRANSFER_CARGO_RIGHT_TYPE_ARRAY = [
  {
    value: 1,
    label: '转入',
    name: '转入',
    nameEn: 'Transfer in',
  },
  {
    value: 2,
    label: '转出',
    name: '转出',
    nameEn: 'Transfer out',
  },
  {
    value: 3,
    label: '内部流转',
    name: '内部流转',
    nameEn: 'Inner Circulation',
  },
]

/**  下划线的范围;Underline scope */
export const UNDER_LINE_SCOPE_ARRAY = [
  {
    value: 1,
    label: '全部',
    name: '全部',
    nameEn: 'All',
  },
  {
    value: 2,
    label: '仅替换内容',
    name: '仅替换内容',
    nameEn: 'Value',
  },
]

/**  状态;Status */
export const USER_TO_DO_LIST_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待执行',
    name: '待执行',
    nameEn: 'Unexecuted',
  },
  {
    value: 3,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 4,
    label: '已完成',
    name: '已完成',
    nameEn: 'Completed',
  },
]

/**  变数状态;Status */
export const VARIATE_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已提交',
    name: '已提交',
    nameEn: 'Submitted',
  },
  {
    value: 3,
    label: '处理中',
    name: '处理中',
    nameEn: 'Processing',
  },
  {
    value: 4,
    label: '已处理',
    name: '已处理',
    nameEn: 'Processed',
  },
  {
    value: 5,
    label: '已入库',
    name: '已入库',
    nameEn: 'In library',
  },
  {
    value: 6,
    label: '转为问题',
    name: '转为问题',
    nameEn: 'Turn into a problem',
  },
]

/**  运输方式;Vehicle */
export const VEHICLE_ARRAY = [
  {
    value: 1,
    label: '汽运',
    name: '汽运',
    nameEn: 'Truck',
  },
  {
    value: 2,
    label: '火车',
    name: '火车',
    nameEn: 'Train',
  },
  {
    value: 3,
    label: '驳船',
    name: '驳船',
    nameEn: 'Ship',
  },
  {
    value: 4,
    label: '快递',
    name: '快递',
    nameEn: 'Express',
  },
  {
    value: 5,
    label: '飞机',
    name: '飞机',
    nameEn: 'Aircraft',
  },
  {
    value: 6,
    label: '混合',
    name: '混合',
    nameEn: 'Combined',
  },
]

/**  工具类型;VehicleType */
export const VEHICLE_TYPE_ARRAY = [
  {
    value: 1,
    label: '货车',
    name: '货车',
    nameEn: 'Truck',
  },
  {
    value: 2,
    label: '火车',
    name: '火车',
    nameEn: 'Train',
  },
  {
    value: 3,
    label: '驳船',
    name: '驳船',
    nameEn: 'Ship',
  },
  {
    value: 4,
    label: '快递',
    name: '快递',
    nameEn: 'Express',
  },
  {
    value: 5,
    label: '飞机',
    name: '飞机',
    nameEn: 'Aircraft',
  },
]

/**  纵向对齐方式;Vertical align */
export const VERTICAL_ALIGN_ARRAY = [
  {
    value: 1,
    label: '置顶',
    name: '置顶',
    nameEn: 'Top',
  },
  {
    value: 2,
    label: '居中',
    name: '居中',
    nameEn: 'Middile',
  },
  {
    value: 3,
    label: '置底',
    name: '置底',
    nameEn: 'Bottom',
  },
]

/**  可见性;Visibility */
export const VISIBILITY_ARRAY = [
  {
    value: 1,
    label: '仅所有者',
    name: '仅所有者',
    nameEn: 'Owner only',
  },
  {
    value: 2,
    label: '全部',
    name: '全部',
    nameEn: 'All',
  },
]

/**  类型;Type */
export const WAREHOUSE_TYPE_ARRAY = [
  {
    value: 1,
    label: '港内仓库',
    name: '港内仓库',
    nameEn: 'In port warehouse',
  },
  {
    value: 2,
    label: '港外仓库',
    name: '港外仓库',
    nameEn: 'Warehouse outside the port',
  },
  {
    value: 3,
    label: '工厂仓库',
    name: '工厂仓库',
    nameEn: 'Factory warehouse',
  },
  {
    value: 4,
    label: '其他仓库',
    name: '其他仓库',
    nameEn: 'Other warehouse',
  },
]

/**  是否必填;Required */
export const YES_NO_ARRAY = [
  {
    value: 1,
    label: '是',
    name: '是',
    nameEn: 'YES',
  },
  {
    value: 2,
    label: '否',
    name: '否',
    nameEn: 'NO',
  },
]

/**  运输方式;Transport Method */
export const TRANSPORT_METHOD_ARRAY = [
  {
    value: 1,
    label: '汽运',
    name: '汽运',
    nameEn: 'Truck',
  },
  {
    value: 2,
    label: '火运',
    name: '火运',
    nameEn: 'Train',
  },
  {
    value: 3,
    label: '水运(驳船)',
    name: '水运(驳船)',
    nameEn: 'Barge',
  },
  {
    value: 4,
    label: '货权转移(原地货转)',
    name: '货权转移(原地货转)',
    nameEn: 'Freight Transfer',
  },
  {
    value: 5,
    label: '海运(装/卸船)',
    name: '海运(装/卸船)',
    nameEn: 'Shipping',
  },
  {
    value: 6,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
]

/**  产生方式;Generation method */
export const STORAGE_ORIGIN_ARRAY = [
  {
    value: 1,
    label: '订单成交',
    name: '订单成交',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '订单交付',
    name: '订单交付',
    nameEn: 'Order delivery',
  },
  {
    value: 3,
    label: '外部库数量调整',
    name: '外部库数量调整',
    nameEn: 'Quantity adjustment',
  },
  {
    value: 4,
    label: '退回',
    name: '退回',
    nameEn: 'Send Back',
  },
  {
    value: 5,
    label: '调拨流转',
    name: '调拨流转',
    nameEn: 'Allocation',
  },
  {
    value: 6,
    label: '代理交易回购',
    name: '代理交易回购',
    nameEn: 'Buy-back',
  },
  {
    value: 7,
    label: '代理交易(待回购)',
    name: '代理交易(待回购)',
    nameEn: 'Waiting to Buy-back',
  },
  {
    value: 8,
    label: '加工',
    name: '加工',
    nameEn: 'Processing',
  },
  {
    value: 18,
    label: '生产环节',
    name: '生产环节',
    nameEn: 'Production Process',
  },
  {
    value: 9,
    label: '内部转换',
    name: '内部转换',
    nameEn: 'Turn cargo',
  },
  {
    value: 10,
    label: '借货',
    name: '借货',
    nameEn: 'Borrow cargo',
  },
  {
    value: 11,
    label: '还货',
    name: '还货',
    nameEn: 'Return cargo',
  },
  {
    value: 12,
    label: '计量差',
    name: '计量差',
    nameEn: 'Difference',
  },
  {
    value: 13,
    label: '损耗',
    name: '损耗',
    nameEn: 'Wastage',
  },
  {
    value: 14,
    label: '盘盈',
    name: '盘盈',
    nameEn: 'Inventory Surplus',
  },
  {
    value: 15,
    label: '盘亏',
    name: '盘亏',
    nameEn: 'Inventory Loss',
  },
  {
    value: 16,
    label: '地脚料',
    name: '地脚料',
    nameEn: 'Footing Material',
  },
  {
    value: 17,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
  {
    value: 19,
    label: '产量申报',
    name: '产量申报',
    nameEn: 'Production Report',
  },
  {
    value: 20,
    label: '库存红冲',
    name: '库存红冲',
    nameEn: 'Inventory Reversal',
  },
  {
    value: 21,
    label: '期初库存',
    name: '期初库存',
    nameEn: 'Opening Inventory',
  },
]

/**  去向;Destination */
export const STORAGE_OUTPUT_ARRAY = [
  {
    value: 1,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '仓库',
    name: '仓库',
    nameEn: 'Warehouse',
  },
  {
    value: 3,
    label: '借货',
    name: '借货',
    nameEn: 'Borrow cargo',
  },
  {
    value: 4,
    label: '还货',
    name: '还货',
    nameEn: 'Return cargo',
  },
  {
    value: 5,
    label: '其他',
    name: '其他',
    nameEn: 'Other',
  },
]

/**  仓库性质:Nature */
export const WAREHOUSE_NATURE_ARRAY = [
  {
    value: 1,
    label: '实体库',
    name: '实体库',
    nameEn: 'Real warehouse',
  },
  {
    value: 2,
    label: '汽运在途库(汽运磅单库)',
    name: '汽运在途库(汽运磅单库)',
    nameEn: 'Car Transit Warehouse',
  },
  {
    value: 3,
    label: '火运在途库(火运运单库)',
    name: '火运在途库(火运运单库)',
    nameEn: 'Train Transit Warehouse',
  },
  {
    value: 4,
    label: '水运在途库(水运运单库)',
    name: '水运在途库(水运运单库)',
    nameEn: 'Barge Transit Warehouse',
  },
  {
    value: 5,
    label: '海运在途库(海运提单库)',
    name: '海运在途库(海运提单库)',
    nameEn: 'Shipping Transit Warehouse',
  },
  {
    value: 6,
    label: '损益库',
    name: '损益库',
    nameEn: 'Profit and Loss Warehouse',
  },
  {
    value: 7,
    label: '采购外部库',
    name: '采购外部库',
    nameEn: 'Purchase External Warehouse',
  },
  {
    value: 8,
    label: '销售外部库',
    name: '销售外部库',
    nameEn: 'Sale External Warehouse',
  },
  {
    value: 9,
    label: '其他库',
    name: '其他库',
    nameEn: 'Other Warehouse',
  },
  {
    value: 10,
    label: '借货外部库',
    name: '借货外部库',
    nameEn: 'Borrowed Warehouse',
  },
  {
    value: 11,
    label: '场栈库',
    name: '场栈库',
    nameEn: 'Field Stack Warehouse',
  },
]

/**  价格类型;Price Type */
export const PRICE_TYPE_ARRAY = [
  {
    value: 1,
    label: '固定价格',
    name: '固定价格',
    nameEn: 'Regular Price',
  },
  {
    value: 2,
    label: '浮动价格',
    name: '浮动价格',
    nameEn: 'Uncertain Price',
  },
]

/**  带回购;Buy-back */
export const BUY_BACK_ARRAY = [
  {
    value: 1,
    label: '不适应',
    name: '不适应',
    nameEn: 'N/A',
  },
  {
    value: 2,
    label: '待回购',
    name: '待回购',
    nameEn: 'Front',
  },
  {
    value: 3,
    label: '回购',
    name: '回购',
    nameEn: 'Back',
  },
]

/**  审批类型;Approval Type */
export const APPROVAL_TYPE_ARRAY = [
  {
    value: 6,
    label: '自定义',
    name: '自定义',
    nameEn: 'Custom',
  },
  {
    value: 1,
    label: '合同',
    name: '合同',
    nameEn: 'Contract',
  },
  {
    value: 2,
    label: '预算',
    name: '预算',
    nameEn: 'Budget',
  },
  {
    value: 13,
    label: '商检服务协议',
    name: '商检服务协议',
    nameEn: 'Inspection Service Agreement',
  },
  {
    value: 14,
    label: '物流服务协议',
    name: '物流服务协议',
    nameEn: 'Logistics Service Agreement',
  },
  {
    value: 15,
    label: '加工服务协议',
    name: '加工服务协议',
    nameEn: 'Processing Service Agreement',
  },
  {
    value: 16,
    label: '货代服务协议',
    name: '货代服务协议',
    nameEn: 'Freight Forwarder Service Agreement',
  },
  {
    value: 17,
    label: '保险服务协议',
    name: '保险服务协议',
    nameEn: 'Insurance Service Agreement',
  },
  {
    value: 18,
    label: '海运服务协议',
    name: '海运服务协议',
    nameEn: 'Ocean freight Service Agreement',
  },
  {
    value: 8,
    label: '销售代理协议',
    name: '销售代理协议',
    nameEn: 'Sales agent Service Agreement',
  },
  {
    value: 9,
    label: '银行服务协议',
    name: '银行服务协议',
    nameEn: 'Bank Service Agreement',
  },
  {
    value: 19,
    label: '成交授权',
    name: '成交授权',
    nameEn: 'Opportunity transaction',
  },
  {
    value: 20,
    label: '物流询价成交',
    name: '物流询价成交',
    nameEn: 'Logistics inquiry and transaction',
  },
  {
    value: 21,
    label: '海运询价成交',
    name: '海运询价成交',
    nameEn: 'Freight forwarder inquiry transaction',
  },
  {
    value: 22,
    label: '货代询价成交',
    name: '货代询价成交',
    nameEn: 'Inspection inquiry and transaction',
  },
  {
    value: 23,
    label: '加工询价成交',
    name: '加工询价成交',
    nameEn: 'Processing inquiry and transaction',
  },
  {
    value: 24,
    label: '商检询价成交',
    name: '商检询价成交',
    nameEn: 'Inspection inquiry and transaction',
  },
  {
    value: 25,
    label: '保险询价成交',
    name: '保险询价成交',
    nameEn: 'Insurance inquiry and transaction',
  },
  {
    value: 5,
    label: '销售代理询价成交',
    name: '销售代理询价成交',
    nameEn: 'Sales agent inquiry and transaction',
  },
  {
    value: 7,
    label: '银行服务询价成交',
    name: '银行服务询价成交',
    nameEn: 'Inquiry and transaction of banking services',
  },
  {
    value: 26,
    label: '预算任务计划',
    name: '预算任务计划',
    nameEn: 'Budget task',
  },
  {
    value: 27,
    label: '原地货转',
    name: '原地货转',
    nameEn: 'Transfer Cargo Right Approval',
  },
  {
    value: 28,
    label: '服务应计结算',
    name: '服务应计结算',
    nameEn: 'Service accrual settlement',
  },
  {
    value: 29,
    label: '订单应计结算',
    name: '订单应计结算',
    nameEn: 'Order accrual settlement',
  },
  {
    value: 30,
    label: '付款申请',
    name: '付款申请',
    nameEn: 'Payment application',
  },
  {
    value: 31,
    label: '开票申请',
    name: '开票申请',
    nameEn: 'Invoicing application',
  },
  {
    value: 32,
    label: '核销申请',
    name: '核销申请',
    nameEn: 'Write-off application',
  },
  {
    value: 33,
    label: '费用支付审批-订单费用',
    name: '费用支付审批-订单费用',
    nameEn: 'Order service payment request approval',
  },
  {
    value: 34,
    label: '非订单相关-付款申请',
    name: '非订单相关-付款申请',
    nameEn: 'Service payment request approval',
  },
  {
    value: 35,
    label: '出入库单审批',
    name: '出入库单审批',
    nameEn: 'Storage record approval',
  },
  {
    value: 36,
    label: '预出库审批',
    name: '预出库审批',
    nameEn: 'Pre Outbound Approval',
  },
  {
    value: 37,
    label: '库存月结回退审批',
    name: '库存月结回退审批',
    nameEn: 'Inventory Settlement Rollback Approval',
  },
  {
    value: 38,
    label: '订单交付结束确认',
    name: '订单交付结束确认',
    nameEn: 'Order Delivery Completed Approval',
  },
  {
    value: 39,
    label: '加工厂收率审批',
    name: '加工厂收率审批',
    nameEn: 'Processing Plant Yield Approval',
  },
  {
    value: 40,
    label: '物流出发复核',
    name: '物流出发复核',
    nameEn: 'Logistics Departure Review',
  },
  {
    value: 41,
    label: '物流到达复核',
    name: '物流到达复核',
    nameEn: 'Logistics Arrival Review',
  },
  {
    value: 42,
    label: '物流出发回退审批',
    name: '物流出发回退审批',
    nameEn: 'Logistics Departure Rollback Approval',
  },
  {
    value: 43,
    label: '物流到达回退审批',
    name: '物流到达回退审批',
    nameEn: 'Logistics Arrival Rollback Approval',
  },
  {
    value: 44,
    label: '出入库单审批退回',
    name: '出入库单审批退回',
    nameEn: 'Storage record approval rollback',
  },
  {
    value: 45,
    label: '其他服务询价',
    name: '其他服务询价',
    nameEn: 'Opportunity other approval',
  },
  {
    value: 46,
    label: '其他服务协议',
    name: '其他服务协议',
    nameEn: 'Service other approval',
  },
  {
    value: 47,
    label: '生产环节审批',
    name: '生产环节审批',
    nameEn: 'Production process approval',
  },
  {
    value: 48,
    label: '订单结算回退',
    name: '订单结算回退',
    nameEn: 'Settle Accounts Order Roll Back',
  },
  {
    value: 49,
    label: '服务结算回退',
    name: '服务结算回退',
    nameEn: 'Settle Accounts Service Roll Back',
  },
  {
    value: 50,
    label: '海运装船审批',
    name: '海运装船审批',
    nameEn: 'Ship Load Board Approval',
  },
  {
    value: 51,
    label: '海运装船回退审批',
    name: '海运装船回退审批',
    nameEn: 'Ship Load Board Rollback',
  },
  {
    value: 52,
    label: '订单交付结束状态回退',
    name: '订单交付结束状态回退',
    nameEn: 'Order Delivery Completed Rollback',
  },
  {
    value: 53,
    label: '物流交付结束确认',
    name: '物流交付结束确认',
    nameEn: 'Logistics Delivery Completed Approval',
  },
  {
    value: 54,
    label: '物流交付结束状态回退',
    name: '物流交付结束状态回退',
    nameEn: 'Order Delivery Completed Rollback',
  },
  {
    value: 55,
    label: '海运交付结束确认',
    name: '海运交付结束确认',
    nameEn: 'Shipping Delivery Completed Approval',
  },
  {
    value: 56,
    label: '海运交付结束状态回退',
    name: '海运交付结束状态回退',
    nameEn: 'Shipping Delivery Completed Rollback',
  },
  {
    value: 57,
    label: '加工交付结束确认',
    name: '加工交付结束确认',
    nameEn: 'Processing Delivery Completed Approval',
  },
  {
    value: 58,
    label: '加工交付结束状态回退',
    name: '加工交付结束状态回退',
    nameEn: 'Processing Delivery Completed Rollback',
  },
  {
    value: 59,
    label: '订单结算完成确认',
    name: '订单结算完成确认',
    nameEn: 'Order Settle Completed Approval',
  },
  {
    value: 60,
    label: '订单结算完成状态回退',
    name: '订单结算完成状态回退',
    nameEn: 'Order Settle Completed Approval Rollback',
  },
  {
    value: 61,
    label: '物流结算完成确认',
    name: '物流结算完成确认',
    nameEn: 'Logistics Settle Completed Approval',
  },
  {
    value: 62,
    label: '物流结算完成状态回退',
    name: '物流结算完成状态回退',
    nameEn: 'Logistics Settle Completed Approval Rollback',
  },
  {
    value: 63,
    label: '加工结算完成确认',
    name: '加工结算完成确认',
    nameEn: 'Processing Settle Completed Approval',
  },
  {
    value: 64,
    label: '加工结算完成状态回退',
    name: '加工结算完成状态回退',
    nameEn: 'Processing Settle Completed Approval Rollback',
  },
  {
    value: 65,
    label: '海运结算完成确认',
    name: '海运结算完成确认',
    nameEn: 'Shipping Settle Completed Approval',
  },
  {
    value: 66,
    label: '海运结算完成状态回退',
    name: '海运结算完成状态回退',
    nameEn: 'Shipping Settle Completed Approval Rollback',
  },
  {
    value: 67,
    label: '其他服务结算完成确认',
    name: '其他服务结算完成确认',
    nameEn: 'Other Settle Completed Approval',
  },
  {
    value: 68,
    label: '其他服务结算完成状态回退',
    name: '其他服务结算完成状态回退',
    nameEn: 'Other Settle Completed Approval Rollback',
  },
  {
    value: 69,
    label: '订单关账审批',
    name: '订单关账审批',
    nameEn: 'Order Close Approval',
  },
  {
    value: 70,
    label: '订单关账状态回退',
    name: '订单关账状态回退',
    nameEn: 'Order Close Approval Rollback',
  },
  {
    value: 71,
    label: '物流关账审批',
    name: '物流关账审批',
    nameEn: 'Logistics Close Approval',
  },
  {
    value: 72,
    label: '物流关账状态回退',
    name: '物流关账状态回退',
    nameEn: 'Logistics Close Approval Rollback',
  },
  {
    value: 73,
    label: '加工关账审批',
    name: '加工关账审批',
    nameEn: 'Processing Close Approval',
  },
  {
    value: 74,
    label: '加工关账状态回退',
    name: '加工关账状态回退',
    nameEn: 'Processing Close Approval Rollback',
  },
  {
    value: 75,
    label: '海运关账审批',
    name: '海运关账审批',
    nameEn: 'Shipping  Close Approval',
  },
  {
    value: 76,
    label: '海运关账状态回退',
    name: '海运关账状态回退',
    nameEn: 'Shipping  Close Approval Rollback',
  },
  {
    value: 77,
    label: '其他服务关账审批',
    name: '其他服务关账审批',
    nameEn: 'Other Close Approval',
  },
  {
    value: 78,
    label: '其他服务关账状态回退',
    name: '其他服务关账状态回退',
    nameEn: 'Other Close Approval Rollback',
  },
  {
    value: 79,
    label: '订单取消审批',
    name: '订单取消审批',
    nameEn: 'Order Cancel Approval',
  },
  {
    value: 80,
    label: '机会修改审批',
    name: '机会修改审批',
    nameEn: 'Opportunity Commodity Update Approval',
  },
  {
    value: 81,
    label: '原地货转退回',
    name: '原地货转退回',
    nameEn: 'Transfer Cargo Right Approval Rollback',
  },
  {
    value: 82,
    label: '产量申报审批',
    name: '产量申报审批',
    nameEn: 'Production Report Approval',
  },
  {
    value: 83,
    label: '产量申报退回审批',
    name: '产量申报退回审批',
    nameEn: 'Production Report approval rollback',
  },
  {
    value: 84,
    label: '产量申报调整审批',
    name: '产量申报调整审批',
    nameEn: 'Production Adjustment Approval',
  },
  {
    value: 85,
    label: '产量申报调整回退审批',
    name: '产量申报调整回退审批',
    nameEn: 'Production Adjustment Approval Rollback',
  },
  {
    value: 86,
    label: '原料入库调整审批',
    name: '原料入库调整审批',
    nameEn: 'Material Storage Adjustment Approval',
  },
  {
    value: 87,
    label: '原料入库调整回退审批',
    name: '原料入库调整回退审批',
    nameEn: 'Material Storage Adjustment Approval Rollback',
  },
  {
    value: 88,
    label: '货物借调协议审批',
    name: '货物借调协议审批',
    nameEn: 'Material Loan Approval',
  },
  {
    value: 89,
    label: '货物借调借货交付结束确认',
    name: '货物借调借货交付结束确认',
    nameEn: 'Material Loan Completed Approval',
  },
  {
    value: 90,
    label: '货物借调还货交付结束确认',
    name: '货物借调还货交付结束确认',
    nameEn: 'Material Return Completed Approval',
  },
  {
    value: 91,
    label: '货物借调借货交付结束回退',
    name: '货物借调借货交付结束回退',
    nameEn: 'Material Loan Completed Approval Rollback',
  },
  {
    value: 92,
    label: '货物借调还货交付结束回退',
    name: '货物借调还货交付结束回退',
    nameEn: 'Material Return Completed Approval Rollback',
  },
]

/**  预算或项目;BudgetType */
export const BUDGET_OR_PROJECT_ARRAY = [
  {
    value: 1,
    label: '预算',
    name: '预算',
    nameEn: 'Budget',
  },
  {
    value: 2,
    label: '项目',
    name: '项目',
    nameEn: 'Project',
  },
]

/**  关联交易类型;Connection trade type */
export const CONNECTION_TRADE_TYPE_ARRAY = [
  {
    value: 1,
    label: '预算',
    name: '预算',
    nameEn: 'Budget',
  },
  {
    value: 2,
    label: '订单',
    name: '订单',
    nameEn: 'Order',
  },
  {
    value: 3,
    label: '服务',
    name: '服务',
    nameEn: 'Service',
  },
]

/**  数据产生方式;Data generation method */
export const DATA_GENERATION_METHOD_ARRAY = [
  {
    value: 1,
    label: '手动录入',
    name: '手动录入',
    nameEn: 'Manual Input',
  },
  {
    value: 2,
    label: '自动生成',
    name: '自动生成',
    nameEn: 'Automatic Generation',
  },
  {
    value: 3,
    label: '物流出发生成',
    name: '物流出发生成',
    nameEn: 'Logistics Departure Generation',
  },
  {
    value: 4,
    label: '物流到达生成',
    name: '物流到达生成',
    nameEn: 'Logistics Arrival Generation',
  },
  {
    value: 5,
    label: '成交生成',
    name: '成交生成',
    nameEn: 'Order Generation',
  },
  {
    value: 6,
    label: '外部库数量调整',
    name: '外部库数量调整',
    nameEn: 'Quantity adjustment',
  },
  {
    value: 7,
    label: '生产环节',
    name: '生产环节',
    nameEn: 'Production Process',
  },
  {
    value: 8,
    label: '加工',
    name: '加工',
    nameEn: 'Processing',
  },
  {
    value: 9,
    label: '装船',
    name: '装船',
    nameEn: 'Ship Load Board',
  },
  {
    value: 10,
    label: '原地货转',
    name: '原地货转',
    nameEn: 'Freight Transfer',
  },
  {
    value: 11,
    label: '产量申报',
    name: '产量申报',
    nameEn: 'Production Report',
  },
  {
    value: 12,
    label: '产量调整',
    name: '产量调整',
    nameEn: 'Production Adjustment',
  },
  {
    value: 13,
    label: '原料调整',
    name: '原料调整',
    nameEn: 'Material Adjustment',
  },
]

/**  状态;Status */
export const END_CLOSING_STATUS_ARRAY = [
  {
    value: 1,
    label: '正常',
    name: '正常',
    nameEn: 'Normal',
  },
  {
    value: 2,
    label: '回退',
    name: '回退',
    nameEn: 'Return',
  },
]

/**  抬头纸类型;Header Paper Type */
export const HEADER_PAPER_TYPE_ARRAY = [
  {
    value: 1,
    label: '空白',
    name: '空白',
    nameEn: 'Blank',
  },
  {
    value: 2,
    label: '装船通知',
    name: '装船通知',
    nameEn: 'Shipping Advice',
  },
  {
    value: 3,
    label: '受益人证明',
    name: '受益人证明',
    nameEn: 'Beneficiary Certificate',
  },
  {
    value: 4,
    label: 'COA',
    name: 'COA',
    nameEn: 'COA',
  },
  {
    value: 5,
    label: '产地证',
    name: '产地证',
    nameEn: 'Certificate Origin',
  },
]

/**  状态;Status */
export const JOURNAL_CHECK_STATUS_ARRAY = [
  {
    value: 1,
    label: '未核查',
    name: '未核查',
    nameEn: 'Uncheck',
  },
  {
    value: 2,
    label: '已核查',
    name: '已核查',
    nameEn: 'Checked',
  },
]

/**  选择权;Option */
export const OPTION_SHIPPING_ARRAY = [
  {
    value: 1,
    label: '租家选择',
    name: '租家选择',
    nameEn: 'Charter Option',
  },
  {
    value: 2,
    label: '船东选择',
    name: '船东选择',
    nameEn: 'Owner Option',
  },
]

/**  抬头纸类型;Header Paper Type */
export const ORDER_DOCUMENT_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
]

/**  单证类型;Order Document Type */
export const ORDER_DOCUMENT_TYPE_ARRAY = [
  {
    value: 1,
    label: '抬头纸',
    name: '抬头纸',
    nameEn: 'Header Paper',
  },
  {
    value: 2,
    label: '装船通知',
    name: '装船通知',
    nameEn: 'Shipping Advice',
  },
  {
    value: 3,
    label: '受益人证明',
    name: '受益人证明',
    nameEn: 'Beneficiary Certificate',
  },
  {
    value: 4,
    label: 'COA',
    name: 'COA',
    nameEn: 'COA',
  },
  {
    value: 5,
    label: '产地证',
    name: '产地证',
    nameEn: 'Certificate Origin',
  },
  {
    value: 6,
    label: '装箱单',
    name: '装箱单',
    nameEn: 'Packing List',
  },
  {
    value: 7,
    label: '海运提单',
    name: '海运提单',
    nameEn: 'Bill Lading',
  },
  {
    value: 8,
    label: 'CO',
    name: 'CO',
    nameEn: 'CO',
  },
  {
    value: 9,
    label: 'INVOICE',
    name: 'INVOICE',
    nameEn: 'INVOICE',
  },
  {
    value: 10,
    label: '报关单证',
    name: '报关单证',
    nameEn: 'Custom Declaration',
  },
]

/**  类型;Order Header Paper Content */
export const ORDER_HEADER_PAPER_CONTENT_ARRAY = [
  {
    value: 1,
    label: '文本',
    name: '文本',
    nameEn: 'Text',
  },
  {
    value: 2,
    label: '表格',
    name: '表格',
    nameEn: 'Table',
  },
  {
    value: 3,
    label: '标题',
    name: '标题',
    nameEn: 'Title',
  },
  {
    value: 4,
    label: '子标题',
    name: '子标题',
    nameEn: 'Subtitle',
  },
]

/**  汇款类别;Remittance type */
export const REMITTANCE_TYPE_ARRAY = [
  {
    value: 1,
    label: '境内汇款',
    name: '境内汇款',
    nameEn: 'Domestic Remittance',
  },
  {
    value: 2,
    label: '境外汇款',
    name: '境外汇款',
    nameEn: 'Overseas Remittance',
  },
  {
    value: 3,
    label: '跨境汇款',
    name: '跨境汇款',
    nameEn: 'Cross Border Remittance',
  },
]

/**  时区 */
export const TIME_ZONE_ARRAY = [
  {
    value: 1,
    label: '亚洲/北京',
    name: '亚洲/北京',
    nameEn: 'Asia/Beijing',
  },
  {
    value: 2,
    label: '美国/洛杉矶',
    name: '美国/洛杉矶',
    nameEn: 'America/Los_Angeles',
  },
  {
    value: 3,
    label: '美国/纽约',
    name: '美国/纽约',
    nameEn: 'America/New_York',
  },
  {
    value: 4,
    label: '澳大利亚/达尔文',
    name: '澳大利亚/达尔文',
    nameEn: 'Australia/Darwin',
  },
  {
    value: 5,
    label: '澳大利亚/悉尼',
    name: '澳大利亚/悉尼',
    nameEn: 'Australia/Sydney',
  },
  {
    value: 6,
    label: '美国/阿根廷/布宜诺斯艾利斯',
    name: '美国/阿根廷/布宜诺斯艾利斯',
    nameEn: 'America/Argentina/Buenos_Aires',
  },
  {
    value: 7,
    label: '非洲/开罗',
    name: '非洲/开罗',
    nameEn: 'Africa/Cairo',
  },
  {
    value: 8,
    label: '美国/安克雷奇',
    name: '美国/安克雷奇',
    nameEn: 'America/Anchorage',
  },
  {
    value: 9,
    label: '美国/圣保罗',
    name: '美国/圣保罗',
    nameEn: 'America/Sao_Paulo',
  },
  {
    value: 10,
    label: '亚洲/达卡',
    name: '亚洲/达卡',
    nameEn: 'Asia/Dhaka',
  },
  {
    value: 11,
    label: '非洲/哈拉雷',
    name: '非洲/哈拉雷',
    nameEn: 'Africa/Harare',
  },
  {
    value: 12,
    label: '美洲/加拿大',
    name: '美洲/加拿大',
    nameEn: 'America/St_Johns',
  },
  {
    value: 13,
    label: '美国/芝加哥',
    name: '美国/芝加哥',
    nameEn: 'America/Chicago',
  },
  {
    value: 14,
    label: '非洲/亚的斯亚贝巴',
    name: '非洲/亚的斯亚贝巴',
    nameEn: 'Africa/Addis_Ababa',
  },
  {
    value: 15,
    label: '欧洲/巴黎',
    name: '欧洲/巴黎',
    nameEn: 'Europe/Paris',
  },
  {
    value: 16,
    label: '美国/印第安纳州/印第安纳波利斯',
    name: '美国/印第安纳州/印第安纳波利斯',
    nameEn: 'America/Indiana/Indianapolis',
  },
  {
    value: 17,
    label: '亚洲/加尔各答',
    name: '亚洲/加尔各答',
    nameEn: 'Asia/Kolkata',
  },
  {
    value: 18,
    label: '亚洲/东京',
    name: '亚洲/东京',
    nameEn: 'Asia/Tokyo',
  },
  {
    value: 19,
    label: '太平洋/阿皮亚',
    name: '太平洋/阿皮亚',
    nameEn: 'Pacific/Apia',
  },
  {
    value: 20,
    label: '亚洲/埃里温',
    name: '亚洲/埃里温',
    nameEn: 'Asia/Yerevan',
  },
  {
    value: 21,
    label: '太平洋/奥克兰',
    name: '太平洋/奥克兰',
    nameEn: 'Pacific/Auckland',
  },
  {
    value: 22,
    label: '亚洲/卡拉奇',
    name: '亚洲/卡拉奇',
    nameEn: 'Asia/Karachi',
  },
  {
    value: 23,
    label: '美国/菲尼克斯',
    name: '美国/菲尼克斯',
    nameEn: 'America/Phoenix',
  },
  {
    value: 24,
    label: '美国/波多黎各',
    name: '美国/波多黎各',
    nameEn: 'America/Puerto_Rico',
  },
  {
    value: 25,
    label: '太平洋/瓜达尔卡纳尔岛',
    name: '太平洋/瓜达尔卡纳尔岛',
    nameEn: 'Pacific/Guadalcanal',
  },
  {
    value: 26,
    label: '亚洲/胡志明市',
    name: '亚洲/胡志明市',
    nameEn: 'Asia/Ho_Chi_Minh',
  },
  {
    value: 27,
    label: '美国/丹佛',
    name: '美国/丹佛',
    nameEn: 'America/Denver',
  },
  {
    value: 28,
    label: '太平洋/檀香山',
    name: '太平洋/檀香山',
    nameEn: 'Pacific/Honolulu',
  },
]

/**  交易类别;Transaction Type */
export const TRANSACTION_CATEGORY_SERVICE_ARRAY = [
  {
    value: 1,
    label: '询价',
    name: '询价',
    nameEn: 'Opportunity',
  },
  {
    value: 2,
    label: '服务',
    name: '服务',
    nameEn: 'Service',
  },
  {
    value: 3,
    label: '假设交易',
    name: '假设交易',
    nameEn: 'Hypothetical',
  },
]

/**  部门标签;Department Label */
export const DEPARTMENT_LABEL_ARRAY = [
  {
    value: 1,
    label: '业务部',
    name: '业务部',
    nameEn: 'Business Department',
  },
  {
    value: 2,
    label: '执行部',
    name: '执行部',
    nameEn: 'Executor Department',
  },
  {
    value: 3,
    label: '物流部',
    name: '物流部',
    nameEn: 'Logistics Department',
  },
  {
    value: 4,
    label: '市场部',
    name: '市场部',
    nameEn: 'Marketing Department',
  },
  {
    value: 5,
    label: '财务部',
    name: '财务部',
    nameEn: 'Finance Department',
  },
  {
    value: 6,
    label: '风控部',
    name: '风控部',
    nameEn: 'Risk Management Department',
  },
  {
    value: 7,
    label: 'IT部',
    name: 'IT部',
    nameEn: 'IT Department',
  },
]

/**  出入库单审批状态;Storage Approval Status */
export const STORAGE_APPROVAL_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
  {
    value: 7,
    label: '预出库审批中',
    name: '预出库审批中',
    nameEn: 'In Pre Outbound Approved',
  },
  {
    value: 8,
    label: '预出库',
    name: '预出库',
    nameEn: 'Pre Outbound',
  },
  {
    value: 3,
    label: '审核中',
    name: '审核中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '驳回',
    name: '驳回',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
  {
    value: 6,
    label: '回退审批中',
    name: '回退审批中',
    nameEn: 'In Rollback Approved',
  },
]

/**  货的状态;Cargo Status */
export const CARGO_STATUS_ARRAY = [
  {
    value: 1,
    label: '采购交付争议',
    name: '采购交付争议',
    nameEn: 'The sale is disputed',
  },
  {
    value: 2,
    label: '采购交付争议',
    name: '采购交付争议',
    nameEn: 'The procurement is disputed',
  },
  {
    value: 3,
    label: '线索/报盘失效',
    name: '线索/报盘失效',
    nameEn: 'Clue or offer expired',
  },
  {
    value: 4,
    label: '已失效',
    name: '已失效',
    nameEn: 'Expired',
  },
  {
    value: 5,
    label: '无状态(初始值)',
    name: '无状态(初始值)',
    nameEn: 'None',
  },
  {
    value: 6,
    label: '线索状态',
    name: '线索状态',
    nameEn: 'Clue',
  },
  {
    value: 7,
    label: '报盘',
    name: '报盘',
    nameEn: 'Offer',
  },
  {
    value: 8,
    label: '采购订单待发货',
    name: '采购订单待发货',
    nameEn: 'Purchase order is to be shipped',
  },
  {
    value: 9,
    label: '在途',
    name: '在途',
    nameEn: 'In-transit',
  },
  {
    value: 10,
    label: '在实体库',
    name: '在实体库',
    nameEn: 'In-physical warehouse',
  },
  {
    value: 11,
    label: '销售交付状态完毕',
    name: '销售交付状态完毕',
    nameEn: 'Sale delivered',
  },
  {
    value: 12,
    label: '关账',
    name: '关账',
    nameEn: 'Closing',
  },
]

/**  订单确认短溢装类型;Order Quantity Confirm Type */
export const ORDER_QUANTITY_CONFIRM_TYPE_ARRAY = [
  {
    value: 1,
    label: '短溢装范围',
    name: '短溢装范围',
    nameEn: 'Tolerance Range',
  },
  {
    value: 2,
    label: '数量范围',
    name: '数量范围',
    nameEn: 'Quantity Range',
  },
]

/**  企业类别;Company Form */
export const COMPANY_FORM_ARRAY = [
  {
    value: 1,
    label: '客户',
    name: '客户',
    nameEn: 'Customer',
  },
  {
    value: 2,
    label: '供应商',
    name: '供应商',
    nameEn: 'Supplier',
  },
  {
    value: 3,
    label: '服务方',
    name: '服务方',
    nameEn: 'Server',
  },
  {
    value: 4,
    label: '代理商',
    name: '代理商',
    nameEn: 'Finance',
  },
  {
    value: 5,
    label: '货源工厂',
    name: '货源工厂',
    nameEn: 'Factory',
  },
]

/**  服务类别;Server Type */
export const SERVER_TYPE_ARRAY = [
  {
    value: 1,
    label: '加工',
    name: '加工',
    nameEn: 'Processing',
  },
  {
    value: 2,
    label: '物流',
    name: '物流',
    nameEn: 'Logistics',
  },
  {
    value: 3,
    label: '商检',
    name: '商检',
    nameEn: 'Test',
  },
  {
    value: 4,
    label: '货代',
    name: '货代',
    nameEn: 'Agent',
  },
  {
    value: 5,
    label: '海运',
    name: '海运',
    nameEn: 'Shipping',
  },
  {
    value: 6,
    label: '保险',
    name: '保险',
    nameEn: 'Insurance',
  },
  {
    value: 7,
    label: '银行服务',
    name: '银行服务',
    nameEn: 'Bank',
  },
  {
    value: 8,
    label: '销售代理',
    name: '销售代理',
    nameEn: 'Sales',
  },
  {
    value: 9,
    label: '船代',
    name: '船代',
    nameEn: 'Shipping Agent',
  },
  {
    value: 10,
    label: '其他服务',
    name: '其他服务',
    nameEn: 'Other Service',
  },
  {
    value: 11,
    label: '货物订单',
    name: '货物订单',
    nameEn: 'Order',
  },
]

/**  关账状态;Close Status */
export const CLOSE_STATUS_ARRAY = [
  {
    value: 1,
    label: '未关账',
    name: '未关账',
    nameEn: 'Unclosed',
  },
  {
    value: 3,
    label: '关账审批中',
    name: '关账审批中',
    nameEn: 'Closing',
  },
  {
    value: 2,
    label: '已关账',
    name: '已关账',
    nameEn: 'Closed',
  },
  {
    value: 4,
    label: '关账回退中',
    name: '关账回退中',
    nameEn: 'Unclosing',
  },
]

/**  结算状态;Settlement Status */
export const SETTLEMENT_STATUS_ARRAY = [
  {
    value: 1,
    label: '未结算',
    name: '未结算',
    nameEn: 'Unsettled',
  },
  {
    value: 2,
    label: '部分已结算',
    name: '部分已结算',
    nameEn: 'Settlement',
  },
  {
    value: 4,
    label: '结算完成确认中',
    name: '结算完成确认中',
    nameEn: 'Settlement completed approval',
  },
  {
    value: 3,
    label: '结算完成',
    name: '结算完成',
    nameEn: 'Settlement completed',
  },
  {
    value: 5,
    label: '结算完成回退中',
    name: '结算完成回退中',
    nameEn: 'Settlement completed rollback',
  },
]

/**  交付状态;Delivery Status */
export const DELIVERY_STATUS_ARRAY = [
  {
    value: 1,
    label: '待交付',
    name: '待交付',
    nameEn: 'To be delivered',
  },
  {
    value: 2,
    label: '部分已交付',
    name: '部分已交付',
    nameEn: 'Delivery',
  },
  {
    value: 3,
    label: '交付结束确认中',
    name: '交付结束确认中',
    nameEn: 'Delivery completion confirmation in progress',
  },
  {
    value: 4,
    label: '交付结束',
    name: '交付结束',
    nameEn: 'Delivery completed',
  },
  {
    value: 5,
    label: '交付结束回退中',
    name: '交付结束回退中',
    nameEn: 'Delivery completed rollback',
  },
]

/**  发票类型;Invoice Type */
export const INVOICE_TYPE_ARRAY = [
  {
    value: 1,
    label: '增值税普通发票',
    name: '增值税普通发票',
    nameEn: 'Tax ordinary invoice',
  },
  {
    value: 3,
    label: '增值税专用发票',
    name: '增值税专用发票',
    nameEn: 'VAT invoice',
  },
  {
    value: 6,
    label: 'DEBIT NOTE',
    name: 'DEBIT NOTE',
    nameEn: 'DEBIT NOTE',
  },
  {
    value: 9,
    label: 'Invoice',
    name: 'Invoice',
    nameEn: 'Invoice',
  },
  {
    value: 10,
    label: 'Pre Invoice',
    name: 'Pre Invoice',
    nameEn: 'Pre Invoice',
  },
  {
    value: 2,
    label: '国外形式发票',
    name: '国外形式发票',
    nameEn: 'Proforma Invoice',
  },
  {
    value: 4,
    label: '账单',
    name: '账单',
    nameEn: 'Statement of Account',
  },
  {
    value: 5,
    label: '收据',
    name: '收据',
    nameEn: 'Receipt',
  },
  {
    value: 7,
    label: '税单-关税',
    name: '税单-关税',
    nameEn: 'Tariff',
  },
  {
    value: 8,
    label: '税单-增值税',
    name: '税单-增值税',
    nameEn: 'Value added tax',
  },
]

/**  服务的发票类型;Invoice Type */
export const SERVICE_INVOICE_TYPE_ENUM = [
  {
    value: 1,
    label: '增值税普通发票',
    name: '增值税普通发票',
    nameEn: 'Tax ordinary invoice',
  },
  {
    value: 3,
    label: '增值税专用发票',
    name: '增值税专用发票',
    nameEn: 'VAT invoice',
  },
  {
    value: 6,
    label: 'DEBIT NOTE',
    name: 'DEBIT NOTE',
    nameEn: 'DEBIT NOTE',
  },
  {
    value: 9,
    label: 'Invoice',
    name: 'Invoice',
    nameEn: 'Invoice',
  },
  {
    value: 10,
    label: 'Pre Invoice',
    name: 'Pre Invoice',
    nameEn: 'Pre Invoice',
  },
  {
    value: 2,
    label: '国外形式发票',
    name: '国外形式发票',
    nameEn: 'Proforma Invoice',
  },
  {
    value: 4,
    label: '账单',
    name: '账单',
    nameEn: 'Statement of Account',
  },
  {
    value: 5,
    label: '收据',
    name: '收据',
    nameEn: 'Receipt',
  },
  {
    value: 7,
    label: '税单-关税',
    name: '税单-关税',
    nameEn: 'Tariff',
  },
  {
    value: 8,
    label: '税单-增值税',
    name: '税单-增值税',
    nameEn: 'Value added tax',
  },
]

/**  应计结算核销状态 */
export const WRITE_OFF_STATUS_ARRAY = [
  {
    value: 4,
    label: '无',
    name: '无',
    nameEn: 'Empty',
  },
  {
    value: 1,
    label: '未核销',
    name: '未核销',
    nameEn: 'Payment not yet verified',
  },
  {
    value: 2,
    label: '核销审批中',
    name: '核销审批中',
    nameEn: 'Verification approval in progress',
  },
  {
    value: 3,
    label: '已核销',
    name: '已核销',
    nameEn: 'Payment has been verified',
  },
]

/**  应计结算审批状态 */
export const SETTLE_ACCOUNTS_APPROVAL_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待审批',
    name: '待审批',
    nameEn: 'Approved pending',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '驳回',
    name: '驳回',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
  {
    value: 6,
    label: '结算退回中',
    name: '结算退回中',
    nameEn: 'In Rollback Approved',
  },
]

/**  海运航次装船审批状态 */
export const SHIP_LOAD_BOARD_APPROVAL_STATUS_ENUM = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '已确认',
    name: '已确认',
    nameEn: 'Confirmed',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '不通过',
    name: '不通过',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
  {
    value: 6,
    label: '复核回退中',
    name: '复核回退中',
    nameEn: 'Approval RollBack',
  },
]

/**  装卸港免用类型 */
export const FREE_PORT_TYPE_ARRAY = [
  {
    value: 1,
    label: '混用',
    name: '混用',
    nameEn: 'Mixed use',
  },
  {
    value: 2,
    label: '分开',
    name: '分开',
    nameEn: 'Separate',
  },
]

/**  需包含目的港费用;Including destination port charges */
export const INCLUDING_DESTINATION_CHARGES_ARRAY = [
  {
    value: 1,
    label: ' ',
    name: ' ',
    nameEn: ' ',
  },
  {
    value: 2,
    label: 'LSL',
    name: 'LSL',
    nameEn: 'LSL',
  },
  {
    value: 3,
    label: 'CIC',
    name: 'CIC',
    nameEn: 'CIC',
  },
]

/**  普货/危品;General cargo/dangerous */
export const GENERAL_DANGEROUS_ARRAY = [
  {
    value: 1,
    label: '普货',
    name: '普货',
    nameEn: 'General cargo',
  },
  {
    value: 2,
    label: '危品',
    name: '危品',
    nameEn: 'dangerous',
  },
]

/**  海运柜型 */
export const SHIPPING_CUPBOARD_ARRAY = [
  {
    value: 1,
    label: '大柜',
    name: '大柜',
    nameEn: 'Large cabinet',
  },
  {
    value: 2,
    label: '小柜',
    name: '小柜',
    nameEn: 'Small cabinet',
  },
  {
    value: 3,
    label: 'NOR',
    name: 'NOR',
    nameEn: 'NOR',
  },
]

/**  海运船型 */
export const SHIPPING_SHIP_ARRAY = [
  {
    value: 1,
    label: ' handy',
    name: ' handy',
    nameEn: 'handy',
  },
  {
    value: 2,
    label: 'supra',
    name: 'supra',
    nameEn: 'supra',
  },
  {
    value: 3,
    label: 'ultra',
    name: 'ultra',
    nameEn: 'ultra',
  },
  {
    value: 4,
    label: 'panamax',
    name: 'panamax',
    nameEn: 'panamax',
  },
  {
    value: 5,
    label: ' kamsarmax',
    name: ' kamsarmax',
    nameEn: 'kamsarmax',
  },
]

/**  海运BBV价格类型 */
export const SHIPPING_PRICE_TYPE_ARRAY = [
  {
    value: 1,
    label: 'fio',
    name: 'fio',
    nameEn: 'fio',
  },
  {
    value: 2,
    label: 'filo',
    name: 'filo',
    nameEn: 'filo',
  },
  {
    value: 3,
    label: 'fiost',
    name: 'fiost',
    nameEn: 'fiost',
  },
]

/**  归档状态;Document Status */
export const DOCUMENT_STATUS_ARRAY = [
  {
    value: 1,
    label: '未归档',
    name: '未归档',
    nameEn: 'File Unclose',
  },
  {
    value: 2,
    label: '归档审批中',
    name: '归档审批中',
    nameEn: 'File Close Approval',
  },
  {
    value: 3,
    label: '已归档',
    name: '已归档',
    nameEn: 'File Close',
  },
  {
    value: 4,
    label: '归档回退中',
    name: '归档回退中',
    nameEn: 'File Close Rollback',
  },
]

/**  运费类型;Container Type */
export const CONTAINER_TYPE_ARRAY = [
  {
    value: 1,
    label: '大柜',
    name: '大柜',
    nameEn: 'Large Cabinet',
  },
  {
    value: 2,
    label: '小柜',
    name: '小柜',
    nameEn: 'Small Cabinet',
  },
  {
    value: 3,
    label: 'NOR',
    name: 'NOR',
    nameEn: 'nor',
  },
  {
    value: 4,
    label: 'handy',
    name: 'handy',
    nameEn: 'handy',
  },
  {
    value: 5,
    label: 'supra',
    name: 'supra',
    nameEn: 'supra',
  },
  {
    value: 6,
    label: 'ultra',
    name: 'ultra',
    nameEn: 'ultra',
  },
  {
    value: 7,
    label: 'panamax',
    name: 'panamax',
    nameEn: 'panamax',
  },
  {
    value: 8,
    label: 'kamsarmax',
    name: 'kamsarmax',
    nameEn: 'kamsarmax',
  },
  {
    value: 9,
    label: 'fio',
    name: 'fio',
    nameEn: 'fio',
  },
  {
    value: 10,
    label: 'filo',
    name: 'filo',
    nameEn: 'filo',
  },
  {
    value: 11,
    label: 'fiost',
    name: 'fiost',
    nameEn: 'fiost',
  },
]

/**  计量单位;Unit */
export const UNIT_ARRAY = [
  {
    value: 1,
    label: '吨',
    name: '吨',
    nameEn: 'Ton',
  },
  {
    value: 2,
    label: '柜',
    name: '柜',
    nameEn: 'Container',
  },
]

/**  文件标签类型 */
export const FILE_TAG_TYPE_ARRAY = [
  {
    value: 1,
    label: '应计结算附件',
    name: '应计结算附件',
    nameEn: 'Settle Account',
  },
]

/**  附件检查结果 */
export const FILE_CHECK_STATUS_ARRAY = [
  {
    value: 1,
    label: '未检查',
    name: '未检查',
    nameEn: 'file not checked',
  },
  {
    value: 2,
    label: '附件合格',
    name: '附件合格',
    nameEn: 'file qualified',
  },
  {
    value: 3,
    label: '缺少附件',
    name: '缺少附件',
    nameEn: 'file lack',
  },
  {
    value: 4,
    label: '附件不合格',
    name: '附件不合格',
    nameEn: 'file not qualified',
  },
  {
    value: 5,
    label: '执行已修改',
    name: '执行已修改',
    nameEn: 'repair',
  },
]

/**  原地货转审批状态 */
export const TRANSFER_APPROVAL_STATUS_ARRAY = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待审批',
    name: '待审批',
    nameEn: 'Approved pending',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '驳回',
    name: '驳回',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
  {
    value: 6,
    label: '退回中',
    name: '退回中',
    nameEn: 'In Rollback Approved',
  },
]

/**  货物来源类型;Cargo origin type */
export const CARGO_ORIGIN_TYPE_ARRAY = [
  {
    value: 1,
    label: '交付',
    name: '交付',
    nameEn: 'Delivery',
  },
  {
    value: 2,
    label: '调拨',
    name: '调拨',
    nameEn: 'Allocation',
  },
  {
    value: 3,
    label: '损益',
    name: '损益',
    nameEn: 'Adjustment',
  },
]

/**  订单列表物流状态 */
export const ORDER_LOGISTICS_INSTRUCTION_STATUS_ARRAY = [
  {
    value: 1,
    label: '无',
    name: '无',
    nameEn: 'None',
  },
  {
    value: 2,
    label: '有草本',
    name: '有草本',
    nameEn: 'Draft',
  },
  {
    value: 3,
    label: '激活完毕',
    name: '激活完毕',
    nameEn: 'Active',
  },
  {
    value: 4,
    label: '接收完毕',
    name: '接收完毕',
    nameEn: 'Receive',
  },
  {
    value: 5,
    label: '执行中',
    name: '执行中',
    nameEn: 'Executing',
  },
  {
    value: 6,
    label: '执行完毕',
    name: '执行完毕',
    nameEn: 'Completed',
  },
]

/**  记账状态 */
export const ACCOUNTING_STATUS_ARRAY = [
  {
    value: 1,
    label: '未记账',
    name: '未记账',
    nameEn: 'Unbooked',
  },
  {
    value: 2,
    label: '已记账',
    name: '已记账',
    nameEn: 'Booked',
  },
  {
    value: 3,
    label: '撤回修改中',
    name: '撤回修改中',
    nameEn: 'Withdraw',
  },
]

/**  产量申报审批状态 */
export const PRODUCTION_REPORT_APPROVAL_STATUS_ENUM = [
  {
    value: 1,
    label: '草本',
    name: '草本',
    nameEn: 'Draft',
  },
  {
    value: 2,
    label: '待审批',
    name: '待审批',
    nameEn: 'pending',
  },
  {
    value: 3,
    label: '审批中',
    name: '审批中',
    nameEn: 'In approved',
  },
  {
    value: 4,
    label: '不通过',
    name: '不通过',
    nameEn: 'Approval rejected',
  },
  {
    value: 5,
    label: '通过',
    name: '通过',
    nameEn: 'Approved',
  },
  {
    value: 6,
    label: '回退中',
    name: '回退中',
    nameEn: 'Approval RollBack',
  },
]

/**  库存锁定类型枚举 */
export const INVENTORY_LOCK_TYPE_ENUM = [
  {
    value: 1,
    label: '产量申报',
    name: '产量申报',
    nameEn: 'production report',
  },
]

/**  借调类型 */
export const MATERIAL_LOAN_ARRAY = [
  {
    value: 1,
    label: '非借调',
    name: '非借调',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '借入',
    name: '借入',
    nameEn: 'Borrow',
  },
  {
    value: 3,
    label: '借出',
    name: '借出',
    nameEn: 'Loan',
  },
]

/**  货物借调条件类型 */
export const MATERIAL_LOAN_CONDITION_ARRAY = [
  {
    value: 1,
    label: '船名航次',
    name: '船名航次',
    nameEn: 'Ship Name',
  },
  {
    value: 2,
    label: '采购订单',
    name: '采购订单',
    nameEn: 'Purchase Order',
  },
]

/**  货物借调场景 */
export const MATERIAL_LOAN_SCENE_ARRAY = [
  {
    value: 1,
    label: '置换协议',
    name: '置换协议',
    nameEn: '置换协议',
  },
  {
    value: 2,
    label: '港口代理借货',
    name: '港口代理借货',
    nameEn: '港口代理借货',
  },
  {
    value: 3,
    label: 'Total货物借调',
    name: 'Total货物借调',
    nameEn: 'Total货物借调',
  },
  {
    value: 4,
    label: '出口融资借货',
    name: '出口融资借货',
    nameEn: '出口融资借货',
  },
]

/**  货物借调状态 */
export const MATERIAL_LOAN_STATUS_ARRAY = [
  {
    value: 1,
    label: '待签订',
    name: '待签订',
    nameEn: 'To be signed',
  },
  {
    value: 2,
    label: '我司已签',
    name: '我司已签',
    nameEn: 'Our company has signed',
  },
  {
    value: 13,
    label: '对方已签',
    name: '对方已签',
    nameEn: 'The other party has signed',
  },
  {
    value: 3,
    label: '已双签',
    name: '已双签',
    nameEn: 'Double signed',
  },
  {
    value: 15,
    label: '转为订单',
    name: '转为订单',
    nameEn: 'Convert to order',
  },
]

/**  物流结算数量依据 */
export const LOGISTICS_SETTLEMENT_BASIS_ARRAY = [
  {
    value: 1,
    label: '出发',
    name: '出发',
    nameEn: 'Departure',
  },
  {
    value: 2,
    label: '到达',
    name: '到达',
    nameEn: 'Arrive',
  },
]

/**  是否最终结算 */
export const SETTLEMENT_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '暂定结算',
    name: '暂定结算',
    nameEn: 'Provisional',
  },
  {
    value: 2,
    label: '最终结算',
    name: '最终结算',
    nameEn: 'Final',
  },
]

/**  结算行类型 */
export const SETTLE_ACCOUNTS_CATEGORY_ARRAY = [
  {
    value: 1,
    label: '主结算行',
    name: '主结算行',
    nameEn: 'Main Settlement',
  },
  {
    value: 2,
    label: '其他结算行',
    name: '其他结算行',
    nameEn: 'Other Settlement',
  },
  {
    value: 3,
    label: '主结算行调整行',
    name: '主结算行调整行',
    nameEn: 'Main Settlement Adjust',
  },
  {
    value: 4,
    label: '其他结算项调整行',
    name: '其他结算项调整行',
    nameEn: 'Other Settlement Adjust',
  },
]

/**  调增/调减 */
export const SETTLE_ADJUST_TYPE_ARRAY = [
  {
    value: 1,
    label: '调增',
    name: '调增',
    nameEn: 'Increase',
  },
  {
    value: 2,
    label: '调减',
    name: '调减',
    nameEn: 'Reduce',
  },
]

/**  结算项场景 */
export const SETTLEMENT_ITEM_SCENE_ARRAY = [
  {
    value: 1,
    label: '货物订单',
    name: '货物订单',
    nameEn: 'Order',
  },
  {
    value: 2,
    label: '加工服务',
    name: '加工服务',
    nameEn: 'Processing',
  },
  {
    value: 4,
    label: '物流服务',
    name: '物流服务',
    nameEn: 'Logistics',
  },
  {
    value: 8,
    label: '海运服务',
    name: '海运服务',
    nameEn: 'Shipping',
  },
  {
    value: 16,
    label: '其他服务',
    name: '其他服务',
    nameEn: 'Other Service',
  },
]

/**  结算货物关系结算状态 */
export const SETTLE_BASIS_STATUS_ARRAY = [
  {
    value: 1,
    label: '未结算',
    name: '未结算',
    nameEn: 'Unsettled',
  },
  {
    value: 2,
    label: '部分结算',
    name: '部分结算',
    nameEn: 'Settling',
  },
  {
    value: 3,
    label: '最终结算',
    name: '最终结算',
    nameEn: 'Final',
  },
]

/**  结算调整类型 */
export const SETTLEMENT_ADJUST_TYPE_ARRAY = [
  {
    value: 1,
    label: '调整数量',
    name: '调整数量',
    nameEn: 'Adjust Quantity',
  },
  {
    value: 2,
    label: '调整单价',
    name: '调整单价',
    nameEn: 'Adjust Price',
  },
  {
    value: 3,
    label: '调整金额',
    name: '调整金额',
    nameEn: 'Adjust Amount',
  },
  {
    value: 4,
    label: '调整税额',
    name: '调整税额',
    nameEn: 'Adjust Tax Amount',
  },
]

/**   */
export const GENERATION_SCENARIO_ARRAY = [
  {
    value: 1,
    label: '手动录入',
    name: '手动录入',
    nameEn: 'Manual_Input',
  },
  {
    value: 2,
    label: '物流信息生成',
    name: '物流信息生成',
    nameEn: 'Logistics_Info_Generation',
  },
  {
    value: 3,
    label: '加工',
    name: '加工',
    nameEn: 'Method_Processing',
  },
  {
    value: 4,
    label: '装船',
    name: '装船',
    nameEn: 'Ship_Load_Board',
  },
  {
    value: 5,
    label: '原地货转',
    name: '原地货转',
    nameEn: 'Freight_Transfer',
  },
]
