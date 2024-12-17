"use client";

import Image from "next/image";
import avatar from "../public/avatar.jpg";
import { Article } from "./components/Article";
import { articles } from "./temp/article";

export default function Home() {
  return (
    <div className="fixed w-1/2 border-b-0 border-xs rounded-tl-3xl rounded-tr-3xl shadow border-borderLine top-20 pb-20 overflow-y-scroll no-scrollbar h-screen">
      <div className="w-full flex border-b-xs border-borderLine flex-col">
        <div className="w-full flex p-5 border-b-[1px] border-borderLine">
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
            height={35}
            width={40}
          />
          <input
            type="text"
            placeholder="What's new?"
            className="ml-4 z-10 p-2 border-0 flex-grow"
          />
          <button className=" text-black rounded-xl border-[0.5px] px-4 py-1/2 border-borderLine">
            <span className="font-bold">Post</span>
          </button>
        </div>
        <div className="flex flex-col">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
