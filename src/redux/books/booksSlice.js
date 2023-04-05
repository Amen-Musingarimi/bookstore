import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'uuid';
import booksArray from './books';

const initialState = booksArray;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.push(newBook);
    },

    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
