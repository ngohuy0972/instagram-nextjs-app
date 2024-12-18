"use client";

import React, { useState } from "react";
import { ChevronUpIcon } from "../icons/icons";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const path = usePathname();
  const [openDropdown, setOpenDropDown] = useState(false);

  function handleClick() {
    setOpenDropDown(!openDropdown);
  }

  const handleHeaderTitle = () => {
    switch (path) {
      case "/":
        return "Home";
      case "/search":
        return "Search";
      case "/post":
        return "Create Post";
      case "/notification":
        return "Notification";
      case "/profile":
        return "Profile";
      default:
        return "Header";
    }
  };

  return (
    <header className="z-50">
      <div className="fixed top-0 inline-block h-10 w-full p-6 text-left">
        <div className="flex flex-row justify-center">
          <span className="mr-4 text-lg font-bold">{handleHeaderTitle()}</span>
          <div className="hover:scale-110" onClick={handleClick}>
            <div
              className={`transform transition-transform duration-300 ${
                openDropdown ? "rotate-0" : "-rotate-180"
              } rounded-full border-[1px] border-gray-300 bg-white p-1 shadow-md`}
            >
              <ChevronUpIcon className="size-4" strokeWidth={3} />
            </div>
          </div>
          <div
            className={`ease-custom transform transition duration-500 ${
              openDropdown
                ? "translate-y-0 scale-y-100 opacity-100"
                : "-translate-y-1/2 scale-y-0 opacity-0"
            }`}
          >
            {openDropdown && (
              <div
                className="z-1000 absolute -left-32 mt-10 w-40 rounded-lg bg-white shadow-lg focus:outline-none"
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
        </div>
      </div>
    </header>
  );
};

export default Header;
