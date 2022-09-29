import React from 'react';
import './App.css';

import {
  ChakraProvider,
} from '@chakra-ui/react';

import HomePage from './components/HomePage';

function App() {
  return (
    <ChakraProvider>
      <HomePage/>
    </ChakraProvider>
  );
}

export default App;
