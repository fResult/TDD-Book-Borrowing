import { describe, expect, it } from "vitest"

interface IBookStock {
  title: string
  amount: number
}

class BookNotFoundError extends Error {
  constructor(message: string) {
    super(message)
  }

  get name(): string {
    return this.constructor.name
  }
}

const booksInStore = [
  { title: "CLRS", amount: 2 },
  { title: "The Elements of Programming Style", amount: 3 },
]

function borrowBook(bookCollection: IBookStock[], bookToBorrow: string): IBookStock[] {
  const foundBook = bookCollection.find((book) => bookToBorrow === book.title)
  if (!foundBook) throw new BookNotFoundError(`There is no book [${bookToBorrow}] in this store`)

  return bookCollection.map((book) =>
    bookToBorrow !== book.title ? book : { ...book, amount: book.amount - 1 }
  )
}

describe("Borrow book success", () => {
  it("should return the list \"The elements of Programming Style\" with its `amount` as 2 when borrow the 'CLRS'", () => {
    const actual = borrowBook(booksInStore, "CLRS")

    expect(actual).toEqual([
      { title: "CLRS", amount: 1 },
      { title: "The Elements of Programming Style", amount: 3 },
    ])
  })

  it("should return the list [\"CLRS\"] when borrow the 'The Elements of Programming Style'", () => {
    const actual = borrowBook(booksInStore, "The Elements of Programming Style")

    expect(actual).toEqual([
      { title: "CLRS", amount: 2 },
      { title: "The Elements of Programming Style", amount: 2 },
    ])
  })
})

describe("Borrow book fail with some reasons", () => {
  it('should throw a `BookNotFoundError` with message "There is no book [Other Book] in this store"', () => {
    // TODO: The `borrowBook` function is called 2 times, make it is called only 1 time
    const actual = () => borrowBook(booksInStore, "Other Book")

    expect(actual).toThrow(BookNotFoundError)
    expect(actual).toThrowError("There is no book [Other Book] in this store")
  })
})
