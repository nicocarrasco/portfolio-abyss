import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import Home from "./pages/home/Home";

import "./i18n";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
