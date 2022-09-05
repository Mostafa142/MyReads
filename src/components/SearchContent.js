import React from "react";
import Book from "./Book";

const SearchContent = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.searchBooks.map((book) => {
          const foundShelf = props.booksList.filter(
            (searchBook) => searchBook.id === book.id
          );
          if (foundShelf[0]) {
            book.shelf = foundShelf[0].shelf;
          } else {
            book.shelf = "none";
          }
          return (
            <Book book={book} key={book.id} changeShelf={props.changeShelf} />
          );
        })}
      </ol>
    </div>
  );
};

export default SearchContent;
