import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oufYidJFZaASGyvx4gkK/books';

const initialState = {
  booksList: [],
  loading: true,
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fectBooks', async () => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (bookInfo) => {
  const newBook = {
    item_id: uuidv4(),
    author: bookInfo[1],
    title: bookInfo[0],
    category: bookInfo[2],
  };
  try {
    const resp = await axios.post(url, newBook);

    return resp.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
  try {
    const resp = await axios.delete(`${url}/${id}`);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  // reducers: {
  //   addBook: (state, action) => {
  //     const newBook = {
  //       item_id: uuidv4(),
  //       title: action.payload[0],
  //       category: 'Maths',
  //       author: action.payload[1],
  //     };
  //     // state.booksList = [...state.booksList, newBook];
  //     state.booksList.push(newBook);
  //   },
  //   removeBook: (state, action) => {
  //     const bookId = action.payload;
  //     state.booksList = state.booksList.filter((book) => book.item_id !== bookId);
  //   },
  // },
  // fetchBooks Extra reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addNewBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewBook.fulfilled, (state) => {
        state.loading = false;
        // state.booksList = [...state.booksList, newBook];
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = false;
        // state.booksList = [...state.booksList, newBook];
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
