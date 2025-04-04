import * as FaIcons from "react-icons/fa";
import NavItem from "./NavItem";
import { menuItems, authMenuItems} from "../data/menuItem"
import logo from "../assets/img/easyrepair-mini.png";
import "../assets/css/NavBar.css"

const NavBar = () => {
  const isLogging = true;

  const visibleAuthItems = isLogging
    ? [authMenuItems[2]]
    : authMenuItems.slice(0, 2);

  return (
    <header className="header">
      <nav className="flexNavBar">
        <ul className="flexNavBar__list left">
          {isLogging && <NavItem items={menuItems} />}
        </ul>

        <div className="logo-container">
          <img src={logo} alt="EasyRepair" className="nav-logo" />
        </div>

        <ul className="flexNavBar__list right">
          {visibleAuthItems.map(({ icon, link, text }) => {
            const IconComponent = FaIcons[icon];
            return (
              <li key={link} className="auth">
                <a href={link} className="auth-button">
                  <IconComponent size={22} color="#FFF" />
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};


export default NavBar;