import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line
import { v4 as uuidv4 } from 'uuid';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books',
    );
    if (response.ok) {
      const data = await response.json();
      const books = [
        Object.keys(data).map((key) => ({
          item_id: key,
          ...data[key][0],
        })),
      ];
      return books;
    }
    return null;
  },
);

export const addBookAsync = createAsyncThunk('Book/addBook', async (book) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books',
    {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return book;
});

export const deleteBookAsync = createAsyncThunk(
  'deleteBookAsync',
  async (id) => {
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Y07UI7x7vu0Iu5RsRAh6/books/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return id;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getBooksAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload[0];
      updatedState.books = newStore;
    });

    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      const item = action.payload;
      state.books.push(item);
    });

    builder.addCase(deleteBookAsync.fulfilled, (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== id);
      return newState;
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
