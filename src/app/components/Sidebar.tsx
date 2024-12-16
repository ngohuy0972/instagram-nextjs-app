import React from "react";
import {
  HeartIcon,
  HomeIcon,
  LogoutIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "../icons/icons";
import { colors } from "../utils";
import logo from "../../public/logo.png";
import Image from "next/image";

export const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col items-center sidebar w-24 h-screen fixed top-0 left-0">
      <div className="p-6">
        <Image src={logo} alt="logo" width={30} height={30} />
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <ul className="w-full">
          <li className="  hover:scale-105 p-4 my-4 hover:bg-gray-100 hover:rounded-lg">
            <HomeIcon
              color={colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          <li className="   hover:scale-105 p-4 my-4 hover:bg-gray-100 hover:rounded-lg">
            <SearchIcon
              color={colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          <li className=" bg-gray-100 rounded-lg  hover:scale-105 p-4 my-4 hover:bg-gray-200 hover:rounded-lg">
            <PlusIcon
              color={colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          <li className="   hover:scale-105 p-4 my-4 hover:bg-gray-100 hover:rounded-lg">
            <HeartIcon
              color={colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          <li className="   hover:scale-105 p-4 my-4 hover:bg-gray-100 hover:rounded-lg">
            <UserIcon
              color={colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
        </ul>
      </div>
      <div className=" hover:scale-105 p-4 my-4  hover:bg-gray-100 hover:rounded-lg">
        <LogoutIcon
          color={colors.grayIcon}
          className="size-7"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
};
