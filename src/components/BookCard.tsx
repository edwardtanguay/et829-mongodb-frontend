import { IBook } from '../utils/interfaces';

export const BookCard: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>
        {book.author.lastName}, {book.author.firstName}
      </p>
      <p>{book.location}</p>
    </div>
  );
};
