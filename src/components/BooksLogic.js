import BookForm from './BookForm';
import BookList from './Booklist';
import './styles/BookLogic.css';

const BookLogic = () => (
  <div className="mainContainer">
    <BookList />
    <BookForm />
  </div>
);

export default BookLogic;
