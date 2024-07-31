import { Link } from 'react-router-dom';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div>
      NotFound
      <Link to="/">to Home Page</Link>
    </div>
  );
};

export default NotFound;
