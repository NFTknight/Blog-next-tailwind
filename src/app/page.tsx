import Card from "@/components/Card";
import data from "@/data.json";
import { MainBlog } from "@/components/MainBlog";
import Blogs from "@/components/Blogs";
import { Ad } from "@/components/Ad";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-center bg-neutral-50 font-halve">
      <MainBlog />
      <div className="mt-8">
        <Blogs />
      </div>
      <div className="px-5 sm:px-16 xl:px-28">
        <div className=" flex justify-center items-center">
          <div className="grid grid-cols-1 mlg:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
            {data?.map((blog) => (
              <Card {...blog} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-[4.5rem] xxl:px-[6.2rem] py-[6.1rem] ">
        <Ad />
      </div>
      <Footer />
    </main>
  );
}
