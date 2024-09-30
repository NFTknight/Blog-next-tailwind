interface CardProps {
  image: string;
  tags: string[];
  readTime: string;
  date: string;
  title: string;
}
export default function Card(props: CardProps) {

  return (
    <div className="flex flex-col h-auto mlg:w-[40vw] lg:w-[25vw] xl:w-[28vw] max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-1 border-neutral-700">
      <div className="rounded-xl overflow-hidden">
        <div className="h-3/6 flex w-full justify-center it ems-center bg-gradient-to-b from-white to-[#F4F4F4]">
          <img className="h-5/6 " src={props?.image} alt="" />
        </div>
        <div className="h-3/6 bg-[#F9FAFB] ">
          <div className="px-6 py-4">
            <div className="font-medium text-sm mb-2 flex items-center tracking-tighter">
              <div className="flex-none text-['#667085']">{props?.tags[0]}</div>
              <div className="rounded-full w-1 h-1 bg-black mx-2"></div>
              <div className="flex-auto">{props?.tags[1]}</div>
            </div>
            <p className="text-['#344054'] text-2xl leading-[53px] ">
              {props?.title}
            </p>
            <div className=" flex text-['#667085'] text-sm pt-4 items-center">
              <span className="flex-none ">{props?.readTime}</span>
              <div className="rounded-full w-1 h-1 bg-black mx-2"></div>
              <span className="flex-auto">{props?.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
