import { IUser, IAuthor } from '../utils/interfaces';
import { useState } from 'react';

interface IPersonCardProps {
  person: IUser | IAuthor;
}

export const PersonCard: React.FC<IPersonCardProps> = ({ person }) => {
  const [cardState, setCardState] = useState('obverse');

  const udpateCardState = () => {
    setCardState(cardState === 'obverse' ? 'reverse' : 'obverse');
  };

  return (
    <div className={`person-card--${cardState}`} onClick={udpateCardState}>
      <div className="person-card__obverse">
        <h3>
          {person.lastName}, {person.firstName}
        </h3>
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </div>
      <ul>
        {person.books &&
          person.books.map((book) => (
            <p key={String(book._id)}>{book.title}</p>
          ))}
      </ul>
    </div>
  );
};
