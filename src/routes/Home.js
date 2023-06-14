import React from 'react';
import Books from '../components/Books';
import BookForm from '../components/BookForm';
import allBooks from '../allBooks';
import styles from '../styles/Home.module.css';

const Home = () => {
  const booksList = allBooks;

  return (
    <div className={styles.home}>
      <Books booksList={booksList} />
      <hr />
      <BookForm />
    </div>
  );
};

export default Home;
