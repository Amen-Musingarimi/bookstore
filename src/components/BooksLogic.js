import BookForm from './BookForm';
import BookList from './Booklist';
import './styles/BookLogic.css';

const dummyBooksArray = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    completed: 64,
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbet',
    category: 'Science Fiction',
    completed: 8,
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: 0,
  },
];

const BookLogic = () => (
  <div className="mainContainer">
    <BookList booksProps={dummyBooksArray} />
    <BookForm />
  </div>
);

export default BookLogic;
