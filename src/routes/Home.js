import React from 'react';
import Books from '../components/Books';
import styles from '../styles/Home.module.css';

const Home = () =>
  (
    <div className={styles.home}>
      <Books />
    </div>
  );
export default Home;
