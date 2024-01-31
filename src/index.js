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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Books {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    alert("Input is pressed");
  };
  const handleButtonClick = () => {
    alert("Button is clicked.");
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
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
