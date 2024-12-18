"use client";

import React from "react";
import { AdjustmentIcon, SearchIcon } from "../icons/icons";
import { colors } from "../utils";
import { followSuggestion } from "../temp/followSuggestion";
import { FollowSuggestion } from "../components/FollowSuggestion";

const Search: React.FC = () => {
  return (
    <div className="no-scrollbar fixed top-20 h-screen w-1/2 overflow-y-scroll rounded-tl-3xl rounded-tr-3xl border-xs border-b-0 border-borderLine bg-white pb-20 shadow">
      <div className="m-5 flex w-full flex-col">
        <div className="flex w-[94%] rounded-2xl border-xs border-borderLine">
          <div className="flex w-full items-center justify-center rounded-2xl bg-background">
            <div onClick={() => alert("Search Button")}>
              <SearchIcon className="ml-4 size-6" color={colors.grayIcon} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="ml-2 flex-grow bg-background p-2"
            />
            <div onClick={() => alert("Filter Button")}>
              <AdjustmentIcon className="mr-4 size-6" color={colors.grayIcon} />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <span className="text-sm font-medium text-textSecondary">
            Follow Suggestion
          </span>
        </div>
        <div className="mt-5 flex w-[94%] flex-col">
          {followSuggestion.map((item, index) => (
            <FollowSuggestion key={index} followSuggestion={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
