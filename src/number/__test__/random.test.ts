import type * as Random from "../random"
const { random } = jest.requireActual<typeof Random>("../random")

describe("number.random: throw error", () => {
  test("when lower is greater than upper or equal to upper", () => {
    expect(() => random(5, 1)).toThrow()
    expect(() => random(1, 1)).toThrow()
  })
})

describe("number.random: functional test", () => {
  test("default argument", () => {
    const result = random()
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(1)
  })

  test("the result is between lower and upper", () => {
    const result = random(0, 1)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(1)
  })

  test("argument floating", () => {
    expect(random(0, 1, false)).toBe(0)
    expect(random(0.5, 1, false)).toBe(0)
    expect(random(1.75, 1.76, true)).toBeCloseTo(1.75, 0.01)
  })
})