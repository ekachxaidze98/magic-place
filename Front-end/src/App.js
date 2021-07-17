import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog";
import { tokenCheckAction } from "./reducers/auth/authActions";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLogged, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && dispatch(tokenCheckAction(token));

    isLogged && history.push("/catalog");
    !isLogged && token && history.push("/login");

    //eslint-disable-next-line
  }, [isLogged]);

  if (isLoading) return null;
  return (
    <>
      {isLogged ? (
        <Switch>
          <Route exact path="/">
            <Redirect to="/catalog" />
          </Route>

          <Route exact path="/catalog" component={Catalog} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      )}
    </>
  );
}

export default App;
