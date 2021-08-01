import React from 'react';
import { NavLink } from 'react-router-dom';
import { leftNavbarItems } from './LeftNavbarItems';

interface Props {}

const LeftNavbar: React.FC<Props> = ({}: Props) => {
  return (
    <nav
      id="leftNavbar"
      className="sticky top-0 flex-shrink-0 w-20 h-screen px-1 overflow-y-auto text-gray-400 bg-gray-800 shadow-lg"
    >
      <ul className="flex flex-col gap-2">
        {leftNavbarItems.map((menu) => {
          return (
            <li key={menu.id}>
              <NavLink
                {...menu.attribute}
                className="flex flex-col items-center w-full py-3 text-center rounded bg-gradient-to-br hover:from-yellow-500 hover:to-orange-600 hover:text-white"
                activeClassName="text-white bg-gradient-to-br from-yellow-500 to-orange-600"
              >
                {menu.icon}
                {menu.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftNavbar;
