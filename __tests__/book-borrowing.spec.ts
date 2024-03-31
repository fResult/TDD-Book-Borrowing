import { describe, it, expect } from "vitest"
import { borrowBook } from "../src/book-borrowing"

const bookCollection: { title: string; amount: number }[] = [
  { title: "CLRS", amount: 2 },
  { title: "Element of Programming Styles", amount: 3 },
]

describe("Book borrowing", () => {
  it("should return success=true and remaining book collection", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual({
      success: true,
      remainingBooks: [
        { title: "CLRS", amount: 1 },
        { title: "Element of Programming Styles", amount: 3 },
      ],
    })
  })

  it("should return success=false and original book collection with a reason", () => {
    const bookToBorrow = "other book"

    expect(borrowBook(bookCollection, bookToBorrow)).toEqual({
      success: false,
      reason: `There is no book [${bookToBorrow}] in this store`,
      remainingBooks: bookCollection,
    })
  })
})
