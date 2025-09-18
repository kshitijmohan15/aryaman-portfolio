'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import {MoveLeft} from "lucide-react"
import { CircleFooter } from '@/components/custom/circle-footer';
import { motion, steps } from 'framer-motion';

export default function PhotographyPage() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/work">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <MoveLeft className='text-red-500 w-16 h-16 hover:text-black transition-colors duration-200'></MoveLeft>
          </motion.div>
        </Link>
        <div className="flex items-center gap-4 w-full justify-between">
          <h1 className="text-5xl font-bold">Photography</h1>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="https://www.behance.net/gallery/220634987/Lanchi-Photo-Gallery" target="_blank">
          <Card>
            <div className="relative group">
              <Image
                src="/photography/lanchi.png"
                alt="Lanchi Photography"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center px-4 py-2 md:py-3 min-[928px]:py-4 lg:py-6">
                <h3 className="text-white text-2xl font-bold text-right">A Visit To Lanchi</h3>
                <p className="text-white text-lg text-right">Photo Gallery</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>
      <CircleFooter />
    </main>
  );
}
