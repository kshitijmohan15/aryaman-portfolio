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
        <Link href="/work">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <MoveLeft className="h-16 w-16 text-red-500 hover:text-black transition-colors duration-200"></MoveLeft>
          </motion.div>
        </Link>
        <div className="flex items-center gap-4 w-full justify-between">
          <h1 className="text-5xl font-bold">Creative</h1>
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
        <Card>
          <div className="relative group">
            <Image
              src="/creative/hey-painting.png"
              alt="Hey Painting"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300"
            />
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 py-2 md:py-3 min-[928px]:py-4 lg:py-6">
              
              <h3 className="text-white text-2xl font-bold text-right">Anti-Design?</h3>
              <p className="text-white text-lg text-right">A Series Of Self Aware Design Posters</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="relative group">
            <Image
              src="/creative/back-painting.png"
              alt="Back Painting"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300"
            />
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 py-2 md:py-3 min-[928px]:py-4 lg:py-6">
              <h3 className="text-white text-2xl font-bold text-right">Visual Development</h3>
              <p className="text-white text-lg text-right">Paintings Made On Procreate</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="relative group">
            <Image
              src="/creative/red-painting.png"
              alt="Red Painting"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-300"
            />
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 py-2 md:py-3 min-[928px]:py-4 lg:py-6">
              <h3 className="text-white text-2xl font-bold text-right">In Love With The Concept Of Myself</h3>
              <p className="text-white text-lg text-right">A Series Of Mix Medium Paintings</p>
              
            </div>
          </div>
        </Card>
      </div>
      <CircleFooter />
    </main>
  );
}
