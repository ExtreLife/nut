/**
 * 将数组拆分为给定尺寸的数组
 * @param array 原数组
 * @param size 尺寸
 * @returns 
 */
export function chunk(array: any[], size: number): any[] {
  if (size <= 0)
    throw new Error('[argument:size] must be a positive')
  let result: any[] = [],
    begin: number = 0
  while (begin < array.length) {
    result.push(array.slice(begin, begin += size))
  }
  return result
}