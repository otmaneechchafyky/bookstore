import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import styles from '../styles/BookForm.module.css';

const BookForm = () => {
  const categories = ['Action', 'ScienceFiction', 'Maths', 'Economy'];
  const dispatch = useDispatch();

  const categoryOptions = categories.map((category, key) => (
    <option value={category} key={key}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handledispatch = (e) => {
    e.preventDefault();
    const info = [book.title, book.author];
    if (info[0] !== '' || info[1] !== '') {
      dispatch(addBook(info));
      book.title = '';
      book.author = '';
    }
  };
  return (
    <div className={styles.formContainer}>
      <p className={styles.formTitle}>ADD NEW BOOK</p>
      <form className={styles.form}>
        <input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="author"
          value={book.author}
          placeholder="Book author"
          onChange={handleChange}
          className={styles.input}
        />
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="" disabled>
            Category
          </option>
          {categoryOptions}
        </select>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={handledispatch}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
