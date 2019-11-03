import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [books, booksDispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, booksDispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookValues = () => useContext(BookContext)
