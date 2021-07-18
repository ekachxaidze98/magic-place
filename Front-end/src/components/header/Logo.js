import logo from "../../images/logo.svg";
import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="sideBar__logo">
      <img className="sideBar__logoimg" src={logo} alt="" />
    </div>
  );
};

export default Logo;
