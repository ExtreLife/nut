/**
 * 过滤数组中的假值
 * @param array 原数组
 * @returns 
 */
export function compact(array: any[]): any[] {
  return array.filter(item => item)
}
