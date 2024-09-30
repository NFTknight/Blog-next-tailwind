import Image from "next/image";
import frame1 from "@/assets/Imgs/no_color_icons/Frame 1249187158.png"
import frame2 from "@/assets/Imgs/no_color_icons/Frame 1249187159.png"
import frame3 from "@/assets/Imgs/no_color_icons/Frame 1249187160.png"
import frame4 from "@/assets/Imgs/no_color_icons/Frame 1249187161.png"

export const Footer = () => {
  return (
    <div className="flex p-12 bg-[#294f74] ">
      <div
        className="relative bg-white w-full h-[500px]  rounded-[48px] flex flex-col md:p-10"
        style={{ background: "white" }}
      >
        <div className="md:p-12 bg-white rounded-[48px] flex flex-col">
          <div className="md:flex p-6">
            <div className="md:flex-row">
              <div className="flex-col m-2 font-bold text-3xl xxs:text-center sm:text-center">
                Say Hello!
              </div>
              <div className="flex-col  m-2 xxs:text-center sm:text-center">
                Atlaspremier@gmail.com
              </div>
              <div className="flex-col">
                <div className="flex sm:justify-between xxs:justify-center   sm:mx-16 md:flex-wrap">
                  <div className="flex-row ">
                    <Image
                      className="relative m-2 w-[53.33px] h-[53.33px]"
                      alt="Frame"
                      src={frame1}
                    />
                  </div>
                  <div className="flex-row">
                    <Image
                      className="relative m-2 w-[53.33px] h-[53.33px]"
                      alt="Frame"
                      src={frame2}
                    />
                  </div>
                  <div className="flex-row">
                    <Image
                      className="relative m-2 w-[53.33px] h-[53.33px]"
                      alt="Frame"
                      src={frame3}
                    />
                  </div>
                  <div className="flex-row">
                    <Image
                      className="relative m-2 w-[53.33px] h-[53.33px]"
                      alt="Frame"
                      src={frame4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="flex-col">
              <div className="flex flex-wrap xxs:justify-center sm:justify-center ">
                <div className="inline-flex items-start gap-[85.33px] relative">
                  <div className="inline-flex flex-col items-start gap-[17.33px] relative">
                    <div className="relative self-stretch   font-4 text-neutral-600 text-4 tracking-4  ">
                      Home
                    </div>
                    <div className="relative self-stretch  font-4 text-neutral-600 text-4 tracking-4  ">
                      About us
                    </div>
                    <div className="relative self-stretch  font-4 text-neutral-600 text-4 tracking-4  ">
                      Work
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start gap-[17.33px] relative ">
                    <div className="relative self-stretch mt-[-1.33px]  font-4 text-neutral-600 text-4 tracking-4  ">
                      Services
                    </div>
                    <div className="relative self-stretch  font-4 text-neutral-600 text-4 tracking-4  ">
                      Contact us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <div className="md:flex p-8">
              <div className="flex-row    xxs:text-center sm:text-center">
                NewYorK, US
              </div>
              <div className="flex-grow"></div>
              <div className="flex-row xxs:text-center sm:text-center">
                AtlasPremier. All Rights Reserved
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center md:text-7xl sm:text-5xl xxs:text-3xl font-bold text-[#294f74]">
            Atlas Premier
          </div>
        </div>
      </div>
    </div>
  );
};
