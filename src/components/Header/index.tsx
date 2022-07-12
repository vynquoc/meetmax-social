import React from 'react';
import './style.scss';

//component
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import AvatarIcon from '../AvatarIcon';

const Header = () => {
  return (
    <div className="header-container">
      <Logo />
      <SearchBar />
      <AvatarIcon showName />
    </div>
  );
};

export default Header;
