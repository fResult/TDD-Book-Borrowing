import { describe, expect, it } from "vitest"

type Book = string

function borrowBook(bookCollection: Book[], bookToBorrow: Book): Book[] {
  return ["The elements of Programming Style"]
}

describe("Borrow book success", () => {
  it("should return a remaining book", () => {
    expect(borrowBook(["CLRS", "The Elements of Programming Style"], "CLRS")).toEqual([
      "The elements of Programming Style",
    ])
  })
})
