import { useContext } from 'react';
import { AppContext } from '../utils/AppContext';
import { UserCard } from '../components/UserCard';

export const UsersPage = () => {
  const { users } = useContext(AppContext);
  return (
    <div className="users-page">
      <h1>Authors</h1>
      <img
        src="https://plus.unsplash.com/premium_photo-1661766496405-d69ab4d2a5b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
      />
      <ul className='users-card-container'>
        {users?.map((user) => (
          <UserCard user={user} />
        ))}
      </ul>
    </div>
  );
};
