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
    <div className="flex flex-row p-5 border-b-xs border-borderLine">
      {/* Avatar author */}
      <div className="">
        <Image
          className="rounded-full"
          src={article.author_avatar}
          alt="avatar"
          height={35}
          width={40}
        />
      </div>
      {/* Article */}
      <div className="w-full px-3">
        <div className="flex w-full flex-row">
          <span className="font-medium text-sm flex-grow ">
            {article.author} {" . "}
            <span className="font-medium text-[11px] text-textSecondary ">
              {article.date}
            </span>
          </span>
          <div className="font-bold -mt-2" onClick={() => alert("clicked")}>
            ...
          </div>
        </div>
        <div>
          <div className="text-xs my-2 ">{article.content}</div>
          <div className="flex overflow-x-scroll no-scrollbar rounded-lg">
            {article.photos.map((photo, index) => {
              return (
                <div key={index} className="flex-shrink-0 ">
                  <Image
                    className="rounded-lg mr-2"
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
        <div className="pt-4 flex flex-row">
          <div className="flex flex-row mr-5 items-center">
            <HeartIcon className="size-5" strokeWidth={1.5} />
            <span className="text-xs ml-1">{article.likes}</span>
          </div>
          <div className="flex flex-row mr-5 items-center">
            <CommentIcon className="size-5" strokeWidth={1.5} />
            <span className="text-xs ml-1">{article.comments}</span>
          </div>
          <div className="flex flex-row mr-5 items-center">
            <RepostIcon className="size-5" strokeWidth={1.5} />
            <span className="text-xs ml-1">{article.reposts}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
