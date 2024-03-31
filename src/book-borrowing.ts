export function borrowBook(bookCollection: string[], bookToBorrow: string) {
  const foundBook = bookCollection.find((book) => bookToBorrow === book)

  if (!foundBook)
    return {
      success: false,
      reason: `There is no book [${bookToBorrow}] in this store`,
      remainingBooks: bookCollection,
    }

  return {
    success: true,
    remainingBooks: bookCollection.filter((book) => bookToBorrow !== book),
  }
}
