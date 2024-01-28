import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { AppProvider } from './utils/AppContext';

export const App = () => {
  return (
    <>
      <Header />
      <AppProvider>
        <main>
          <Outlet />
        </main>
      </AppProvider>
    </>
  );
};
