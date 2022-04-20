import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthenticationPage from './pages/Authentication';
import Dashboard from './pages/Dashboard';

import { AppRouter } from './routes'

import { ChakraProvider } from '@chakra-ui/react'
import { ReactKeycloakProvider } from '@react-keycloak/web'

import keycloak from './keycloak'


ReactDOM.render(
  <StrictMode>
   <App/>
  </StrictMode>,
  document.getElementById('root')
);