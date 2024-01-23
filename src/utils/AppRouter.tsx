import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { HomePage } from '../pages/HomePage';
import { EmployeesPage } from '../pages/EmployeesPage';
import { CustomersPage } from '../pages/CustomersPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/employees',
        element: <EmployeesPage />,
      },
      {
        path: '/customers',
        element: <CustomersPage />,
      },
    ],
  },
]);
