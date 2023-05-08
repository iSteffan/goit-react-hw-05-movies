import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { List, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </List>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
