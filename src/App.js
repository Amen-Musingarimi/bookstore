import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import BookLogic from './components/BooksLogic';
import BooksCategory from './components/BooksCategory';
import './App.css';

const activeStlye = {
  color: '#000',
};

function App() {
  const [activeLink, setActiveLink] = useState('books');
  return (
    <>
      <nav>
        <div>
          <h1 className="logo">Bookstore CMS</h1>
          <Link
            to="/"
            className="navLinks"
            style={activeLink === 'books' ? activeStlye : {}}
            onClick={() => setActiveLink('books')}
          >
            BOOKS
          </Link>
          <Link
            to="/categories"
            className="navLinks"
            style={activeLink === 'categories' ? activeStlye : {}}
            onClick={() => setActiveLink('categories')}
          >
            CATEGORIES
          </Link>
        </div>
        <button type="button" className="userIcon-btn">
          <span className="userIcon">
            <FaUserAlt />
          </span>
        </button>
      </nav>
      <Routes>
        <Route path="/" element={<BookLogic />} />
        <Route path="/categories" element={<BooksCategory />} />
      </Routes>
    </>
  );
}

export default App;
