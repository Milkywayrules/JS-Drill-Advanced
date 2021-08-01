import {
  HomeIcon,
  CubeTransparentIcon,
  CubeIcon,
  NewspaperIcon,
  CogIcon,
} from '@heroicons/react/solid';

interface LeftNavbarItems {
  id: number;
  text: string;
  icon: JSX.Element;
  attribute: {
    to: string;
    exact?: boolean;
  };
}

const iconSize = 'w-6 h-6';

export const leftNavbarItems: LeftNavbarItems[] = [
  {
    id: 1,
    text: 'Home',
    icon: <HomeIcon className={iconSize} />,
    attribute: {
      to: '/',
      exact: true,
    },
  },
  {
    id: 2,
    text: 'Anime',
    icon: <CubeTransparentIcon className={iconSize} />,
    attribute: { to: '/anime' },
  },
  {
    id: 3,
    text: 'Manga',
    icon: <CubeIcon className={iconSize} />,
    attribute: { to: '/manga' },
  },
  {
    id: 4,
    text: 'News',
    icon: <NewspaperIcon className={iconSize} />,
    attribute: { to: '/news' },
  },
  {
    id: 5,
    text: 'Settings',
    icon: <CogIcon className={iconSize} />,
    attribute: { to: '/settings' },
  },
];
