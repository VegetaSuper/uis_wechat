import dayjs from 'dayjs';

/**
 * 计算时间间隔并格式化为"xx天xx小时xx分钟"格式
 * @param startTime 开始时间，格式为YYYY-MM-DD HH:mm:ss
 * @param endTime 结束时间，可选，默认为当前时间
 * @returns 格式化的时间间隔字符串
 */
export function formatTimeDuration(startTime: string, endTime?: string): string {
  // 严格校验输入参数
  if (!startTime) {
    return '-';
  }

  // 严格校验时间字符串格式 YYYY-MM-DD HH:mm:ss
  const timeRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;
  if (!timeRegex.test(startTime.trim())) {
    return '';
  }

  // 如果提供了结束时间，也需要校验格式
  if (endTime && (!timeRegex.test(endTime.trim()) || typeof endTime !== 'string')) {
    return '';
  }

  // 使用dayjs解析时间并严格验证
  const start = dayjs(startTime.trim(), 'YYYY-MM-DD HH:mm:ss', true);
  const end = endTime ? dayjs(endTime.trim(), 'YYYY-MM-DD HH:mm:ss', true) : dayjs();

  // 验证dayjs解析是否成功
  if (!start.isValid() || (endTime && !end.isValid())) {
    return '';
  }

  // 计算时间差（毫秒）
  const diff = end.diff(start);

  // 如果时间差为负数，取绝对值
  const absoluteDiff = Math.abs(diff);

  if (absoluteDiff < 0) {
    return '';
  }

  // 计算天、小时、分钟
  const days = Math.floor(absoluteDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absoluteDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((absoluteDiff % (1000 * 60 * 60)) / (1000 * 60));

  // 组装结果字符串
  const parts: string[] = [];

  if (days > 0) {
    parts.push(`${days}天`);
  }
  if (hours > 0) {
    parts.push(`${hours}小时`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}分钟`);
  }

  // 如果所有时间都为0，返回0分钟
  if (parts.length === 0) {
    return '';
  }

  return parts.join('');
}

/**
 * 获取时间段
 * @param day
 * @param format
 * @returns
 */
export function getDateRange(day: number, format: string = 'YYYY-MM-DD HH:mm:ss'): string[] {
  const now = dayjs();

  let startTime, endTime;

  if (day < 0) {
    // 处理负数情况，如昨日(-1)
    startTime = now.subtract(Math.abs(day), 'day').startOf('day').format(format);
    endTime = now.subtract(Math.abs(day), 'day').endOf('day').format(format);
  } else {
    // 处理非负数情况，如近7天(6)
    startTime = now.subtract(day, 'day').startOf('day').format(format);
    endTime = now.endOf('day').format(format);
  }
  return [startTime, endTime];
}
