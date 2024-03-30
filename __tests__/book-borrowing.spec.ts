import { describe, it, expect } from "vitest"

const bookCollection: string[] = ["CLRS", "Element of Programming Style"]

function borrowBook(bookCollection: string[], bookToBorrow: string) {
  const foundBook = bookCollection.find((book) => bookToBorrow === book)

  if (!foundBook) return {
    success: false,
    reason: `There is no book [${bookToBorrow}] in the store`,
    remainingBooks: bookCollection,
  }

  return {
    success: true,
    remainingBooks: bookCollection.filter((book) => bookToBorrow !== book),
  }
}

describe("Book borrowing", () => {
  it("should return success=true and remaining book collection", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual({
      success: true,
      remainingBooks: ["Element of Programming Style"],
    })
  })

  it("should return success=false and original book collection with a reason", () => {
    expect(borrowBook(bookCollection, "other book")).toEqual({
      success: false,
      reason: "There is no book [other book] in the store",
      remainingBooks: bookCollection,
    })
  })
})
