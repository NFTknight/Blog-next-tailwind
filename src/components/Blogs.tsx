import Image from "next/image";
import BlogNavItem from "./blogNavItem";
import ellipse from "@/assets/Imgs/ellipse.png";
import frame from "@/assets/Imgs/frame.png";

export default function Blogs() {
  return (
    <div className="flex flex-col text-center mlg:text-start items-center justify-between px-5 sm:px-16 xl:px-28">
      <div
        className="flex md:flex-row md:justify-between sm:flex-col sm:justify-center xsm:flex-col xsm:justify-center w-full"
      >
        <div
          className="text-[#344054] font-['Helvetica Now Display'] font-bold
                        2xl:w-[622.555px] 2xl:text-[64px]
                        xl:w-[500px] xl:text-[64px]
                        lg:w-[150px]
                        md:w-[150px] md:text-[52px]
                        sm:w-fit
                        xsm:w-fit text-[45px] "
        >
          Blogs
        </div>
        <div
          className="flex flex-wrap
                        2xl:flex-row 2xl:items-center 2xl:justify-between
                        xl:flex-row xl:items-center xl:justify-between
                        lg:flex-row lg:items-center lg:justify-between
                        md:flex-row md:items-center md:justify-between
                        sm:flex-row sm:items-center sm:justify-between
                        xsm:flex-row xsm:items-center xsm:justify-center gap-2"
        >
          <BlogNavItem name="All Blogs" isClicked={true} />
          <BlogNavItem name="Trends" isClicked={false} />
          <BlogNavItem name="Research" isClicked={false} />
          <BlogNavItem name="In-house Knowledge" isClicked={false} />
        </div>
      </div>
      <div className="xl:mt-[64px] lg:mt-[50px] xsm:mt-[30px]">
        <div
          className="flex 
                        2xl:flex-row 2xl:justify-between 2xl:items-center
                        xl:flex-row xl:justify-between xl:items-center
                        lg:flex-row lg:justify-between lg:items-center
                        md:flex-row md:justify-between md:items-center
                        sm:flex-col sm:justify-between sm:items-center
                        xsm:flex-col xsm:justify-between xsm:items-center 
                      bg-[#F8F8F8] border-[10px] rounded-[24px] border-white 
                        2xl:h-[540px]
                        xl:h-[450px]
                        lg:h-[450px]"
        >
          <div
            className="flex flex-col justify-center items-center bg-center bgImg
                          2xl:bg-gradient-to-b 2xl:from-white 2xl:to-[#F4F4F4] 2xl:w-[50%] 2xl:h-[100%]
                          xl:w-[50%] xl:h-[100%] xl:bg-gradient-to-b xl:from-white xl:to-[#F4F4F4]
                          lg:w-[50%] lg:h-[100%] lg:bg-gradient-to-b lg:from-white lg:to-[#F4F4F4]
                          md:w-full md:h-[400px]
                          sm:w-full sm:h-[400px]
                          xsm:w-full xsm:h-[300px]
                          rounded-tl-[24px] rounded-bl-[24px]"
          >
            <Image
              src={frame}
              alt="frame"
              className="md:w-[80%]
                        sm:w-[300px]
                        xsm:w-[200px]"
            />
          </div>
          <div
            className="flex flex-col 
                          2xl:p-[85px] 2xl:w-[50%]
                          xl:p-[64px] xl:w-[50%]
                          lg:p-[64px] lg:w-[50%]
                          md:p-[40px] md:w-[50%] md:h-[400px]
                          sm:p-[40px] sm:w-full sm:h-[400px]
                          xsm:p-[30px] xsm:w-full xsm:h-[350px]"
          >
            <div
              className="flex flex-row justify-start items-center 
                            2xl:w-full 2xl:text-[14px] 
                            xl:text-[14px]
                            lg:text-[14px]
                            md:text-[12px]
                            sm:text-[14px]
                            xsm:text-[14px]"
            >
              <div>FREELANCING 101</div>
              <Image
                src={ellipse}
                alt="ellipse"
                className="ml-[16px] mr-[16px]"
              />
              <div>William George</div>
            </div>
            <div
              className="text-[#344054] font-['Helvetica Now Display']
                             mt-[20px] 
                             2xl:w-full 2xl:text-[40px] 2xl:leading-[80px] 
                             xl:w-[420px] xl:text-[30px] xl:leading-[50px]
                             lg:w-[300px] lg:text-[30px] lg:leading-[40px]
                             md:w-[200px] md:text-[25px] md:leading-[30px]
                             sm:w-full sm:text-[25px] sm:leading-[30px]
                             xsm:w-full xsm:text-[25px] xsm:leading-[30px]"
            >
              07 Ways to get Consistent Clients from Social Media
            </div>
            <div
              className="flex flex-row justify-start items-center
                            2xl:w-full 2xl:text-[14px] 2xl:mt-[97px]
                            xl:text-[14px] xl:mt-[97px]
                            lg:text-[14px] lg:mt-[97px]
                            md:text-[12px] md:mt-[97px]
                            sm:text-[12px] sm:mt-[40px]
                            xsm:text-[14px] xsm:mt-[40px]"
            >
              <div>15 Min Read</div>
              <Image
                src={ellipse}
                alt="ellipse"
                className="ml-[16px] mr-[16px]"
              />
              <div>23-05-2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
