/**
 * 将对象序列化为URL查询字符串，用于替代第三方的 qs 库，节省宝贵的体积
 * 支持基本类型值、数组和嵌套对象
 * @param obj 要序列化的对象
 * @param prefix 键前缀，用于处理嵌套对象
 * @returns 序列化后的查询字符串
 */
export function stringifyQuery(obj: Record<string, any>, prefix?: string): string {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return '';

  const pairs: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    // 跳过 undefined 和 null 值
    if (value === undefined || value === null) continue;

    // 构造键名
    const encodedKey = prefix ? `${prefix}[${encodeURIComponent(key)}]` : encodeURIComponent(key);

    // 处理嵌套对象
    if (typeof value === 'object' && !Array.isArray(value)) {
      pairs.push(stringifyQuery(value, encodedKey));
    }
    // 处理数组类型
    else if (Array.isArray(value)) {
      const arrayPairs = value
        .filter((item) => item !== undefined && item !== null)
        .map((item) => `${encodedKey}=${encodeURIComponent(item)}`)
        .join('&');
      pairs.push(arrayPairs);
    }
    // 处理基本类型
    else {
      pairs.push(`${encodedKey}=${encodeURIComponent(value)}`);
    }
  }

  return pairs.join('&');
}
