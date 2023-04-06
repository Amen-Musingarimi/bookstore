import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooksAsync } from '../redux/books/booksSlice';
import BookItem from './BookItem';

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <>
      {books.map((book) => (
        <BookItem
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </>
  );
};

export default BookList;
