import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook, fetchBooks } from '../redux/books/booksSlice';
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

  const handledispatch = async (e) => {
    e.preventDefault();
    const bookInfo = [book.title, book.author, book.category];
    if (bookInfo[0] !== '' || bookInfo[1] !== '' || bookInfo[2] !== '') {
      try {
        await dispatch(addNewBook(bookInfo));
        dispatch(fetchBooks());
        setBook({ title: '', author: '' });
      } catch (error) {
        console.log(error);
      }
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
