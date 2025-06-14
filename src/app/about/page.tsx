import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <section>
          <div className="flex flex-col lg:flex-row w-full items-center justify-between">
            <div className="flex flex-col gap-2 text-3xl lg:text-5xl font-bold">
              <span className="font-light tracking-[0.2em]">MUMBAI</span>
              <span className="font-normal">मुंबई</span>
              <span className="font-semibold">18.9582° N</span>
              <span className="font-semibold">72.8321° E</span>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8 flex-1">
              <Image
                src="/sea-link.svg"
                alt="Mumbai"
                width={800}
                height={500}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
        <section className="mt-16">
          <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8 lg:gap-0">
            <div className="relative">
              <Image
                src="/star.svg"
                alt="Me"
                width={56}
                height={56}
                className="absolute -top-10 -right-10"
              />
              <Image src="/headshot.png" alt="Me" width={397} height={397} className="w-[300px] lg:w-[397px] h-auto" />
            </div>
            <div className="flex flex-col gap-6">
              <p className="w-full lg:w-[700px] text-lg lg:text-xl leading-6 font-light">
                Every morning, the small town buzzed to life as the sun spilled golden light over
                rooftops and fields. Children raced to school, their laughter echoing down narrow
                lanes, while shopkeepers raised shutters and arranged fresh produce with care. In
                the tea stall at the corner, regulars gathered, sipping chai and debating cricket
                scores. An old radio crackled with familiar tunes, blending into the background hum
                of activity. A dog dozed near the temple steps, unfazed by the bustle. Life here
                moved in rhythms both old and comforting—where change arrived slowly, wrapped in
                routine and stories passed down like heirlooms.
              </p>
              <button
                type="button"
                className="w-fit cursor-pointer rounded-full border-[1px] border-white px-8 py-1"
              >
                View CV
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
