import { BellIcon, MailIcon } from '@heroicons/react/solid';
import NavbarProfileAva from '../../assets/images/avatars/ava2.jpg';

interface TopNavbarItems {
  id: number;
  name: string;
  title: string;
  children?: JSX.Element | HTMLElement;
  overrideParentClass?: string;
}

const iconSize = 'w-6 h-6';

export const topNavbarItems: TopNavbarItems[] = [
  {
    id: 1,
    name: 'MessagesButton',
    title: 'Recent Messages',
    children: <MailIcon aria-label="Messages" className={iconSize} />,
  },
  {
    id: 2,
    name: 'NotificationsButton',
    title: 'Recent Notifications',
    children: <BellIcon aria-label="Notifications" className={iconSize} />,
  },
  {
    id: 3,
    name: 'ProfileButton',
    title: 'Profile Menu',
    overrideParentClass: 'py-1',
    children: (
      <div className="flex items-center mx-1">
        <div className="flex flex-col mr-2">
          <span className="text-sm font-normal tracking-wide text-gray-300">Fathia Izzati</span>
        </div>
        <div>
          <img
            src={NavbarProfileAva}
            alt="Navbar Profile Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    ),
  },
];
