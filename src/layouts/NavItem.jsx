import * as FaIcons from "react-icons/fa";

const NavItem = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        const IconComponent = FaIcons[item.icon];
        return (
          <li key={index} className="flexNavBar__list-item">
            <a href={item.link}>
              {IconComponent && <IconComponent size={32} color="#FD762F" />}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;
