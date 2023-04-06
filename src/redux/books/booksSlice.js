import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'uuid';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books'
    );
    if (response.ok) {
      const books = await response.json();
      return { books };
    }
  }
);

export const addBookAsync = createAsyncThunk(
  'books/addBookAsync',
  async (payload) => {
    const resp = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: uuidv4(),
          title: payload.title,
          author: payload.author,
          category: payload.category,
        }),
      }
    );

    if (resp.ok) {
      const book = await resp.json();
      return { book };
    }
  }
);

export const deleteBookAsync = createAsyncThunk(
  'books/deleteBookAsync',
  async (payload) => {
    const resp = await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books/${payload}`,
      {
        method: 'DELETE',
      }
    );

    if (resp.ok) {
      return { payload };
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: uuidv4(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.push(newBook);
    },

    removeBook: (state, action) => {
      const idToRemove = action.payload;
      return state.filter((book) => Object.keys(book)[0] !== idToRemove);
    },
  },

  extraReducers: {
    [getBooksAsync.fulfilled]: (state, action) => {
      return action.payload.books;
    },

    [addBookAsync.fulfilled]: (state, action) => {
      state.push(action.payload.book);
    },
    [deleteBookAsync.fulfilled]: (state, action) => {
      const idToRemove = action.payload;
      return Object.fromEntries(
        Object.entries(state).filter(([key]) => key !== idToRemove)
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
