import React, { Component } from 'react';

import './Header.css';

import logOutImg from '../../assets/img/logout.svg';

import { getUserInfo } from '../../services/user';

import { userInfo as parseUserInfo } from '../../utils/spotifyResponseParsers';
import { logOut } from '../../utils/logOut';

export default class Header extends Component {
  state = {
    name: '',
    profilePicture: '',
    shouldShow: false
  };

  componentDidMount = () => {
    getUserInfo().then((response) => {
      const userInfo = parseUserInfo(response);
      this.setState({
        ...userInfo
      });
    });
  };

  render = () => {
    const { profilePicture, name } = this.state;

    return (
      <div className="header">
        <div className="header__icon">
          {profilePicture && (
            <img
              className="header__icon-image"
              alt="User Profile"
              src={profilePicture}
            />
          )}
        </div>
        <div className="header__wrap">
          <p className="header__user-name">{name}</p>
        </div>
        <div className="header__divider" />
        <div className="header__icon-right">
          <img
            className="header__image-logout"
            alt="LogOut"
            src={logOutImg}
            onClick={logOut}
          />
        </div>
      </div>
    );
  };
}
