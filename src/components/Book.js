import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';
import '../App.css';
import styles from '../styles/Book.module.css';

const Book = ({ booksListObj }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteBook(id));
      dispatch(fetchBooks());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookInfo}>
        <div className={styles.mainInfo}>
          <p className={styles.category}>{booksListObj.category}</p>
          <h1 className={styles.title}>{booksListObj.title}</h1>
          <span className={styles.author}>{booksListObj.author}</span>
        </div>
        <ul className={styles.buttons}>
          <li className="buttonItem">
            <button type="button" className={styles.button1}>
              Comment
            </button>
          </li>
          <li className="buttonItem">
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                handleDelete(booksListObj.item_id);
              }}
            >
              Remove
            </button>
          </li>
          <li className="buttonItem">
            <button type="button" className={styles.button}>
              Edit
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.completed}>
        <div className={styles.progressCercle} />
        <p className={styles.progressCompleted}>
          <span className={styles.percentage}>
            {/* {booksListObj.completed} */}
            97%
          </span>
          <span className={styles.completedWord}>Completed</span>
        </p>
      </div>

      <div className={styles.currentChapter}>
        <p className={styles.currentChapterTitle}>Current Chapter</p>
        <p className={styles.chapter}>chapter 69</p>
        <button type="button" className={styles.progressButton}>
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  booksListObj: PropTypes.object.isRequired,
};

export default Book;
