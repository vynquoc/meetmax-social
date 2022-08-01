import { useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import './style.scss';

import { NavLink } from 'react-router-dom';
//component
import SearchBar from '../SearchBar';
import Logo from '../Logo';
import AvatarIcon from '../AvatarIcon';
import { BiUser } from 'react-icons/bi';

const Header = () => {
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);

  return (
    <div className="header-container">
      <Logo />
      <SearchBar placeholder="Search for somethings" />

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
