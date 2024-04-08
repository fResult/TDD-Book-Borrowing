import { describe, expect, it } from "vitest"

import { IBookStock } from "../src/@types/book-stock"
import { borrowBook } from "../src/book-borrowing-with-error"
import { BookNotFoundError } from "../src/errors/book-not-found-error"
import { BookOutOfStockError } from "../src/errors/book-out-of-stock-error"

const booksInStore: IBookStock[] = [
  { title: "CLRS", amount: 2 },
  { title: "The Elements of Programming Style", amount: 3 },
  { title: "How to Design Program", amount: 0 },
]

describe("Borrow book success", () => {
  it("should return the remaining books in the collection when borrow the 'CLRS'", () => {
    const actual = borrowBook(booksInStore, "CLRS")
    const expectedResult = [
      { title: "CLRS", amount: 1 },
      { title: "The Elements of Programming Style", amount: 3 },
      { title: "How to Design Program", amount: 0 },
    ]

    expect(actual).toEqual(expectedResult)
  })

  it('should return the remaining books in the collection when borrow the "The Elements of Programming Style"', () => {
    const actual = borrowBook(booksInStore, "The Elements of Programming Style")
    const expectedResult = [
      { title: "CLRS", amount: 2 },
      { title: "The Elements of Programming Style", amount: 2 },
      { title: "How to Design Program", amount: 0 },
    ]

    expect(actual).toEqual(expectedResult)
  })
})

describe("Borrow book fail with some reasons", () => {
  it('should throw a `BookNotFoundError` with the message "There is no book [Other Book] in this store"', () => {
    // TODO: The `borrowBook` function is called 2 times, make it is called only 1 time
    const actual = () => borrowBook(booksInStore, "Other Book")

    expect(actual).toThrow(BookNotFoundError)
    expect(actual).toThrow("There is no book [Other Book] in this store")
  })

  it('should throw a `BookOutOfStockError` with the message "The book [How to Design Program] is out of stock"', () => {
    // TODO: The `borrowBook` function is called 2 times, make it is called only 1 time
    const actual = () => borrowBook(booksInStore, "How to Design Program")

    expect(actual).toThrow(BookOutOfStockError)
    expect(actual).toThrow("The book [How to Design Program] is out of stock")
  })
})
