import { createContext, ReactNode, useState, useEffect } from 'react';
import { IAppContext, IBook, IUser } from '../utils/interfaces';
import { FetchSingleEndpoint } from './FetchData';

const defaultContext: IAppContext = {
  books: undefined,
  setBooks: () => {},
  users: undefined,
  setUsers: () => {},
};

export const AppContext = createContext<IAppContext>(defaultContext);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<IBook[] | undefined>(undefined);
  const [users, setUsers] = useState<IUser[] | undefined>(undefined);

  useEffect(() => {
    FetchSingleEndpoint('books').then((data) => setBooks(data));
    FetchSingleEndpoint('users').then((data) => setUsers(data));
  }, []);

  const contextValue: IAppContext = {
    books,
    setBooks,
    users,
    setUsers,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
