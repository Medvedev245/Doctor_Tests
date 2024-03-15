import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';

//----Удалить

export const Layout = () => {
  return (
    <>
      <Header>Бесплатные тесты</Header>
      <main>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>-----------</footer>
    </>
  );
};
