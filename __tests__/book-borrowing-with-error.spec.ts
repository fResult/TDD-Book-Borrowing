import { describe, expect, it } from "vitest"

type Book = string

class BookNotFoundError extends Error {
  constructor(message: string) {
    super(message)
  }

  get name(): string {
    return this.constructor.name
  }
}

const booksInStore = ["CLRS", "The Elements of Programming Style"]

function borrowBook(bookCollection: Book[], bookToBorrow: Book): Book[] {
  const foundBook = bookCollection.find((book) => bookToBorrow === book)
  if (!foundBook) throw new BookNotFoundError(`There is no book [${bookToBorrow}] in this store`)

  return bookCollection.filter((book) => bookToBorrow !== book)
}

describe("Borrow book success", () => {
  it("should return the list [\"The elements of Programming Style\"] when borrow the 'CLRS'", () => {
    expect(borrowBook(booksInStore, "CLRS")).toEqual(["The Elements of Programming Style"])
  })

  it("should return the list [\"CLRS\"] when borrow the 'The Elements of Programming Style'", () => {
    expect(borrowBook(booksInStore, "The Elements of Programming Style")).toEqual(["CLRS"])
  })
})

describe("Borrow book fail with some reasons", () => {
  it('should throw a `BookNotFoundError` with message "There is no book [Other Book] in this store"', () => {
    expect(() => borrowBook(booksInStore, "Other Book")).toThrow(BookNotFoundError)
    expect(() => borrowBook(booksInStore, "Other Book")).toThrow("There is no book [Other Book] in this store")
  })
})
