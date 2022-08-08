/**
 * 生成给定范围的随机数
 * @param lower 下边界值，包含此值
 * @param upper 上边界值，不包含此值
 * @param floating 是否允许为浮点数
 * @returns 
 */
export function random(lower: number = 0, upper: number = 1, floating: boolean = true): number {
  if (lower >= upper)
    throw '[argument:lower] must be less than [argument:upper]'
  return floating
    ? lower + (upper - lower) * Math.random()
    : Math.floor(lower + (upper - lower) * Math.random())
}