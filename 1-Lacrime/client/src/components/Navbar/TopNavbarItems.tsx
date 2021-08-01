import { BellIcon, MailIcon } from '@heroicons/react/solid';
import NavbarProfileAva from '../../assets/images/avatars/ava2.jpg';

interface TopNavbarItems {
  id: number;
  children?: JSX.Element | HTMLElement;
  overrideParentClass?: string;
}

const iconSize = 'w-6 h-6';

export const topNavbarItems: TopNavbarItems[] = [
  {
    id: 1,
    children: <MailIcon className={iconSize} />,
  },
  {
    id: 2,
    children: <BellIcon className={iconSize} />,
  },
  {
    id: 3,
    overrideParentClass: 'py-1',
    children: (
      <div className="flex items-center mx-1">
        <div className="flex flex-col mr-2">
          <span className="text-sm font-normal tracking-wide text-gray-300">Fathia Izzati</span>
        </div>
        <div>
          <img
            src={NavbarProfileAva}
            alt="Navbar Profile avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    ),
  },
];
