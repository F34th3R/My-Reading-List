import React from 'react'
import { useBookValues } from '../context/BookContext'

export const Navbar = () => {
  const { books } = useBookValues()
  return (
    <div className="navbar">
      <h1>Feather Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}
