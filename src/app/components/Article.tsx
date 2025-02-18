import Image, { StaticImageData } from "next/image";
import React from "react";
import { CommentIcon, HeartIcon, RepostIcon } from "../icons/icons";

interface ArticleProps {
  title: string;
  content: string;
  author_avatar: StaticImageData;
  author: string;
  date: string;
  photos: StaticImageData[];
  likes: number;
  reposts: number;
  comments: number;
}

export const Article: React.FC<{ article: ArticleProps }> = ({ article }) => {
  const isPhotos = article.photos.length > 1;
  return (
    <div className="flex flex-row border-b-xs border-borderLine p-5">
      {/* Avatar author */}
      <div className="">
        <Image
          className="rounded-full p-2"
          src={article.author_avatar}
          alt="avatar"
          height={35}
          width={40}
        />
      </div>
      {/* Article */}
      <div className="w-full px-3">
        <div className="flex w-full flex-row">
          <span className="flex-grow text-sm font-medium">
            {article.author} {" . "}
            <span className="text-[11px] font-medium text-textSecondary">
              {article.date}
            </span>
          </span>
          <div className="-mt-2 font-bold" onClick={() => alert("clicked")}>
            ...
          </div>
        </div>
        <div>
          <div className="my-2 text-xs">{article.content}</div>
          <div className="no-scrollbar flex overflow-x-scroll rounded-lg">
            {article.photos.map((photo, index) => {
              return (
                <div key={index} className="flex-shrink-0">
                  <Image
                    className="mr-2 rounded-lg"
                    src={photo}
                    alt="photo"
                    width={isPhotos ? 250 : 300}
                    height={200}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row pt-4">
          <div className="mr-5 flex flex-row items-center">
            <HeartIcon className="size-5" strokeWidth={1.5} />
            <span className="ml-1 text-xs">{article.likes}</span>
          </div>
          <div className="mr-5 flex flex-row items-center">
            <CommentIcon className="size-5" strokeWidth={1.5} />
            <span className="ml-1 text-xs">{article.comments}</span>
          </div>
          <div className="mr-5 flex flex-row items-center">
            <RepostIcon className="size-5" strokeWidth={1.5} />
            <span className="ml-1 text-xs">{article.reposts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
