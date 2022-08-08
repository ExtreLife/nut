import type * as Chunk from "../chunk"
const { chunk } = jest.requireActual<typeof Chunk>("../chunk")

describe("array.chunk: throw error", () => {
  test("when size is less than zero", () => {
    expect(() => chunk([], -1)).toThrow("[argument:size] must be a positive")
    expect(() => chunk([], 0)).toThrow("[argument:size] must be a positive")
  })
})

describe("array.chunk: functional test", () => {
  test("general test", () => {
    const result = chunk([1, 2, 3, 4, 5], 1)
    const resultLength = result.length
    expect(result).toEqual([[1], [2], [3], [4], [5]])
    expect(resultLength).toBe(5)
  })

  test("when array can not be divided uniformly", () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]])
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  test("when [argument:size] is greater than [argument:array]'s length", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]])
  })

  test("when [argument:array] is an empty array", () => {
    expect(chunk([], 5)).toEqual([])
    expect(chunk([], 5).length).toBe(0)
  })
})