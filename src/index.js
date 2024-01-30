import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Reference Link:
// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const firstBook = {
  title: "House of Flame and Shadow",
  author: "Sarah J. Maas",
  img: "./images/book-1.jpg",
};

const secondBook = {
  title: "Atomic Habits",
  author: "James Clear",
  img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY342_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Books
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Books
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
};

const Books = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
