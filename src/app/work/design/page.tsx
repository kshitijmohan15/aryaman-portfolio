'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import {MoveLeft} from "lucide-react"
import { CircleFooter } from '@/components/custom/circle-footer';

export default function DesignPage() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/work" className="hsover:opacity-80">
          <MoveLeft className='text-red-500 w-10 h-10'></MoveLeft>
        </Link>
        <h1 className="text-4xl font-bold">Design</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <Image
            src="/design/rhytu-setu.png"
            alt="Rhytu Setu App"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </Card>

        <Link href="/work/design/lyna">
          <Card className="overflow-hidden">
            <Image
              src="/design/lyna.png"
            alt="Lyna Lighting Solutions"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            />
          </Card>
        </Link>

        <Link href="/work/design/prepr">
        <Card className="overflow-hidden">
          <Image
            src="/design/prepr.png"
            alt="Prepr Branding"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            />
          </Card>
        </Link>
        <Link href="/work/design/system-thinking">
        <Card className="overflow-hidden">
          <Image
            src="/design/farmers.png"
            alt="Farmer Well-being Study"
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
