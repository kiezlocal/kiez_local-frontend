import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../context/auth.context'
import {
  Stack,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Image,
  Text,
} from '@chakra-ui/react';

const API_URL = import.meta.env.VITE_API_URL;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const {storeToken, authenticateUser} = useContext(AuthContext);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken)
        authenticateUser();
        const authToken = response.data.authToken;
        console.log("JWT token", authToken);
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

 
    // <div className="LoginPage">
    //   <h1>Login</h1>

      {/* <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmailChange} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div> */}
    return (
<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <form onSubmit={handleLoginSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
            </FormControl>
            {errorMessage && <Text color="red.500" mt={2}>{errorMessage}</Text>}
            <Stack spacing={6} mt={5}>
              
              <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </form>
          <Text mt={4}>Don't have an account yet? <Link color={'blue.500'} to={"/signup"}>Sign Up</Link></Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://berlinstreetart.com/wp-content/uploads/2016/03/Klunkerkranich-Berlin-via-Facebook.jpg'
          }
        />
      </Flex>
    </Stack>

  );
};

export default LoginPage;