import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Container, MainContainer } from './Layout.styled';
import { Footer } from 'components/Footer/Footer';

//----Удалить

export const Layout = () => {
  return (
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
