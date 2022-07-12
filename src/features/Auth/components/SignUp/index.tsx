import './style.scss';
import { NavLink } from 'react-router-dom';
//components
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
//icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';

const SignUp = () => {
  return (
    <div className="auth-container">
      <h1>Getting Started</h1>
      <p className="auth-welcome">Create an account to continue and connect with the people.</p>
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
        <br />
        <div className="first-last-name-container">
          <TextInput placeholder="First name" type="text" name="firstName" />
          <TextInput placeholder="Last name" type="text" name="lastName" />
        </div>
        <br />
        <div className="gender-dob-container">
          <TextInput placeholder="Date of birth" type="date" name="dob" />
          <div className="gender-container">
            <div className="gender-item">
              <input placeholder="Gender" type="radio" name="gender" value="male" />
              <span>Male</span>
            </div>
            <div className="gender-item">
              <input placeholder="Gender" type="radio" name="gender" value="female" />
              <span>Female</span>
            </div>
          </div>
        </div>
        <br />
        <Button text="Sign Up" />
        <p className="no-account">
          Already have account ? <NavLink to="/auth/sign-in">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
