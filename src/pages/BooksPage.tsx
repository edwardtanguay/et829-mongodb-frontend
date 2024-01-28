import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import { BookCard } from '../components/BookCard';
export const BooksPage = () => {
  const { books } = useContext(AppContext);

  return (
    <div className="books-page">
      <h1>Books</h1>
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
        alt=""
      />
      {books &&
        books.map((book) => <BookCard book={book} key={String(book._id)} />)}
    </div>
  );
};
