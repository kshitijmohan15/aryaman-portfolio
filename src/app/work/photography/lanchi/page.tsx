import Image from 'next/image';

export default function LanchiPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex h-auto w-full items-center justify-center">
        <Image
          src="/photography/lanchi-cover.png"
          alt="Lanchi"
          className="h-auto rounded-none object-cover"
          width={1000}
          height={1000}
        />
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8">
        <div className="w-full md:w-1/2 max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed">
            Lanchi station is not a recognised or commonly known railway station in the Thulluru or
            Amaravati region of Andhra Pradesh. The area is primarily served by Vijayawada Junction
            railway station, which is a major railway hub. Amaravati, the capital of Andhra Pradesh,
            is located in Guntur district, about 15 kilometers southwest of Vijayawada.
          </p>
        </div>
        <div className="w-full md:w-1/2 max-w-xl">
          <Image
            src="/photography/lanchi-location.png"
            alt="Lanchi Location Map"
            className="w-full h-auto rounded-none object-cover"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
                 {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
           <Image
             key={num}
             src={`https://storage.googleapis.com/portfolio-pdfs-dev/aryaman-portfolio/lanchi-dslr/LANCHI%20BEHANCE-${num.toString().padStart(2, '0')}.png`}
             alt={`Lanchi DSLR Image ${num}`}
             className="h-auto rounded-none object-cover mb-4"
             width={2000}
             height={2000}
             priority={num <= 4}
           />
        ))}
      </section>
    </div>
  );
}
