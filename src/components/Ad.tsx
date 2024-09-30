import Image from "next/image";
import frame from "@/assets/Imgs/Union.svg";

export const Ad = () => {
  return (
    <article className="w-full overflow-hidden h-[40.625rem] sm:h-[30rem] xxl:h-[41.5rem] rounded-[1.5rem] bg-gradientIII mt-[6.31rem] flex flex-col justify-between items-start">
      <div className="w-full h-[3.85rem] sm:h-[6rem] xxl:h-[7.62rem] relative top-0">
        <Image src={frame} alt="header image" fill objectFit="cover" />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:pl-[9.38rem] sm:pr-[5.94rem] w-full  h-full">
        <div className="max-w-[18.4rem] sm:max-w-[34.375rem] xxl:max-w-[47.67594rem] text-white w-full">
          <h6 className="lg:text-[4rem] text-[2.5rem] xxl:text-[6rem] tracking-[0.025rem] sm:-tracking-[0.04rem] xxl:-tracking-[0.06rem]">
            <span className="font-normal leading-[3rem]  xxl:leading-[7.2rem]">
              Transforming your
            </span>{" "}
            <span className="font-bold leading-[3rem] sm:leading-[6.875rem]">
              Ideas into reality
            </span>
          </h6>
          <p className="text-base sm:text-xl xxl:text-2xl font-medium leading-[1.875rem] xxl:leading-9 tracking-[0.0125rem] xxl:tracking-[0.015rem]">
            Let&rsquo;s build something extraordinary together to captivate your
            audience.
          </p>
        </div>
        <div className="border-2 border-whiteII w-[15.5625rem] xl:w-[25rem] h-[15.5625rem] xl:h-[25rem] rounded-full flex items-center justify-center">
          <p className="text-whiteII text-2xl xxl:text-[2rem] font-medium w-[7.59375rem] xxl:w-[10.1675rem]">
            Let&rsquo;s Work Together!
          </p>
        </div>
      </div>
      <div className="w-full h-[3.85rem] sm:h-[6rem] xxl:h-[7.62rem] relative bottom-0 transform rotate-180">
        <Image src={frame} alt="header image" fill objectFit="cover" />
      </div>
    </article>
  );
};
