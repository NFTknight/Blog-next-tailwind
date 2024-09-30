import Image from "next/image";
import union from "@/assets/Imgs/Union.svg";
import aIcon from "@/assets/Imgs/nav_icons/A.png";
import basil from "@/assets/Imgs/nav_icons/basil_menu-solid.png";
import macBook from "@/assets/Imgs/MacBook.png";
import Card from "@/components/Card";
import data from "@/data.json";

export const MainBlog = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-neutral-50 font-halve">
      <div className="absolute">
        <Image src={union} alt="union" className="h-[100px] object-cover" />
      </div>
      <div className="flex w-32 h-16 xl:w-44 xl:h-20 rounded-full bg-white border-[1px] border-border mt-8 z-20 ">
        <div className=" w-1/2 flex h-full justify-center items-center p-2 cursor-pointer">
          <Image src={aIcon} alt="aIcon" />
        </div>
        <div className="w-[1px] bg-border h-full"></div>
        <div className=" w-1/2 flex h-full justify-center items-center p-2 cursor-pointer">
          <Image src={basil} alt="basil" />
        </div>
      </div>
      <div className="mt-8 px-2 sm:px-20 xl:px-36">
        <div className="flex flex-col mlg:flex-row text-center mlg:text-start">
          <div className="mlg:w-1/2 text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl leading-[50px] xl:leading-[70px] 2xl:leading-[96px] font-bold text-neutral-700 flex justify-center items-center">
            Atlas Premier Knowledge Blogs:
          </div>
          <div className="mlg:w-1/2 text-lg sm:text-xl xl:text-2xl 2xl:text-3xl font-medium text-neutral-500 py-10 mlg:pl-16 flex justify-center items-center">
            "Immerse yourself in the latest knowledge and research from our team
            of software engineers and design professionals.
          </div>
        </div>
        <div className="flex mt-8 rounded-2xl bg-white">
          <div className="flex flex-col mlg:flex-row rounded-2xl m-2 bg-neutral-50">
            <div className="mlg:w-1/2">
              <Image
                src={macBook}
                alt="macBook"
                className="rounded-t-2xl mlg:rounded-tr-none mlg:rounded-l-2xl"
              />
            </div>
            <div className="text-center mlg:text-start mlg:w-1/2 p-3 xs:p-7 2xl:p-14 flex flex-col justify-between max-h-full h-250px xs:h-[300px] md:h-[32 0px] mlg:h-auto">
              <div className="font-medium">
                <div className="flex items-center justify-center mlg:justify-start text-sm lg:text-md xl:text-xl text-neutral-500  ">
                  FREELANCING 101
                  <div className=" w-2 h-2 rounded-md bg-neutral-500 mx-2 xs:mx-4" />
                  Joseph Patrick
                </div>
                <div className="mt-4 text-neutral-700 leading-8 lg:leading-[50px] xl:leading-[60px] 2xl:leading-[60px] text-xl sm:text-4xl mlg:text-3xl xl:text-4xl 2xl:text-5xl ">
                  07 Ways to get Consistent Clients from Social Media
                </div>
              </div>
              <div className="mt-5 mlg:mt-0 flex items-center justify-center mlg:justify-start text-sm lg:text-md xl:text-xl font-medium text-neutral-500 ">
                F15 Min Read
                <div className=" w-2 h-2 rounded-md bg-neutral-500 mx-2 xs:mx-4" />
                23 - 05 -2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rotate-180">
        <Image src={union} alt="union" className="h-[100px] object-cover" />
      </div>
    </div>
  );
};
