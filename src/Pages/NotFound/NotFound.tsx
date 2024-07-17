import { Link } from 'react-router-dom';
import React, { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div>
      NotFound
      <Link to="/">to Home Page</Link>
    </div>
  );
};

export default NotFound;
