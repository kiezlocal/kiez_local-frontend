

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProviderWrapper = ({ children }) => {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken') || '');

  

  
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
          if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            console.error('Request data:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
          setIsLoggedIn(false);
          setUser(null);
        }
      }
      setIsLoading(false);
    };

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
    <AuthContext.Provider value={{ loggedIn, isLoading, user, storeToken, removeToken, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
