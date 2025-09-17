import Image from "next/image";
import Card from "@/components/ui/card";
import MovingCircles from "@/components/custom/moving-circles";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section className="mx-auto max-w-7xl mt-2">
        <Card className="border-foreground/10 rounded-3xl border-2 py-16 m-6 md:m-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image
                  className="h-[47px] w-[124px] md:h-[70px] md:w-[200px]"
                  src="/hey.png"
                  alt="Hey"
                  width={300}
                  height={100}
                  priority
                />
                <span className="text-7xl">, </span>
              </div>
              <h1 className="text-4xl font-bold md:text-6xl">I'm Aryaman.</h1>
            </div>
            <div className="flex flex-col gap-10">
              <p className=" max-w-[600px] text-xl font-light -mt-4 leading-6">
                I'm an <span className="text-red-500 font-medium">Industrial Designer</span> and <span className="text-red-500 font-medium">creative</span>. <br />This is a glimpse into the things I think about, build, and obsess over from objects and products to stories and systems. 
                It’s all rooted in form, function, and the intent to design with purpose.
              </p>
              <div className="flex gap-4">
                <Link href="/work">
                <button className="w-fit cursor-pointer rounded-full border-[1px] border-black px-4 py-1 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200 font-light">
                  See My Work
                </button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </section>
      <section className="my-16">
        <MovingCircles />
      </section>
    </div>
  );
}
