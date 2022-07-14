import React, { useContext } from 'react';
import './style.scss';
import { AuthContext } from '../../contexts/authContext/AuthContext';
import { NavLink } from 'react-router-dom';
//component
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import AvatarIcon from '../AvatarIcon';
import { BiUser } from 'react-icons/bi';

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="header-container">
      <Logo />
      <SearchBar />

      {currentUser ? (
        <AvatarIcon showName />
      ) : (
        <div>
          <NavLink to="/auth/sign-in" className="sign-in">
            <BiUser className="sign-in-icon" />
            <span>Sign In/Sign Up</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
