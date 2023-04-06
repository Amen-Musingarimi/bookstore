import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksAsync } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <>
      {Object.keys(books).map((key) => books[key].map((book) => (
        <BookItem
          key={key}
          id={key}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      )))}
    </>
  );
};

export default BookList;
