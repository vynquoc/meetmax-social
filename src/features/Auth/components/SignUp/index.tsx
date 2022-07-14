import './style.scss';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { uploadImage } from '../../../../utils';
//components
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
//icons
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';
import { BiLockAlt } from 'react-icons/bi';
import authApi from '../../../../api/authApi';

interface UserInfo {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dateOfBirth: string;
  email: string;
}

const defaultFormFields: UserInfo = {
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
  gender: '',
  dateOfBirth: '',
  email: '',
  avatar: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState<UserInfo>(defaultFormFields);
  const [avatar, setAvatar] = useState<any>(null);

  const navigate = useNavigate();

  const handleAvatarChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    setAvatar(files);
  };

  const handleFormFieldsChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignUp = async (avatarUrl: string) => {
    try {
      await authApi.signUp({ ...formFields, avatar: avatarUrl });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const { data } = await uploadImage(avatar);
      await handleSignUp(data.url);
    } catch (error) {
      console.log(error);
    }
  };

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
        <TextInput
          placeholder="Email"
          type="email"
          name="email"
          icon={<FiAtSign />}
          onChange={handleFormFieldsChange}
        />
        <br />
        <TextInput
          placeholder="Username"
          type="text"
          name="username"
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
        <br />
        <TextInput
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          icon={<BiLockAlt />}
          onChange={handleFormFieldsChange}
        />
        <br />
        <div className="first-last-name-container">
          <TextInput
            placeholder="First name"
            type="text"
            name="firstName"
            onChange={handleFormFieldsChange}
          />

          <TextInput
            placeholder="Last name"
            type="text"
            name="lastName"
            onChange={handleFormFieldsChange}
          />
        </div>
        <br />
        <div className="gender-dob-container">
          <TextInput
            placeholder="Date of birth"
            type="date"
            name="dateOfBirth"
            onChange={handleFormFieldsChange}
          />
          <div className="gender-container">
            <div className="gender-item">
              <input
                placeholder="Gender"
                type="radio"
                name="gender"
                value="male"
                onChange={handleFormFieldsChange}
              />
              <span>Male</span>
            </div>
            <div className="gender-item">
              <input
                placeholder="Gender"
                type="radio"
                name="gender"
                value="female"
                onChange={handleFormFieldsChange}
              />
              <span>Female</span>
            </div>
          </div>
        </div>
        <TextInput type="file" name="avatar" onChange={handleAvatarChange} />
        <br />
        <Button text="Sign Up" onClick={handleSubmit} />
        <p className="no-account">
          Already have account ? <NavLink to="/auth/sign-in">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
