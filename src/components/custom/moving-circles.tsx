'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type CircleItem = {
  type: 'pacman' | 'circle';
  initialRotation?: number;
};

const BASE_ROW_CONFIG: CircleItem[][] = [
  // Row 1
  [{ type: 'pacman' }, ...Array(8).fill({ type: 'circle' })],
  // Row 2
  [
    { type: 'circle' },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'pacman', initialRotation: 90 },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'pacman' },
    { type: 'circle' },
  ],
  // Row 3
  [
    { type: 'circle' },
    { type: 'pacman' },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'pacman', initialRotation: 90 },
    { type: 'circle' },
    { type: 'circle' },
    { type: 'circle' },
  ],
];

const CircleRow = ({ items, direction }: { items: CircleItem[]; direction: 'left' | 'right' }) => {
  const [repeatedItems, setRepeatedItems] = useState<CircleItem[]>([]);

  useEffect(() => {
    const itemWidth = 128;
    const screenWidth = window.innerWidth;
    const itemsNeededToFillScreen = Math.ceil((screenWidth * 2) / itemWidth);
    const repetitions = Math.max(3, Math.ceil(itemsNeededToFillScreen / items.length));

    setRepeatedItems(Array(repetitions).fill(items).flat());
  }, [items]);

  if (repeatedItems.length === 0) return null;

  return (
    <div className="relative w-full">
      <div className="flex w-max">
        <div
          className={`flex gap-0 ${direction === 'left' ? 'animate-[moveLeft_10s_linear_infinite]' : 'animate-[moveRight_10s_linear_infinite]'}`}
        >
          {repeatedItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={
                item.initialRotation
                  ? { transform: `rotate(${item.initialRotation}deg)` }
                  : undefined
              }
            >
              <Image
                src={item.type === 'pacman' ? '/pacman.svg' : '/dark-circle.svg'}
                alt={item.type === 'pacman' ? 'Pacman' : 'Circle'}
                width={128}
                height={128}
                className="flex-shrink-0"
              />
            </div>
          ))}
        </div>
        <div
          className={`flex gap-0 ${direction === 'left' ? 'animate-[moveLeft_10s_linear_infinite]' : 'animate-[moveRight_10s_linear_infinite]'}`}
        >
          {repeatedItems.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0"
              style={
                item.initialRotation
                  ? { transform: `rotate(${item.initialRotation}deg)` }
                  : undefined
              }
            >
              <Image
                src={item.type === 'pacman' ? '/pacman.svg' : '/dark-circle.svg'}
                alt={item.type === 'pacman' ? 'Pacman' : 'Circle'}
                width={128}
                height={128}
                className="flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function MovingCircles() {
  return (
    <div className="flex w-full flex-col gap-0 overflow-hidden">
      <CircleRow items={BASE_ROW_CONFIG[0]} direction="left" />
      <CircleRow items={BASE_ROW_CONFIG[1]} direction="right" />
      <CircleRow items={BASE_ROW_CONFIG[2]} direction="left" />
    </div>
  );
}
