export function chunk(array: any[], size: number): any[] {
  if (size <= 0)
    throw new Error('[argument:size] must be a positive.')
  let result: any[] = [],
    begin: number = 0
  while (begin < array.length) {
    result.push(array.slice(begin, begin += size))
  }
  return result
}