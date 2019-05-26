import React from 'react';

import './Card.css'

// eslint-disable-next-line no-undef
const Card = (result, key) => {
  const {album, name, track_number } = result.result
  const imgSrc = album.images[0].url


  return (
    <div className="card" key={key}>
      <img className="card-image" src={imgSrc} alt="Artist"></img>
      <div className="card__text">
      <h2>Album: {name}</h2>
      <h2>Músicas: {track_number}</h2>
      </div>
    </div>
  );
}

export { Card }
