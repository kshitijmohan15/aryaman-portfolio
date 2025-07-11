import Image from 'next/image';

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl pt-16 px-4 sm:pl-4">
      <section>
        <h1 className="text-[32px] sm:text-[44px] font-[700] tracking-[0%]">
          <span>Let's connect</span> •<span className="text-[#ED1C24]"> कनेक्ट करूया</span> •{' '}
          <span>Let's connect</span> • <span className="text-[#ED1C24]">कनेक्ट करते हैं</span> •
        </h1>
      </section>
      <section className="mt-12 flex flex-col lg:flex-row justify-between">
        <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
          <form className="flex w-full flex-col gap-6 lg:pr-8">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              required
            />
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Message"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              required
            />
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className="w-fit rounded-md bg-black px-6 py-2 text-white hover:bg-black/90"
              >
                Contact Me!
              </button>
            </div>
          </form>
        </div>
        <div className="relative flex min-h-[400px] lg:min-h-[500px] w-full lg:w-[500px] flex-col items-start justify-center bg-black p-8 text-white px-8 lg:px-28">
          <div className="space-y-2">
            <h2 className="text-2xl font-light">Contact</h2>
            <p className="text-base font-light">aryamansaudagar@gmail.com</p>
            <p className="text-base font-light">+91 9820608258</p>
          </div>
          <div className="mt-8 space-y-2">
            <h2 className="text-2xl font-light">Based In</h2>
            <p className="text-base font-light">Mumbai, Maharashtra, India</p>
          </div>
          <div className="mt-8 flex gap-4">
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            <Image src="/behance.svg" alt="Behance" width={24} height={24} />
          </div>
          <Image
            src="/star.svg"
            alt="star"
            width={120}
            height={120}
            className="absolute -top-10 -left-10 w-[80px] h-[80px] lg:w-[120px] lg:h-[120px]"
          />
        </div>
      </section>
    </div>
  );
}
