import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import '../App.css';

const Books = ({ booksList }) => {
  const list = booksList.map((book, key) => (
    <Book booksListObj={book} key={key} />
  ));
  return (
    <div className="booksCont">
      {list}
    </div>
  );
};

Books.propTypes = {
  booksList: PropTypes.array.isRequired,
};

export default Books;
