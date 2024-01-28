import ReactDOM from 'react-dom/client';

import '../src/style/main.scss';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './utils/AppRouter.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={AppRouter} />
);
