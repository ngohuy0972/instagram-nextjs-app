"use client";

import React, { useState } from "react";
import {
  HeartIcon,
  HeartSolidIcon,
  HomeIcon,
  HomeSolidIcon,
  LogoutIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
  UserSolidIcon,
} from "../icons/icons";
import { colors } from "../utils";
import logo from "../../public/logo.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import CreatePostModal from "./CreatePostModal";

export const Sidebar: React.FC = () => {
  const route = useRouter();
  const path = usePathname();
  const isHomeTab = path === "/";
  const isSearchTab = path === "/search";
  const isCreatePostTab = path === "/post";
  const isNotificationTab = path === "/notification";
  const isProfileTab = path === "/profile";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar fixed left-0 top-0 flex h-screen w-24 flex-col items-center">
      <div className="p-6">
        <Image
          src={logo}
          alt="logo"
          width={30}
          height={30}
          onClick={() => route.replace("/")}
        />
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <ul className="w-full">
          <li
            className={`my-4 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-100`}
            onClick={() => route.replace("/")}
          >
            {isHomeTab ? (
              <HomeSolidIcon className="size-7" />
            ) : (
              <HomeIcon
                color={colors.grayIcon}
                className="size-7"
                strokeWidth={2.5}
              />
            )}
          </li>
          <li
            className={`my-4 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-100`}
            onClick={() => route.replace("/search")}
          >
            <SearchIcon
              color={isSearchTab ? colors.black : colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          <li
            className="my-4 rounded-lg bg-gray-100 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-200"
            onClick={() => setIsOpen(true)}
          >
            <PlusIcon
              color={isCreatePostTab ? colors.black : colors.grayIcon}
              className="size-7"
              strokeWidth={2.5}
            />
          </li>
          {isOpen && <CreatePostModal callback={() => setIsOpen(false)} />}
          <li
            className={`my-4 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-100`}
            onClick={() => route.replace("/notification")}
          >
            {isNotificationTab ? (
              <HeartSolidIcon className="size-7" />
            ) : (
              <HeartIcon
                color={colors.grayIcon}
                className="size-7"
                strokeWidth={2.5}
              />
            )}
          </li>
          <li
            className={`my-4 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-100`}
            onClick={() => route.replace("/profile")}
          >
            {isProfileTab ? (
              <UserSolidIcon className="size-7" />
            ) : (
              <UserIcon
                color={colors.grayIcon}
                className="size-7"
                strokeWidth={2.5}
              />
            )}
          </li>
        </ul>
      </div>
      <div
        className={`my-4 p-4 hover:scale-105 hover:rounded-lg hover:bg-gray-100`}
      >
        <LogoutIcon
          color={colors.grayIcon}
          className="size-7"
          strokeWidth={2.5}
        />
      </div>
    </div>
  );
};
