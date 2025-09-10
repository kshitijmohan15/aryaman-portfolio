'use client';
import Image from 'next/image';
import { motion, steps } from 'framer-motion';

export default function CircleGrid() {
  const grid = [Array(3).fill('circle'), ['circle', 'pacman', 'circle'], Array(3).fill('circle')];

  return (
    <div className="grid h-full w-full grid-cols-3 gap-0">
      {grid.map((row, rowIndex) =>
        row.map((type, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="aspect-square">
            {type === 'pacman' ? (
              <motion.div
                className="h-full w-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: steps(4, 'end'),
                }}
              >
                <Image
                  src={'/pacman.svg'}
                  alt={'Pacman'}
                  width={128}
                  height={128}
                  className="h-full w-full object-contain"
                />
              </motion.div>
            ) : (
              <Image
                src={'/dark-circle.svg'}
                alt={'Circle'}
                width={128}
                height={128}
                className="h-full w-full object-contain"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
