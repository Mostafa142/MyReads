import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
const Home = (props) => {
  const books = props.booksList;
  const changeShelf = props.changeShelf;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {/* BOOK SHELF  */}
          <BookShelf
            shelfTitle="Currently Reading"
            books={books}
            category="currentlyReading"
            changeShelf={changeShelf}
          />
          <BookShelf
            shelfTitle="Want to Read"
            books={books}
            category="wantToRead"
            changeShelf={changeShelf}
          />
          <BookShelf
            shelfTitle="Read"
            books={books}
            category="read"
            changeShelf={changeShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
