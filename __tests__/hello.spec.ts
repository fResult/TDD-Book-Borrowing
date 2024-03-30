import { describe, expect, it } from "vitest"

const hello = () => "hello world"

describe("1st describe", () => {
  it("should be 'hello'", () => {
    expect(hello()).toEqual("hello world")
  })
})
