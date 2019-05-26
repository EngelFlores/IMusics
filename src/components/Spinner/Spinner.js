import React from 'react';
import './Spinner.css';
import vinyl from '../../assets/img/vinyl.svg';
import needle from '../../assets/img/needle.svg';

const Spinner = () => (
  <div className="spinner">
    <img src={needle} className="spinner__needle" alt="loading" data-testid="needle"/>
    <img src={vinyl} className="spinner__record" alt="loading" data-testid="vinyl"/>
  </div>
);

export default Spinner;
