import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

// eslint-disable-next-line no-undef
const Card = (response, key) => {
  const { imgSrc, id, name } = response.result
  return (
    <div className="card" key={key}>
      <Link to={`/artists/${id}`}>
        <img className="card-image" src={imgSrc} alt="Artist"></img>
        <div className="card__text">
          {name}
        </div>
      </Link>
    </div>
  );
}

export { Card }
