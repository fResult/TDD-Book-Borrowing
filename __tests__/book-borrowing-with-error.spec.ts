import { describe, expect, it } from "vitest"

type Book = string

function borrowBook(bookCollection: Book[], bookToBorrow: Book): Book[] {
  return ["The elements of Programming Style"]
}

describe("Borrow book success", () => {
  it("should return the list [\"The elements of Programming Style\"] when borrow the 'CLRS'", () => {
    expect(borrowBook(["CLRS", "The Elements of Programming Style"], "CLRS")).toEqual([
      "The Elements of Programming Style",
    ])
  })

  it("should return the list [\"CLRS\"] when borrow the 'The Elements of Programming Style'", () => {
    expect(borrowBook(["CLRS", "The Elements of Programming Style"], "The Elements of Programming Style")).toEqual(["CLRS"])
  })
})
