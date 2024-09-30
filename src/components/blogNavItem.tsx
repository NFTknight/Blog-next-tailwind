import Image from "next/image";
import React from "react";

interface BlogNavItemProps {
  name: string;
  isClicked: boolean;
}

const BlogNavItem: React.FC<BlogNavItemProps> = ({ name, isClicked }) => {

  return isClicked ? (
    <div
      className="active:bg-[#EDF2F5] ml-[16px] 
                      pt-[10px] pb-[10px] pl-[16px] pr-[16px] 
                      active:border-[#294F74] active:rounded-full active:border-[1.326px]
                      hover:border-[#294F74] hover:rounded-full hover:border-[1.326px]
                      2xl:text-[16px] 
                      xl:text-[12px] 
                      lg:text-[12px] 
                      md:text-[13px] 
                      sm:text-[13px] 
                      xsm:text-[13px] cursor-pointer"
    >
      {name}
    </div>
  ) : (
    <div className="hover:border-[#294F74] hover:rounded-full cursor-pointer hover:border-[1.326px] active:border-[#294F74] active:rounded-full active:border-[1.326px] pt-[10px] pb-[10px] pl-[16px] pr-[16px] text-[#98A2B3] 2xl:text-[16px] xl:text-[12px] lg:text-[12px] md:text-[13px] sm:text-[13px] xsm:text-[13px]">
      {name}
    </div>
  );
};

export default BlogNavItem;
