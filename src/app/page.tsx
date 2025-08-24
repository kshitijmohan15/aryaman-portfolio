import Image from "next/image";
import Card from "@/components/ui/card";
import MovingCircles from "@/components/custom/moving-circles";

export default function Home() {
  return (
    <div className="">
      <section className="mx-auto max-w-7xl">
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
            <p className="mt-4 max-w-[500px] text-xl leading-none font-light">
              I'm an industrial designer and a creative. This is a glimpse into
              the things I think about, build, and obsess over from objects and
              products to stories and systems. It's all rooted in form,
              function, and the intent to design with purpose.
            </p>
          </div>
        </Card>
      </section>
      <section className="mt-16">
        <MovingCircles />
      </section>
    </div>
  );
}
