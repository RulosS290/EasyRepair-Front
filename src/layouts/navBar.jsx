import NavItem from "./NavItem";
import menuItems from "../data/menuItem"
import logo from "../assets/img/easyrepair-mini.png";
import "../assets/css/NavBar.css"

const NavBar = () => {
  return (
    <header className="header">
      <nav className="flexNavBar">
        <ul className="flexNavBar__list left">
          <NavItem items={menuItems} />
        </ul>

        <div className="logo-container">
          <img src={logo} alt="EasyRepair" className="nav-logo" />
        </div>

        <ul className="flexNavBar__list right">
          <li className="logout">
            <button className="logout-button">🔄 Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;