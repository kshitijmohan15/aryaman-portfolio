'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import { MoveLeft } from 'lucide-react';
import { CircleFooter } from '@/components/custom/circle-footer';
import { motion, steps } from 'framer-motion';

export default function CreativePage() {
  return (
    <main className="container mx-auto flex flex-col gap-12 px-4 py-8">
      <div className="mb-12 flex items-center gap-4">
        <Link href="/work" className="hover:opacity-80">
          <MoveLeft className="h-10 w-10 text-red-500"></MoveLeft>
        </Link>
        <div className="flex items-center gap-4 w-full justify-between">
          <h1 className="text-4xl font-bold">Creative</h1>
          <motion.div
            className="h-10 w-10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: steps(4, 'end'),
            }}
          >
            <Image
              src="/pacman.svg"
              alt="Pacman"
              width={128}
              height={128}
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <Image
            src="/creative/hey-painting.png"
            alt="Hey Painting"
            width={600}
            height={400}
            className="h-auto w-full object-cover"
          />
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/creative/back-painting.png"
            alt="Back Painting"
            width={600}
            height={400}
            className="h-auto w-full object-cover"
          />
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/creative/red-painting.png"
            alt="Red Painting"
            width={600}
            height={400}
            className="h-auto w-full object-cover"
          />
        </Card>
      </div>
      <CircleFooter />
    </main>
  );
}
