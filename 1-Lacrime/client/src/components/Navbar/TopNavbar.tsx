import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import favicon64 from '../../assets/images/icons/L-logo-ori.png';
import { topNavbarItems } from './TopNavbarItems';

interface Props {}

const TopNavbar: React.FC<Props> = ({}: Props) => {
  const handleSubmitForm = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.currentTarget);
  };

  return (
    <header className="sticky top-0 ">
      <nav className="flex justify-between bg-gray-800 shadow-lg h-14">
        <div className="h-full w-21 focus-within:bg-gray-700 ">
          <a href="#" className="flex w-full h-full">
            <img src={favicon64} alt="Topnavbar logo" className="w-12 h-12 m-auto" width="60px" />
          </a>
        </div>
        <div className="flex items-center justify-between w-full px-10">
          <div className="w-3/12">
            <form
              className="flex items-center justify-between w-full h-full overflow-hidden bg-gray-700 rounded-md focus-within:bg-gray-600 focus-within:ring-2 focus-within:ring-orange-500"
              onSubmit={(e) => {
                handleSubmitForm(e);
              }}
            >
              <input
                type="search"
                placeholder="Search"
                className="w-full h-full py-2 pl-4 focus:ring-transparent focus-within:bg-gray-600"
              />
              <button
                type="submit"
                tabIndex={-1}
                className="h-full ml-2 mr-4 text-orange-400"
                onClick={(e) => {
                  handleSubmitForm(e);
                }}
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
                    type="button"
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
