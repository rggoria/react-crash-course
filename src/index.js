import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/91jbHTNpy6L._AC_UL600_SR600,400_.jpg"
    alt="House of Flame and Shadow"
  />
);
const Title = () => <h2>House of Flame and Shadow</h2>;
const Author = () => <h4>Sarah J. Maas</h4>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
