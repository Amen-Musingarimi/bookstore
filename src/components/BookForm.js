import { useState } from 'react';
import './styles/BookForm.css';

const BookForm = () => {
  const [selectedOption, setSelectedOption] = useState('Action');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="form-section">
      <h2 className="form-section-heading">ADD NEW BOOK</h2>
      <form>
        <input
          placeholder="Book title"
          type="text"
          className="book-title-input"
        />
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
          className="category-input"
        >
          <option value="Action" className="category">
            Action
          </option>
          <option value="Science Fiction" className="category">
            Science fiction
          </option>
          <option value="Economy" className="category">
            Economy
          </option>
        </select>
        <button type="button" className="add-book-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default BookForm;
