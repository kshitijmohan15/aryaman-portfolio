'use client';

import Link from 'next/link';
import { MoveLeft } from "lucide-react";
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prepr Pitch Deck | Aryaman Portfolio',
  description: 'Prepr application pitch deck - UX/UI design case study',
};

export default function LynaPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/work/design">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
          >
            <MoveLeft className='text-red-500 w-10 h-10 hover:text-black transition-colors duration-200' />
          </motion.div>
        </Link>
        <h1 className="text-4xl font-bold">Prepr Pitch Deck</h1>
      </div>

      <div className="w-full h-[600px] md:h-[800px] lg:h-[900px] relative rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://storage.googleapis.com/portfolio-pdfs-dev/aryaman-portfolio/pdfs/system-thinking.pdf"
          className="w-full h-full border-0"
          title="Prepr Pitch Deck"
        />
        <div className="md:hidden absolute inset-0 bg-black/50 flex items-center justify-center">
          <a 
            href="https://storage.googleapis.com/portfolio-pdfs-dev/aryaman-portfolio/pdfs/system-thinking.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-6 py-3 rounded-lg text-black font-semibold hover:bg-gray-100 transition-colors"
          >
            View PDF
          </a>
        </div>
      </div>
    </main>
  );
}