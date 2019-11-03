import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";

import client from "./client";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import "./App.css";
import Home from "./Home"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
};

export default App;
