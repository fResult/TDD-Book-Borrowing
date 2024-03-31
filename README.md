# TDD Book Store

Practice to TDD mindset

## Requirements

- [x] 1) It should return **remaining books** if the book to borrow is existed in the store
- [x] 2) It should return the `success` as false and **original book collection** when borrow the book which isn't existed in the book store
- [x] 3) In addition to the behavior described in requirement 1, it should also return a `success` as true
- [x] 4) In addition to the behavior described in requirement 2, it should also return the `reason` as "There is no book [«book_name»] in this store"
- [ ] 5) In addition to the behavior described in requirement 3, it should also return `amount` as original amount - 1
- [ ] 6) In addition to the behavior described in requirement 2, it should also return original `amount`
