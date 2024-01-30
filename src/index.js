import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Reference Link:
// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const title = "House of Flame and Shadow";
const author = "Sarah J. Maas";
const img = "./images/book-1.jpg";

const someFunc = (param1, param2) => {
  console.log(param1, param2);
};

someFunc("Hello", "Ma!");

const BookList = () => {
  return (
    <section className="booklist">
      <Books />
      <Books />
      <Books />
      <Books />
    </section>
  );
};

const Books = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
