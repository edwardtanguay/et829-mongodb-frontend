import { IUser } from '../utils/interfaces';

export const UserCard: React.FC<{ user: IUser }> = ({ user }) => {
  return (
    <div className="user-card">
      <p>
        {user.firstName} {user.lastName}
      </p>
      <a href={`mailto: ${user.email}`}>{user.email}</a>
      <p>{user.mobile}</p>
      <p>
        {user.address.street}, {user.address.number}. {user.address.city} PLZ :{' '}
        {user.address.zipCode}
      </p>
    </div>
  );
};
