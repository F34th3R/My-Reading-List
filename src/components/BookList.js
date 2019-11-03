import React from 'react'
import { useBookValues } from '../context/BookContext'

import { BookDetail } from './BookDetail'

export const BookList = () => {
  const { books } = useBookValues()

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <BookDetail key={book.id} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :D</div>
  )
}
