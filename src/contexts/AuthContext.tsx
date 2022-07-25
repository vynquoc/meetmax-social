import React, { createContext, useEffect, useState } from 'react';

import authApi from '../api/authApi';

interface AuthContextProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  password: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  friends: [any];
}

interface AuthContextDefault {
  currentUser: User | null;
  setUserToContext: (user: User) => void;
  signOut: () => void;
}

const AuthContextDefaultData: AuthContextDefault = {
  currentUser: null,
  setUserToContext: () => {},
  signOut: () => {},
};

export const AuthContext = createContext<AuthContextDefault>(AuthContextDefaultData);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [currentUser, setCurrentUser] = useState<any>(AuthContextDefaultData.currentUser);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      getUserByToken();
    } else {
      setCurrentUser(null);
    }
  }, []);

  //persist user logged in
  const getUserByToken = async () => {
    const response: any = await authApi.getUserByToken();
    setCurrentUser(response.user);
  };

  const setUserToContext = (data: User) => {
    setCurrentUser(data);
  };

  const signOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('access_token');
  };

  const value = { currentUser, setUserToContext, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
