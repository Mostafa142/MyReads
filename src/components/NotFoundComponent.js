import React from "react";
import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <section className="not-found">
        <h2>Sorry, We can not find The page!</h2>
        <Link to="/">Back to The Home Page</Link>
      </section>
    </div>
  );
};

export default NotFoundComponent;
