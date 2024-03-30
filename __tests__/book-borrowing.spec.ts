import { describe, it, expect } from "vitest"

const bookCollection: string[] = ["CLRS", "Element of Programming Style"]

function borrowBook(bookCollection: string[], bookToBorrow: string) {
  const foundBook = bookCollection.find(book => bookToBorrow === book)

  return {
    success: foundBook !== undefined,
    remainingBooks: bookCollection.filter((book) => bookToBorrow !== book)
  }
}

describe("Book borrowing", () => {
  it("should return success=true and remaining book collection", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual({
      success: true,
      remainingBooks: ["Element of Programming Style"],
    })
  })

  it("should be success=false and original book collection", () => {
    expect(borrowBook(bookCollection, "other book")).toEqual({
      success: false,
      remainingBooks: bookCollection,
    })
  })
})
