import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import './styles/BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value.trim());
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value.trim());
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value.trim());
  };

  const bookSubmitHandler = (event) => {
    event.preventDefault();
    if (title && author && category) {
      dispatch(
        addBookAsync({
          title,
          author,
          category,
          item_id: uuidv4(),
        }),
      );
      setTitle('');
      setAuthor('');
      setCategory('Fiction');
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill all inputs!');
    }
  };

  return (
    <div className="form-section">
      <h2 className="form-section-heading">ADD NEW BOOK</h2>
      <p className="error-message">{errorMessage}</p>
      <form>
        <input
          placeholder="Book title"
          type="text"
          className="book-title-input"
          value={title}
          onChange={handleTitleChange}
          required
        />
        <input
          placeholder="Author"
          type="text"
          className="book-author-input"
          value={author}
          onChange={handleAuthorChange}
        />
        <select
          id="dropdown"
          value={category}
          onChange={handleCategoryChange}
          className="category-input"
        >
          <option value="Fiction" className="category">
            Fiction
          </option>
          <option value="Non-Fiction" className="category">
            Non-Fiction
          </option>
          <option value="Mystery/Thriller" className="category">
            Mystery/Thriller
          </option>
          <option value="Romance" className="category">
            Romance
          </option>
          <option value="Science Fiction/Fantasy" className="category">
            Science Fiction/Fantasy
          </option>
          <option value="Business/Finance" className="category">
            Business/Finance
          </option>
          <option value="Self-Help/Personal Developments" className="category">
            Self-Help/Personal Development
          </option>
          <option value="Biography/Autobiography" className="category">
            Biography/Autobiography
          </option>
        </select>
        <button
          type="button"
          className="add-book-btn"
          onClick={bookSubmitHandler}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
