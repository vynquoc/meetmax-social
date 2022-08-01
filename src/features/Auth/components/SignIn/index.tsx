import './style.scss';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
//contexts

//components
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
//icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';
import authApi from '../../../../api/authApi';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../../../store/actions/userActions';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../store/store';

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootStore) => state.user.currentUser);

  const handleFormFieldsChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    try {
      dispatch<any>(userLogin(formFields.email, formFields.password));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser]);
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
