'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import {MoveLeft} from "lucide-react"
import { CircleFooter } from '@/components/custom/circle-footer';

export default function CreativePage() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/work" className="hover:opacity-80">
          <MoveLeft className='text-red-500 w-10 h-10'></MoveLeft>
        </Link>
        <h1 className="text-4xl font-bold">Creative</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <Image
            src="/creative/hey-painting.png"
            alt="Hey Painting"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/creative/back-painting.png"
            alt="Back Painting"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/creative/red-painting.png"
            alt="Red Painting"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </Card>
      </div>
      <CircleFooter />
    </main>
  );
}
