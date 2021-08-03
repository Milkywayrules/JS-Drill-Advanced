import {
  HomeIcon,
  CubeTransparentIcon,
  CubeIcon,
  NewspaperIcon,
  CogIcon,
  ChipIcon,
} from '@heroicons/react/solid';

interface LeftNavbarItems {
  id: number;
  text: string;
  icon: JSX.Element;
  attribute: {
    to: string;
    title: string;
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
      title: 'Go to Home page',
      exact: true,
    },
  },
  {
    id: 2,
    text: 'Anime',
    icon: <CubeTransparentIcon className={iconSize} />,
    attribute: {
      to: '/anime',
      title: 'Go to Anime page',
    },
  },
  {
    id: 3,
    text: 'Manga',
    icon: <CubeIcon className={iconSize} />,
    attribute: {
      to: '/manga',
      title: 'Go to Manga page',
    },
  },
  {
    id: 4,
    text: 'News',
    icon: <NewspaperIcon className={iconSize} />,
    attribute: {
      to: '/news',
      title: 'Go to News page',
    },
  },
  {
    id: 5,
    text: 'Settings',
    icon: <CogIcon className={iconSize} />,
    attribute: {
      to: '/settings',
      title: 'Go to Settings page',
    },
  },
  {
    id: 6,
    text: 'Graphql',
    icon: <ChipIcon className={iconSize} />,
    attribute: {
      to: '/graphql',
      title: 'Go to Graphql playground page',
    },
  },
];
