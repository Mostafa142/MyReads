import React from "react";
import { Link } from "react-router-dom";
import SearchContent from "../components/SearchContent";

const Search = (props) => {
  const changeShelf = props.changeShelf;
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={props.value}
            onChange={props.handleSearch}
          />
        </div>
      </div>
      <SearchContent searchBooks={props.searchBooks} changeShelf={changeShelf}/>
    </div>
  );
};

export default Search;
