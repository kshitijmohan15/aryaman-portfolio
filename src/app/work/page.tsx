"use client"; 
import Link from 'next/link';
import CircleGrid from '@/components/custom/circle-grid';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const AnimatedBox = ({ href, text }: { href: string; text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  const getSvgPath = (text: string) => {
    switch (text.toLowerCase()) {
      case 'design':
        return '/work/design.svg';
      case 'creative':
        return '/work/creative.svg';
      case 'photography':
        return '/work/photography.svg';
      default:
        return '';
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: isHovered ? "#FF0000" : "#000000",
      borderRadius: isHovered ? "50%" : "24px",
      scale: isHovered ? 1.05 : 1,
      transition: { duration: 0.3 }
    });
  }, [isHovered, controls]);

  const shouldShowSvg = isMobile || isHovered;

  return (
    <div
      className="relative aspect-square"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        className="absolute inset-0 overflow-hidden"
      >
        <Link
          href={href}
          className="flex h-full w-full items-center justify-center"
        >
          {shouldShowSvg && getSvgPath(text) ? (
            <Image
              src={getSvgPath(text)}
              alt={text}
              width={300}
              height={80}
              className="object-contain"
            />
          ) : (
            <span className="text-4xl md:text-5xl font-bold text-white">{text}</span>
          )}
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
        <div className="aspect-square w-full h-full flex items-center justify-center">
          <div className="w-3/4 h-3/4">
          <CircleGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
