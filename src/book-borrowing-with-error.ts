import { BookNotFoundError } from "./errors/book-not-found-error"
import { BookOutOfStockError } from "./errors/book-out-of-stock-error"

export interface IBookStock {
  title: string
  amount: number
}

export function borrowBook(bookCollection: IBookStock[], bookToBorrow: string): IBookStock[] {
  const foundBook = bookCollection.find((book) => bookToBorrow === book.title)

  if (!foundBook) throw new BookNotFoundError(`There is no book [${bookToBorrow}] in this store`)
  if (foundBook.amount === 0)
    throw new BookOutOfStockError(`The book [${bookToBorrow}] is out of stock`)

  return bookCollection.map((book) =>
    bookToBorrow !== book.title ? book : { ...book, amount: book.amount - 1 }
  )
}
