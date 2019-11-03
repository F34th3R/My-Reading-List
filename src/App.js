import React from 'react'
import { BookProvider } from './context/BookContext'
import { Navbar } from './components/Navbar'
import { BookList } from './components/BookList'
import { BookForm } from './components/BookForm'

export const App = () => {
  return (
    <div className="App">
      <BookProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookProvider>
    </div>
  )
}
