import {NavLink} from "react-router-dom";
import "./NavLink.css";
import {NavLinkIcons} from "./NavLinkIcons";
import Icon from "@material-ui/core/Icon";

const NavLinks = (props) => {
    return (
        <ul className="SideBar__list">
            {NavLinkIcons.map((icon, index) => (
                <li key={index} className="SideBar__list--item">
                    <NavLink to={`/${icon.path}`} className="SideBar__list--itemLink" activeClassName="activeNav">
                        <Icon className="iconolor">{icon.iconName}</Icon>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
export default NavLinks;
