import React, { useState } from 'react';
import styles from '../styles/BookForm.module.css';

const BookForm = () => {
  const categories = ['Action', 'ScienceFiction', 'Maths', 'Economy'];

  const categoryOptions = categories.map((category, key) => (
    <option value={category} key={key}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
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
        <select name="category" value={book.category} onChange={handleChange} className={styles.select}>
          <option value="" disabled>
            Category
          </option>
          {categoryOptions}
        </select>
        <button type="submit" className={styles.submitButton}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
