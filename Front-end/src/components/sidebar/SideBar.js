import SideNav from "./SideNav";
import {makeStyles} from "@material-ui/core";

function SideBar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <SideNav/>
    </div>
  );
}

const useStyles = makeStyles({
  sidebar: {
    height: "100%",
    "&::webkit-scrollbar": {
      display: "none",
    },
  },
  "@media only screen and (max-width: 970px)": {
    sidebar: {
      display: "none",
    },
  },
});

export default SideBar;
