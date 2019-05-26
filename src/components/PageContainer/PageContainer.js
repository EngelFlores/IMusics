import React from 'react';
import './PageContainer.css';
import Spinner from '../Spinner/Spinner';

const PageContainer = ({ children, loaded = true }) => {
  return (
    <div
      className={'page-container'}
      data-testid="pageContainer"
    >
      {loaded ? children : <Spinner />}
    </div>
  );
};

export default PageContainer;
