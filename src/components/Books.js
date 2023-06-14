import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import '../App.css';

const Books = () => {
  const booksList = useSelector((store) => store.books.booksList);

  const list = booksList.map((book, key) => (
    <Book booksListObj={book} key={key} />
  ));
  return (
    <div className="booksCont">
      {list}
      <hr />
      <BookForm />
    </div>
  );
};

export default Books;
