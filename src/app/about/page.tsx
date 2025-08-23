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
                Born and raised in Mumbai, I&apos;m currently studying <b>Industrial Design</b> at the <strong>National Institute of Design, Andhra Pradesh</strong>.
                <br />
                <br />
                I&apos;m passionate about form development, CMF, product and object design, interior and lighting, design research, systems thinking, and user experience.
                <br />
                With a background in visual arts, painting, and photography, I&apos;ve built my skills in visual storytelling, concept development, and aesthetic detailing.
                <br />
                <br />
                A lifelong superhero fan and lover of films, I approach design with empathy, imagination, and a strong moral compass believing it can drive meaningful change at every level of interaction.
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
          <section className="mt-16 w-full">
            <div className="flex flex-col w-full">
              {/* First row - 6 images */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
                {[1,2,3,4,5,6].map((num) => (
                  <div key={num} className="relative w-full pb-[100%]">
                    <Image
                      src={`/collage/${num}.png`}
                      alt={`Website Design ${num}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Second row - 5 images */}
              <div className="grid grid-cols-2 md:grid-cols-5 w-full">
                {[7,8,17,10,11].map((num) => (
                  <div key={num} className="relative w-full pb-[100%]">
                    <Image
                      src={`/collage/${num}.png`}
                      alt={`Website Design ${num}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Third row - remaining images */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
                {[12,13,14,15,16,9].map((num) => (
                  <div key={num} className="relative w-full pb-[100%]">
                    <Image
                      src={`/collage/${num}.png`}
                      alt={`Website Design ${num}`}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}
