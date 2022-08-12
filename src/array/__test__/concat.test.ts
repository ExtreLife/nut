import * as Concat from "../concat"
const { concat } = jest.requireActual<typeof Concat>("../concat")

describe("array.concat: functional test", () => {
  test("general test", () => {
    expect(concat([1, 2], 3, 4, 5, [6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(concat([1, 2], 3, 4, 5, [6, 7, 8]).length).toBe(8)
    expect(concat([1, 2], [[1, 2, 3]])).toEqual([1, 2, [1, 2, 3]])
    expect(concat([1, 2], [[1, 2, 3]]).length).toBe(3)
  })

  test("when concat empty array", () => {
    expect(concat([], [])).toEqual([])
    expect(concat([], []).length).toBe(0)
  })

  test("when concat undefined or null data", () => {
    const result = concat([1, 2], undefined, null, [undefined])
    expect(result.length).toBe(5)
    expect(result[2]).toBeUndefined()
    expect(result[4]).toBeUndefined()
    expect(result[3]).toBeNull()

  })
})