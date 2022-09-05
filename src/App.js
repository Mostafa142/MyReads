import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import NotFoundComponent from "./components/NotFoundComponent";
const App = () => {
  const [booksList, setBooksList] = useState([]);
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((res) => {
      setBooksList(res);
    });
  }, []);

  const changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      setBooksList(res);
    });
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then((res) => {
        if (res.error) {
          console.log(res);
        } else {
          if (isActive) {
            setSearchBooks(res);
            console.log(res);
          }
        }
      });
    }

    return () => {
      isActive = false;
      setSearchBooks([]);
    };
  }, [query]);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Home booksList={booksList} changeShelf={changeShelf} />}
          />
          <Route
            path="/search"
            element={
              <Search
                value={query}
                handleSearch={handleSearch}
                changeShelf={changeShelf}
                searchBooks={searchBooks}
                booksList={booksList}
              />
            }
          />
          <Route path="*" element={<NotFoundComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
