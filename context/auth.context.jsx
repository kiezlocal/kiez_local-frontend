

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');

  useEffect(() => {
    const authenticateUser = async () => {
      if (token) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/verify`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Error verifying token:', error);
          setIsLoggedIn(false);
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    authenticateUser();
  }, [token]);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
    setToken(token);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
    setToken('');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, isLoading, user, storeToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
