import './style.scss';
import { NavLink } from 'react-router-dom';
//components
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
//icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';

const SignIn = () => {
  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <p className="auth-welcome">Welcome back, you've been missed!</p>
      <div className="auth-form">
        <div className="sign-in-with">
          <a className="sign-in-with-btn">
            <FaGoogle className="sign-in-icon" />
            <span>Log in with Google</span>
          </a>
          <a className="sign-in-with-btn">
            <FaFacebookF className="sign-in-icon" />
            <span>Log in with Facebook</span>
          </a>
        </div>
        <h4>OR</h4>
        <TextInput placeholder="Email" type="email" name="email" icon={<FiAtSign />} />
        <br />
        <TextInput placeholder="Password" type="password" name="password" icon={<BiLockAlt />} />
        <div className="sign-in-footer">
          <div className="remember-me-checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span>Forgot Password?</span>
        </div>
        <Button text="Sign In" />
        <p className="no-account">
          You haven't any account ? <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
