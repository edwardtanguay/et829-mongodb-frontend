import { ObjectId } from 'mongoose';
export interface IBook {
  _id: ObjectId;
  title: string;
  authors: string[];
  pages: number;
  available: boolean;
}

export interface IAddress {
  street: string;
  number: string;
  city: string;
  zipCode: string;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUser extends IPerson {
  address: IAddress;
  mobile: number;
}

export interface IAuthor extends IPerson {
  books?: IBook[];
}

export interface IAppContext {
  books: IBook[] | undefined;
  setBooks: React.Dispatch<React.SetStateAction<IBook[] | undefined>>;
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
}
