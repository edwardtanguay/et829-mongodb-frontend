import { ObjectId } from 'mongoose';
export interface IBook {
  _id: ObjectId;
  title: string;
  author: {
    id: ObjectId;
    firstName: string;
    lastName: string;
  };
  pages: number;
  publisher: string;
  location: string;
}

export interface IAddress {
  street: string;
  number: string;
  city: string;
  PLZ: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IPerson {
  address: IAddress;
  books?: IBook[];
}

export interface IAuthor extends IPerson {
  books?: IBook[];
}

export interface IAppContext {
  books: IBook[] | undefined;
  setBooks: React.Dispatch<React.SetStateAction<IBook[] | undefined>>;
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
  authors: IAuthor[] | undefined;
  setAuthors: React.Dispatch<React.SetStateAction<IAuthor[] | undefined>>;
}
