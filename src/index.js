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
  <div>
    <img src="./images/book-1.jpg" alt="House of Flame and Shadow" />
  </div>
);
const Title = () => <h2>House of Flame and Shadow</h2>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    Sarah J. Maas
  </h4>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
