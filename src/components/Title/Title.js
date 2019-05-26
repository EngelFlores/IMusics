import React from 'react';
import { Link } from 'react-router-dom';

import './Title.css'

// eslint-disable-next-line no-undef
const Title = ({ title, shouldShow }) => {
  return (
    <div className="title" data-testid="title">
      <h1>{title}</h1>
      {shouldShow && <Link to={'/artists'}>Voltar</Link>}
    </div>
  );
}

export { Title }
