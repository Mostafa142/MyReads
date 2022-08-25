import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
  const Section = props.shelfTitle;
  const books = props.books;
  const category = props.category;
  const booksCategory = books.filter((book) => book.shelf === category);
  const changeShelf = props.changeShelf;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{Section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {/* BOOK */}
          {booksCategory.map((book) => {
            return <Book book={book} key={book.id} changeShelf={changeShelf} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
