import React from 'react'
import Book from './Book';

const SearchContent = (props) => {
  return (
    <div className="search-books-results">
    <ol className="books-grid">
      {props.searchBooks.map((book) => {
        return <Book book={book} key={book.id} changeShelf={props.changeShelf}/>;
      })}
    </ol>
  </div>
  )
}

export default SearchContent
