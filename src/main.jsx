import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProviderWrapper } from '../context/auth.context.jsx'
import { ChakraProvider, extendTheme, GlobalStyle } from '@chakra-ui/react';


// const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Roboto, sans-serif",
      },
    },
  },
});

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(

  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <AuthProviderWrapper>
    <App />
    </AuthProviderWrapper>
    </ChakraProvider>
  </React.StrictMode>,
)
