"use client";

import React, { useState } from "react";
import { ChevronUpIcon } from "../icons/icons";

const Header: React.FC = () => {
  const [openDropdown, setOpenDropDown] = useState(false);

  function handleClick() {
    setOpenDropDown(!openDropdown);
  }

  return (
    <header className="">
      <div className=" fixed inline-block text-left w-full h-10 p-6">
        <div className="flex flex-row justify-center">
          <span className="mr-4 font-bold text-lg"> Header</span>
          <div className="hover:scale-110" onClick={handleClick}>
            <div
              className={`transform transition-transform duration-300 ${
                openDropdown ? "rotate-0" : "-rotate-180"
              } border-[1px] border-gray-300 shadow-md bg-white rounded-full p-1`}
            >
              <ChevronUpIcon className="size-4" strokeWidth={3} />
            </div>
          </div>
          <div
            className={`transform transition duration-500 ease-custom ${
              openDropdown
                ? "translate-y-0 scale-y-100 opacity-100"
                : "-translate-y-1/2 scale-y-0 opacity-0"
            }`}
          >
            {openDropdown && (
              <div
                className="absolute -left-32 z-1000 mt-10 w-40 rounded-lg bg-white shadow-lg  focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    For you
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Following
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Liked
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Saved
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* {openDropdown && (
            <div
              className="absolute z-10 mt-10 w-40 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none transform translate-y-2 duration-500"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                >
                  For you
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                >
                  Following
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Liked
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-2"
                >
                  Saved
                </a>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
