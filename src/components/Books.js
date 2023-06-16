import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookForm from './BookForm';
import Book from './Book';
import '../App.css';

const Books = () => {
  const booksList = useSelector((store) => store.books.booksList);
  const loading = useSelector((store) => store.books.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div className="loading-container"><div className="loading" /></div>;
  }

  const booksArr = Object.entries(booksList).map(([key, value]) => ({
    item_id: key,
    ...value[0],
  }));

  const list = booksArr.map((book, key) => (
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
