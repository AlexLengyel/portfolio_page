import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./styles/globalStyles";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const themeState = useSelector((state) => state.themeReducer.theme);

  return (
    <ThemeProvider theme={themeState === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
