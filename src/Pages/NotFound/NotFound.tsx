import { Link } from 'react-router-dom';
import React from 'react';
import { NotFoundContainer } from './NotFound.styled';

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <span>Tato stránka nebyla nalezena</span>
      <Link to="/">to Home Page</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
