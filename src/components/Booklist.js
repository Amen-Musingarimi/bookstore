import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ booksProps }) => (
  <>
    {booksProps.map((book) => (
      <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
        completed={book.completed}
      />
    ))}
  </>
);

BookList.propTypes = {
  booksProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
