import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createTheme, MuiThemeProvider } from "@material-ui/core";

import App from "./App";
import "./index.css";

const composeEnchanser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnchanser(applyMiddleware(thunk))
);
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 869,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#61D5DF",
    },
    secondary: {
      main: "#49547D",
    },
  },
});
ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);
