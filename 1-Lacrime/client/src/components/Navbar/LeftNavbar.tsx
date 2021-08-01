import {
  HomeIcon,
  CubeTransparentIcon,
  CubeIcon,
  CogIcon,
  NewspaperIcon,
} from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface LeftMenus {
  id: number;
  text: string;
  icon: JSX.Element;
  attr: {
    to: string;
    exact?: boolean;
  };
}

const leftMenus: LeftMenus[] = [
  {
    id: 1,
    text: 'Home',
    icon: <HomeIcon className="w-6 h-6" />,
    attr: {
      to: '/',
      exact: true,
    },
  },
  {
    id: 2,
    text: 'Anime',
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    attr: { to: '/anime' },
  },
  {
    id: 3,
    text: 'Manga',
    icon: <CubeIcon className="w-6 h-6" />,
    attr: { to: '/manga' },
  },
  {
    id: 4,
    text: 'News',
    icon: <NewspaperIcon className="w-6 h-6" />,
    attr: { to: '/news' },
  },
  {
    id: 5,
    text: 'Settings',
    icon: <CogIcon className="w-6 h-6" />,
    attr: { to: '/settings' },
  },
  // {
  //   id: 6,
  //   text: 'Settings',
  //   to: '/settings',
  //   icon: <CogIcon className="w-6 h-6" />,
  // },
  // {
  //   id: 7,
  //   text: 'Settings',
  //   to: '/settings',
  //   icon: <CogIcon className="w-6 h-6" />,
  // },
  // {
  //   id: 8,
  //   text: 'Settings',
  //   to: '/settings',
  //   icon: <CogIcon className="w-6 h-6" />,
  // },
  // {
  //   id: 9,
  //   text: 'News',
  //   to: '/news',
  //   icon: <NewspaperIcon className="w-6 h-6" />,
  // },
  // {
  //   id: 10,
  //   text: 'News',
  //   to: '/news',
  //   icon: <NewspaperIcon className="w-6 h-6" />,
  // },
];

interface Props {}

const LeftNavbar: React.FC<Props> = ({}: Props) => {
  return (
    <nav
      id="leftNavbar"
      className="sticky top-0 w-20 h-screen px-1 py-4 overflow-y-auto text-gray-400 bg-gray-800 shadow-lg"
    >
      <ul className="flex flex-col gap-2">
        {leftMenus.map((menu) => {
          return (
            <li key={menu.id}>
              <NavLink
                {...menu.attr}
                className="flex flex-col items-center w-full py-4 text-center rounded bg-gradient-to-br hover:from-yellow-500 hover:to-orange-600 hover:text-white"
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
