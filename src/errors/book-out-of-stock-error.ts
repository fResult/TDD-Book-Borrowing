export class BookOutOfStockError extends Error {
  constructor(message: string) {
    super(message)
  }

  get name(): string {
    return this.constructor.name
  }
}