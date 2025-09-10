"use client"; 
import Link from 'next/link';
import CircleGrid from '@/components/custom/circle-grid';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBox = ({ href, text }: { href: string; text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundColor: isHovered ? "#FF0000" : "#000000",
      borderRadius: isHovered ? "50%" : "24px",
      scale: isHovered ? 1.05 : 1,
      transition: { duration: 0.3 }
    });
  }, [isHovered, controls]);

  return (
    <div
      className="relative aspect-square"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="absolute inset-0 overflow-hidden"
      >
        <Link
          href={href}
          className="flex h-full w-full items-center justify-center"
        >
          <span className="text-4xl md:text-5xl font-bold text-white">{text}</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18">
        <AnimatedBox href="/work/design" text="Design" />
        <AnimatedBox href="/work/creative" text="Creative" />
        <AnimatedBox href="/work/photography" text="Photography" />
        <div className="aspect-square">
          <CircleGrid />
        </div>
      </div>
    </div>
  );
}
