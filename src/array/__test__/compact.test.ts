import type * as Compact from "../compact"
const { compact } = jest.requireActual<typeof Compact>("../compact")

describe("array.compact: functional test", () => {
  test("when [argument:array] is an empty array", () => {
    expect(compact([])).toEqual([])
    expect(compact([]).length).toBe(0)
  })

  test("general test", () => {
    expect(compact([1, '', 0, false, undefined, null, NaN, {}, []])).toEqual([1, {}, []])
  })
})