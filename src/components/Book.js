import React from "react";
const Book = (props) => {
  const {book} = props;
  const {shelf} = props.book;
  const shelves = [
    {
      id: "1",
      shelfName: "currentlyReading",
      shelfDisplayName: "Currently Reading",
    },
    { id: "2", shelfName: "wantToRead", shelfDisplayName: "want To Read" },
    { id: "3", shelfName: "read", shelfDisplayName: "Read" },
    { id: "4", shelfName: "none", shelfDisplayName: "None" },
  ];
  const updateShelf = (e) => {
    props.changeShelf(book, e.target.value);
  };
  console.log(book);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.smallThumbnail})`
                : `url('https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={updateShelf} value={shelf ? shelf : "none"}>
              <option value="none" disabled>
                Move to...
              </option>
              {shelves.map(({id,shelfName,shelfDisplayName}) => {
                return <option key={id} value={shelfName}>{shelfDisplayName}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;
