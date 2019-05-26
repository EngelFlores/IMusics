import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Login from './components/Login/Login';
import Artists from './components/Artists/Artists';
import ArtistDetails from './components/ArtistDetails/ArtistDetails';
import Header from './components/Header/Header'

import { isUserLogged } from './utils/isUserLogged';

import './index.css';
import './variables-gradients.css';
import './variables-colors.css';


const routes = () => (
  <Fragment>
    {isUserLogged() && <Header />}
    <Switch>
      <Route path="/login" component={Login} />
      {!isUserLogged() && <Redirect to="/login" />}
      <Route path="/artists/:artistId" component={ArtistDetails} />
      <Route path="/artists" component={Artists} />
      <Redirect exact from="/" to="login" />
    </Switch>
  </Fragment>
);

ReactDOM.render(
  <BrowserRouter>{routes()}</BrowserRouter>,
  document.getElementById('root')
);
