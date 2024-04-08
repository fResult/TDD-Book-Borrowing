import { IBookStock } from "./@types/book-stock";
import { updateBookAmountIfBookExist } from "./services/book-service";

type BookBorrowingStates<Bool extends boolean = boolean> = Bool extends true
  ? {
    success: true;
    remainingBooks: IBookStock[]
  }
  : {
    success: false;
    reason: string;
    remainingBooks: IBookStock[];
  }

export function borrowBook(bookCollection: IBookStock[], bookToBorrow: string): BookBorrowingStates {
  const foundBook = bookCollection.find((book) => bookToBorrow === book.title)

  if (!foundBook)
    return {
      success: false,
      reason: `There is no book [${bookToBorrow}] in this store`,
      remainingBooks: bookCollection,
    }

  if (foundBook.amount === 0)
    return {
      success: false,
      reason: `The book [${bookToBorrow}] is out of stock`,
      remainingBooks: bookCollection
    }

  return {
    success: true,
    remainingBooks: bookCollection.map(updateBookAmountIfBookExist(bookToBorrow)),
  }
}
