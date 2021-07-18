import "./SideNav.css";
import Logo from "../header/Logo";
import NavLinks from "../header/NavLinks";

const SideNav = (props) => {
  return (
    <div className="SideBar__nav">
      <Logo/>
      <NavLinks/>
    </div>
  )
}

export default SideNav;
