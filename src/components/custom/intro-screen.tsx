'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// This will be reset on every page reload
let isFirstLoad = true;

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      setIsVisible(true);
      isFirstLoad = false;
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              priority
              className="w-20 h-20"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
