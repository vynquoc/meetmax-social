import React from 'react';
import './style.scss';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';
//component
import SearchBar from '../SearchBar';
import AvatarIcon from '../AvatarIcon';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <MainLogo className="logo-icon" />
        <span className="logo-text">Meetmax</span>
      </div>
      <SearchBar />
      <AvatarIcon showName />
    </div>
  );
};

export default Header;
