import { IBook } from '../utils/interfaces';

export const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div
      className={`book-card--${book.available ? 'available' : 'not-available'}`}
    >
      <h3>{book.title}</h3>
      {book.authors.length > 0 ? (
        <ul>
          {book.authors.map((author, i) => (
            <li key={i}>{author}</li>
          ))}
        </ul>
      ) : (
        <p>Anonym</p>
      )}
      <p>{book.pages}</p>
      <p>{book.available}</p>
    </div>
  );
};
