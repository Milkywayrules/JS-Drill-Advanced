import React from 'react';
import { NavLink } from 'react-router-dom';
import favicon64 from '../../assets/images/icons/L-logo-ori.png';

interface Props {}

const TopNavbar: React.FC<Props> = ({}: Props) => {
  return (
    <header className="sticky top-0 ">
      <nav className="flex bg-gray-800 shadow-lg h-14">
        <div className="w-20 h-full">
          <a href="#" className="flex w-full h-full">
            <img src={favicon64} alt="Topnavbar logo" className="w-12 h-12 m-auto" width="60px" />
          </a>
        </div>
        <ul className="flex justify-around w-3/12 h-full ml-auto">
          <li className="flex">
            <NavLink to="/" className="px-6 py-3 hover:bg-orange-500">
              Messages
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/" className="px-6 py-3 hover:bg-orange-500">
              Notif
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/" className="px-6 py-3 hover:bg-orange-500">
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
  // return (
  //   <header>
  //     <nav>
  //       <ul>
  //         {items.map((item) => (
  //           <TopNavbarItem key={item.id} {...item} />
  //         ))}
  //       </ul>
  //     </nav>
  //   </header>
  // );
};

export default TopNavbar;
