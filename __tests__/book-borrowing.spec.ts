import { describe, it, expect } from "vitest"
import { IBookStock, borrowBook } from "../src/book-borrowing"

const bookCollection: IBookStock[] = [
  { title: "CLRS", amount: 2 },
  { title: "The Elements of Programming Style", amount: 3 },
  { title: "How to Design Program", amount: 0 },
]

describe("Borrow book `success` as true", () => {
  it("should return success=true and remaining book collection", () => {
    expect(borrowBook(bookCollection, "CLRS")).toEqual({
      success: true,
      remainingBooks: [
        { title: "CLRS", amount: 1 },
        { title: "The Elements of Programming Style", amount: 3 },
        { title: "How to Design Program", amount: 0 },
      ],
    })
  })
})

describe("Borrow book `success` as false", () => {
  it("should return success=false and original book collection with a reason when book is not exist in the store", () => {
    const bookToBorrow = "other book"

    expect(borrowBook(bookCollection, bookToBorrow)).toEqual({
      success: false,
      reason: `There is no book [${bookToBorrow}] in this store`,
      remainingBooks: bookCollection,
    })
  })

  it("should return success=false and original book collection with a reason when book is out of stock", () => {
    const bookToBorrow = "How to Design Program"

    expect(borrowBook(bookCollection, bookToBorrow)).toEqual({
      success: false,
      reason: `The book [${bookToBorrow}] is out of stock`,
      remainingBooks: bookCollection,
    })
  })
})
