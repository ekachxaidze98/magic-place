import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Catalog from "./pages/Catalog";
import SideBar from "./components/sidebar/SideBar";
import { tokenCheckAction } from "./reducers/auth/authActions";
import { Grid, makeStyles } from "@material-ui/core";
import magicPlace from "./components/MagicPlace/MagicPlace";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [renderSideBar, setRenderSideBar] = useState(false);
  const { isLogged, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup"
    ) {
      setRenderSideBar(false);
    } else {
      setRenderSideBar(true);
    }
  }, [location, renderSideBar]);

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
      <Grid container className={classes.root}>
        {renderSideBar && (
          <Grid item className={classes.sidebar}>
            <SideBar />
          </Grid>
        )}
        <Grid container item className={renderSideBar ? classes.main : ""}>
          {isLogged ? (
            <Switch>
              <Route exact path="/">
                <Redirect to="/catalog" />
              </Route>

              <Route exact path="/catalog" component={Catalog} />
              <Route path="/list" component={magicPlace}></Route>
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
        </Grid>
      </Grid>
    </>
  );
}
const useStyles = makeStyles({
  root: {
    backgroundColor: "#F8F9FA",
    minHeight: "100vh",
    height: "100%",
    width: "100%",
  },
  sidebar: {
    width: "55px",
  },
  main: {
    width: "calc(100% - 55px)",
  },
  "@media only screen and (max-width: 970px)": {
    sidebar: {
      width: "0px",
    },
    main: {
      width: "100%",
    },
  },
});
export default App;
