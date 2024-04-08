export interface IBookStock {
  title: string
  amount: number
}

export class BookNotFoundError extends Error {
  constructor(message: string) {
    super(message)
  }

  get name(): string {
    return this.constructor.name
  }
}


export function borrowBook(bookCollection: IBookStock[], bookToBorrow: string): IBookStock[] {
  const foundBook = bookCollection.find((book) => bookToBorrow === book.title)
  if (!foundBook) throw new BookNotFoundError(`There is no book [${bookToBorrow}] in this store`)

  return bookCollection.map((book) =>
    bookToBorrow !== book.title ? book : { ...book, amount: book.amount - 1 }
  )
}
