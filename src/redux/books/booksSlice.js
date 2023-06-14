import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state) => {
      const newBook = {
        id: 90,
        title: 'Algebra',
        category: 'Maths',
        author: 'Al-khawarizmi',
        completed: 78,
        chapter: 'chapter 67',
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, id) => {
      const bookId = id;
      state.booksList = state.booksList.filter((book) => book.id !== bookId);
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
