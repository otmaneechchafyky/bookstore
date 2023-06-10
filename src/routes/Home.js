import React from 'react';
import Books from '../components/Books';
import BookForm from '../components/BookForm';
import styles from '../styles/Home.module.css';

const Home = () => {
  const booksList = [
    {
      id: 1,
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      completed: 50,
      chapter: 'chapter 2',
    },
    {
      id: 2,
      title: 'Dune',
      category: 'ScienceFiction',
      author: 'FrankHerbert',
      completed: 90,
      chapter: 'chapter 17',
    },
    {
      id: 3,
      title: 'CapitalintheTwenty-FirstCentury',
      category: 'Economy',
      author: 'Otmane Echch',
      completed: 99,
      chapter: 'Introduction',
    },
    {
      id: 4,
      title: 'Interstellar',
      category: 'ScienceFiction',
      author: 'hrisopher Nolan',
      completed: 100,
      chapter: 'chapter 7',
    },
  ];
  return (
    <div className={styles.home}>
      <Books booksList={booksList} />
      <hr />
      <BookForm />
    </div>
  );
};

export default Home;
