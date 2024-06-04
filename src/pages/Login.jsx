import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/auth.context';

// function LoginPage(props){
  



const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    password: ''
  });
  const { storeToken, setIsLoggedIn, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formDetails);
        if (response.status === 200) {
          const data = response.data;
          storeToken(data.authToken);
          setUser(data.user);
          setIsLoggedIn(true);
          alert('Login successful!');
          navigate('/');
        } else {
          alert('Login failed: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Login failed');
      }
    };
  

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <p className="login-text">Enter your email address and password to successfully login.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
      <p className="register-link">
        New user? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
