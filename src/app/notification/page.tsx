"use client";

import React from "react";
import { notifications } from "../temp/notification";
import { NotificationComponent } from "./notification";

const Notification: React.FC = () => {
  return (
    <div className="no-scrollbar fixed top-20 h-screen w-1/2 rounded-tl-3xl rounded-tr-3xl border-xs border-b-0 border-borderLine bg-white pb-20 shadow">
      <div className="m-5 flex w-full flex-col">
        <div className="mt-5 flex flex-col">
          <span className="text-sm font-medium text-textSecondary">
            Follow Suggestion
          </span>
        </div>
        <div className="mt-5 flex w-[94%] flex-col">
          {notifications.map((item, index) => (
            <NotificationComponent key={index} notification={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
