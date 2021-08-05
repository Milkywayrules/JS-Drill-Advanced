import { SearchIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import favicon64 from '../../assets/images/icons/L-logo-ori.png';
import { topNavbarItems } from './TopNavbarItems';

const handleSubmitForm = (
  e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  searchVal: string,
) => {
  e.preventDefault();
  console.log(searchVal);
};

interface Props {}

const TopNavbar: React.FC<Props> = ({}: Props) => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <header className="sticky top-0 ">
      <nav className="flex justify-between bg-gray-800 shadow-lg h-14">
        <div className="h-full w-21 focus-within:bg-gray-700 ">
          <NavLink
            to="/"
            className="flex w-full h-full"
            title="Lacrime logo"
            aria-label="Lacrime logo"
          >
            <img src={favicon64} alt="Topnavbar logo" className="w-12 h-12 m-auto" width="60px" />
          </NavLink>
        </div>
        <div className="flex items-center justify-between w-full px-10">
          <div className="w-3/12">
            <form
              className="flex items-center justify-between w-full h-full overflow-hidden bg-gray-700 rounded-md focus-within:bg-gray-600 focus-within:ring-2 focus-within:ring-orange-500"
              onSubmit={(e) => {
                handleSubmitForm(e, searchVal);
                setSearchVal('');
              }}
            >
              <input
                type="search"
                title="Search anime/manga"
                placeholder="Search"
                maxLength={50}
                value={searchVal}
                className="w-full h-full py-2 pl-4 focus:ring-transparent focus:bg-gray-600"
                onChange={(e) => setSearchVal(e.target.value)}
              />
              <button
                type="submit"
                title="Search anime/manga"
                tabIndex={-1}
                className="h-full ml-2 mr-4 text-orange-400 focus:bg-gray-600"
              >
                <SearchIcon className="w-6 h-6 " />
              </button>
            </form>
          </div>

          <ul className="flex items-center justify-around h-full gap-4">
            {topNavbarItems.map((item) => {
              return (
                <li className="flex" key={item.id}>
                  <button
                    role="button"
                    type="button"
                    title={item.title}
                    className={`p-2 rounded hover:bg-gray-700 ${item.overrideParentClass}`}
                  >
                    {item.children}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopNavbar;
