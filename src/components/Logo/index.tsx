import { NavLink } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/images/logo.svg';

import './style.scss';

const Logo = () => {
  return (
    <NavLink to="/" className="logo-container">
      <MainLogo className="logo-icon" />
      <span className="logo-text">Meetmax</span>
    </NavLink>
  );
};

export default Logo;
