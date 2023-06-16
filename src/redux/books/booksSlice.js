import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oufYidJFZaASGyvx4gkK/books';

const initialState = {
  booksList: [],
  loading: true,
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

  extraReducers: (builder) => {
    builder
      // handle AddNewBook's promise
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
      })
      // handle AddNewBook's promise
      .addCase(addNewBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBook.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addNewBook.rejected, (state) => {
        state.loading = false;
      })

      // handle deleteBook's promise
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
