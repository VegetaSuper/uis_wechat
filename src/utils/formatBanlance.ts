export function formatBalance(num: number) {
  // 先转换为字符串处理，避免浮点数精度问题
  const str = num.toString();
  let [integerPart, decimalPart] = str.split('.');

  // 处理没有小数部分的情况
  if (!decimalPart) {
    return `${integerPart}.00`;
  }

  // 处理小数部分，只取前两位，不足补0
  decimalPart = decimalPart.padEnd(2, '0').slice(0, 2);

  return `${integerPart}.${decimalPart}`;
}
