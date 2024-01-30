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
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY342_.jpg",
  },
];

const names = ["ram", "clifford", "adrian"];
const newNames = names.map((name, key) => {
  console.log(name);
  return <h1 key={key}>{name}</h1>;
});

const BookList = () => {
  return <section className="booklist">{newNames}</section>;
};

const Books = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
