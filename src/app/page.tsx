import Image from "next/image";
import avatar from "../public/avatar.jpg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-1/2 h-fit border-b-0 border-[1px] rounded-tl-xl rounded-tr-xl shadow border-black p-5 mt-20">
        <div className="w-full flex">
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
            className="ml-4 p-2 border-0 flex-grow"
          />
          <button className=" text-black rounded-md border-[1px] px-5 py-1 border-gray-200">
            <span className="font-bold">Post</span>
          </button>
        </div>
        <span className="text-4xl font-bold">Article</span>
      </div>
    </div>
  );
}
