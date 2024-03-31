interface IBookStock {
  title: string;
  amount: number;
}

export function borrowBook(bookCollection: IBookStock[], bookToBorrow: string) {
  const foundBook = bookCollection.find((book) => bookToBorrow === book.title)

  if (!foundBook)
    return {
      success: false,
      reason: `There is no book [${bookToBorrow}] in this store`,
      remainingBooks: bookCollection,
    }

  return {
    success: true,
    remainingBooks: bookCollection.map(updateBookAmountIfBookExist(bookToBorrow)),
  }
}

function updateBookAmountIfBookExist(bookToBorrow: string) {
  return function forBookAmount(bookStock: IBookStock): IBookStock {
    return bookToBorrow === bookStock.title ?
      { ...bookStock, amount: bookStock.amount - 1 }
      : bookStock
  }
}
