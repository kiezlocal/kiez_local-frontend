import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name: username };

    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    // <div className="SignupPage">
    //   <h1>Sign Up</h1>

    //   <form onSubmit={handleSubmit}>
    //     <label>Email:</label>
    //     <input type="email" name="email" value={email} onChange={handleEmailChange} />

    //     <label>Password:</label>
    //     <input type="password" name="password" value={password} onChange={handlePasswordChange} />

    //     <label>Username:</label>
    //     <input type="text" name="username" value={username} onChange={handleUsernameChange} />

    //     <button type="submit">Sign Up</button>
    //   </form>

    //   {errorMessage && <p className="error-message">{errorMessage}</p>}

    //   <p>Already have an account?</p>
    //   <Link to="/login">Login</Link>
    // </div>


<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Register</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" value={email} onChange={handleEmailChange} />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
              </FormControl>
              <FormControl id="username" isRequired mt={4}>
              <FormLabel>Username</FormLabel>
              <Input type="username" name="username" value={username} onChange={handleUsernameChange} />
            </FormControl>
            {errorMessage && <Text color="red.500" mt={2}>{errorMessage}</Text>}
            <Stack spacing={6} mt={5}>
              
              <Button type="submit" colorScheme={'blue'} variant={'solid'}>
                Sign up
              </Button>
            </Stack>
          </form>
          <Text mt={4}>Already have an account?<Link color={'blue.500'} to={"/signup"}>Login</Link></Text>
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

        )


};

export default SignupPage;
