import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container, MainContainer } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';
// import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const Layout: React.FC = () => {
  console.log(useAuth);
  return (
    // <Navigate to="auth"></Navigate>
    <Container>
      <Header />
      <MainContainer>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </Container>
  );
};
