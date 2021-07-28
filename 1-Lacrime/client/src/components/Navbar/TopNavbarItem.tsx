import React from 'react';
import { NavLink } from 'react-router-dom';
import { Item } from '../../defs/topnavbar';

const TopNavbarItem: React.FC<Item> = ({ text, slug, children }: Item) => {
  if (children) {
    return (
      <li>
        {children.map((child) => (
          <NavLink className="text-orange-600 bg-red-300" key={child.id} to={child.slug}>
            {child.text}
          </NavLink>
        ))}
      </li>
    );
  } else {
    return (
      <li>
        <NavLink className="text-blue-800 bg-purple-100" to={slug}>s{text}</NavLink>
      </li>
    );
  }
};

export default TopNavbarItem;
