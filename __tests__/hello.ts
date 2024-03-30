import {describe, expect, it} from 'vitest'
describe("1st describe", () => {
  it("should be 'hello'", () => {
    expect(() => "hello").toEqual("hello")
  })
})
