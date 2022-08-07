import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import { Nav, SNavLink, Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Nav>
        <SNavLink to="/">Home</SNavLink>
        <SNavLink to="/movies">Movies</SNavLink>
      </Nav>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
