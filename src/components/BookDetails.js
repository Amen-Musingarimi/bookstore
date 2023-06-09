import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBookAsync } from '../redux/books/booksSlice';

const BookDetails = ({
  category, author, title, id,
}) => {
  const dispatch = useDispatch();

  const deleteBookHandler = () => {
    dispatch(deleteBookAsync(id));
  };

  return (
    <div className="book-details">
      <div>
        <h4 className="category-name">{category}</h4>
        <h3 className="book-title">{title}</h3>
        <p className="author-name">{author}</p>
      </div>
      <div className="action-buttons">
        <button type="button" className="actionBtn">
          Comments
        </button>
        <div className="vertical-line" />
        <button type="button" className="actionBtn" onClick={deleteBookHandler}>
          Remove
        </button>
        <div className="vertical-line" />
        <button type="button" className="actionBtn">
          Edit
        </button>
      </div>
    </div>
  );
};

BookDetails.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookDetails;
