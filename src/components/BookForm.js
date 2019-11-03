import React, { useState } from 'react'
import { useBookValues } from '../context/BookContext'

export const BookForm = () => {
  const { booksDispatch } = useBookValues()
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    booksDispatch({ type: 'ADD_BOOK', book: { title, author } })
    setTitle('')
    setAuthor('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="book title"
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        value={author}
        placeholder="book author"
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  )
}
