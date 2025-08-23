'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import {MoveLeft} from "lucide-react"
import { CircleFooter } from '@/components/custom/circle-footer';

export default function PhotographyPage() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/work" className="hsover:opacity-80">
          <MoveLeft className='text-red-500 w-10 h-10'></MoveLeft>
        </Link>
        <h1 className="text-4xl font-bold">Photography</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/work/photography/lanchi">
          <Card className="overflow-hidden cursor-pointer">
            <Image
              src="/photography/lanchi.png"
            alt="Lanchi Photography"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            />
          </Card>
        </Link>
      </div>
      <CircleFooter />
    </main>
  );
}
