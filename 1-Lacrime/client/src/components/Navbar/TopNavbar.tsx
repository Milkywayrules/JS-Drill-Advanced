import React from 'react';
import TopNavbarItem from './TopNavbarItem';
import { Item } from '../../defs/topnavbar';

interface Props {
  items: Item[];
}

const TopNavbar: React.FC<Props> = ({ items }: Props) => {
  return (
    <header>
      <nav>
        <ul>
          {items.map((item) => (
            <TopNavbarItem key={item.id} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default TopNavbar;
