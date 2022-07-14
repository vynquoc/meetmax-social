import './style.scss';
import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//contexts
import { AuthContext } from '../../../../contexts/authContext/AuthContext';
//components
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
//icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';
import authApi from '../../../../api/authApi';

interface UserInfo {
  email: string;
  password: string;
}

const defaultFormFields: UserInfo = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState<UserInfo>(defaultFormFields);
  const authContext = useContext(AuthContext);
  const { setUserToContext } = authContext;
  const navigate = useNavigate();

  const handleFormFieldsChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  const signIn = async () => {
    try {
      const response: any = await authApi.signIn(formFields);
      const { user, token } = response;

      setUserToContext(user);
      navigate('/');
      localStorage.setItem('access_token', token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    signIn();
  };

  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <p className="auth-welcome">Welcome back, you've been missed!</p>
      <div className="auth-form">
        <div className="sign-in-with">
          <span className="sign-in-with-btn">
            <FaGoogle className="sign-in-icon" />
            <span>Log in with Google</span>
          </span>
          <span className="sign-in-with-btn">
            <FaFacebookF className="sign-in-icon" />
            <span>Log in with Facebook</span>
          </span>
        </div>
        <h4>OR</h4>
        <TextInput
          placeholder="Email"
          type="email"
          name="email"
          icon={<FiAtSign />}
          onChange={handleFormFieldsChange}
        />
        <br />
        <TextInput
          placeholder="Password"
          type="password"
          name="password"
          icon={<BiLockAlt />}
          onChange={handleFormFieldsChange}
        />
        <div className="sign-in-footer">
          <div className="remember-me-checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span>Forgot Password?</span>
        </div>
        <Button text="Sign In" onClick={handleSubmit} />
        <p className="no-account">
          You haven't any account ? <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
