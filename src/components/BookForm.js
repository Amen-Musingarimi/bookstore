import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import './styles/BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const bookSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(addBook({
      title, author, category, id: uuidv4(),
    }));
    setTitle('');
    setAuthor('');
    setCategory('Action');
  };

  return (
    <div className="form-section">
      <h2 className="form-section-heading">ADD NEW BOOK</h2>
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
          <option value="Action" className="category">
            Action
          </option>
          <option value="Science Fiction" className="category">
            Science fiction
          </option>
          <option value="Non-fiction" className="category">
            Non-fiction
          </option>
          <option value="Romance" className="category">
            Romance
          </option>
          <option value="Mystery" className="category">
            Mystery
          </option>
          <option value="Horror" className="category">
            Horror
          </option>
          <option value="Academics" className="category">
            Academics
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
