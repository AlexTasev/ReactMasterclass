import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import client from './client';
import { CustomThemeProvider } from './style/themeContext';
import './App.css';
import Home from './Home';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
          <CustomThemeProvider>
            <Home />
          </CustomThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
