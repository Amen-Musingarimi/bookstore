import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import BookProgressDetails from './BookProgressDetails';
import UpdateBookProgress from './UpdateBookProgress';
import './styles/BookItem.css';

const BookItem = ({
  category, title, author, completed,
}) => (
  <div className="book-container">
    <BookDetails category={category} title={title} author={author} />
    <div className="progress-container">
      <BookProgressDetails completed={completed} />
      <div className="bigger-vertical-line" />
      <UpdateBookProgress />
    </div>
  </div>
);

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
};

export default BookItem;
