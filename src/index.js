import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Reference Link:
// https://www.amazon.com/Best-Sellers-Books/zgbs/books

const books = [
  {
    title: "House of Flame and Shadow",
    author: "Sarah J. Maas",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY342_.jpg",
    id: 2,
  },
];

const BookList = () => {
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Books {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
};

const Books = (props) => {
  const { img, title, author, displayValue } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click Me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
