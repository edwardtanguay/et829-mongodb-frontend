import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { LandingPage } from '../pages/LandingPage';
import { UsersPage } from '../pages/UsersPage';
import { BooksPage } from '../pages/BooksPage';
import { AuthorsPage } from '../pages/AuthorsPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/books',
        element: <BooksPage />,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/authors',
        element: <AuthorsPage />,
      },
    ],
  },
]);
