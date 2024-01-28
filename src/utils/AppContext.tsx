import { createContext, ReactNode, useState } from 'react';
import { IAppContext, IBook, IUser, IAuthor } from '../utils/interfaces';

const defaultContext: IAppContext = {
  books: undefined,
  setBooks: () => {},
  users: undefined,
  setUsers: () => {},
  authors: undefined,
  setAuthors: () => {},
};

export const AppContext = createContext<IAppContext>(defaultContext);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [books, setBooks] = useState<IBook[] | undefined>(undefined);
  const [users, setUsers] = useState<IUser[] | undefined>(undefined);
  const [authors, setAuthors] = useState<IAuthor[] | undefined>(undefined);

  const contextValue: IAppContext = {
    books,
    setBooks,
    users,
    setUsers,
    authors,
    setAuthors,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
