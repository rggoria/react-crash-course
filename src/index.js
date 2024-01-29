import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import book1 from "./assets/images/book-1.jpg";

// Reference Link:
// https://www.amazon.com/Best-Sellers-Books/zgbs/books

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
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <div>
    {/* file from public folder */}
    <img src="./images/book-1.jpg" alt="House of Flame and Shadow" />
    {/* file from public folder */}
    <img src={book1} alt="House of Flame and Shadow" />
  </div>
);
const Title = () => <h2>House of Flame and Shadow</h2>;
const Author = () => <h4>Sarah J. Maas</h4>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
