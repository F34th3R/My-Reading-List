import React from 'react'
import { useBookValues } from '../context/BookContext'

export const BookDetail = ({ book }) => {
  const { booksDispatch } = useBookValues()
  return (
    <li onClick={() => booksDispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  )
}
