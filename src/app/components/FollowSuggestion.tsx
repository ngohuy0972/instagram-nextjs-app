import Image, { StaticImageData } from "next/image";
import React from "react";

interface FollowSuggestionProps {
  name: string;
  author_avatar: StaticImageData;
  author: string;
  description: string;
  follower: number;
}

export const FollowSuggestion: React.FC<{
  followSuggestion: FollowSuggestionProps;
}> = ({ followSuggestion }) => {
  return (
    <div className="flex flex-row border-b-xs border-borderLine py-2">
      {/* Avatar author */}
      <div className="mt-2">
        <Image
          className="h-10 w-10 rounded-full p-2"
          src={followSuggestion.author_avatar}
          alt="avatar"
        />
      </div>
      {/* followSuggestion */}
      <div className="w-full flex-row px-3">
        <div className="flex w-full flex-grow flex-row">
          <div className="flex flex-col">
            <span className="flex-grow text-sm font-medium">
              {followSuggestion.author}
            </span>
            <span className="text-sm font-medium text-textSecondary">
              {followSuggestion.name}
            </span>
            <div className="my-2 w-3/4 text-xs">
              {followSuggestion.description}
            </div>
            <span className="text-[11px] font-medium text-textSecondary">
              {followSuggestion.follower} followers
            </span>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="z-10 rounded-lg border-xs border-borderLine bg-white px-5 py-1 text-center text-sm font-medium sm:mt-0 sm:w-auto"
              onClick={() => alert("Follow")}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
