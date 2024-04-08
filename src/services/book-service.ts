import { IBookStock } from "../@types/book-stock"

export function updateBookAmountIfBookExist(bookToBorrow: string) {
  return function forBookAmount(bookStock: IBookStock): IBookStock {
    return bookToBorrow === bookStock.title ?
      { ...bookStock, amount: bookStock.amount - 1 }
      : bookStock
  }
}
