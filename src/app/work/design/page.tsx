'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/card';
import {MoveLeft} from "lucide-react"
import { CircleFooter } from '@/components/custom/circle-footer';
import { motion, steps } from 'framer-motion';

export default function DesignPage() {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <div className="flex items-center gap-4 mb-12">
        <Link href="/work">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <MoveLeft className='text-red-500 w-10 h-10 hover:text-black transition-colors duration-200'></MoveLeft>
          </motion.div>
        </Link>
        <div className="flex items-center gap-4 w-full justify-between">
          <h1 className="text-4xl font-bold">Design</h1>
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
        <Link href="https://www.behance.net/gallery/234089743/RythuSetu-Interaction-Design" target="_blank">
          <Card className="overflow-hidden">
            <Image
              src="/design/rhytu-setu.png"
              alt="Rhytu Setu App"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </Card>
        </Link>

        <Link href="https://www.behance.net/gallery/219725261/Technically-Complex-Product-LYNA" target="_blank">
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

        <Link href="https://www.behance.net/gallery/220504349/Prepr-Entrepreneurship" target="_blank">
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

        <Link href="https://www.behance.net/gallery/220434297/Systems-Thinking-Farmers-Welfare-in-AP" target="_blank">
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
