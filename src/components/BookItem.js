import React from 'react';
import PropTypes from 'prop-types';
import BookDetails from './BookDetails';
import BookProgressDetails from './BookProgressDetails';
import UpdateBookProgress from './UpdateBookProgress';
import './styles/BookItem.css';

const BookItem = ({
  title, category, author, id,
}) => (
  <div className="book-container">
    <BookDetails title={title} author={author} category={category} id={id} />
    <div className="progress-container">
      <BookProgressDetails />
      <div className="bigger-vertical-line" />
      <UpdateBookProgress />
    </div>
  </div>
);

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
