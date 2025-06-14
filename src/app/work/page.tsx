import Link from 'next/link';
import Image from 'next/image';
import CircleGrid from '@/components/custom/circle-grid';

export default function Work() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Link
          href="/work/design"
          className="flex aspect-square items-center justify-center rounded-3xl bg-black"
        >
          <span className="text-3xl md:text-5xl font-medium text-white">Design</span>
        </Link>
        <Link
          href="/work/creative"
          className="flex aspect-square items-center justify-center rounded-3xl bg-black"
        >
          <span className="text-3xl md:text-5xl font-medium text-white">Creative</span>
        </Link>
        <Link
          href="/work/photography"
          className="flex aspect-square items-center justify-center rounded-3xl bg-black"
        >
          <span className="text-3xl md:text-5xl font-medium text-white">Photography</span>
        </Link>
        <div className="aspect-square">
          <CircleGrid />
        </div>
      </div>
    </div>
  );
}
