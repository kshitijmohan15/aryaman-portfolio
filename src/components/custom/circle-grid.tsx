'use client';
import Image from 'next/image';

export default function CircleGrid() {
  const grid = [Array(3).fill('circle'), ['circle', 'pacman', 'circle'], Array(3).fill('circle')];

  return (
    <div className="grid h-full w-full grid-cols-3 gap-0">
      {grid.map((row, rowIndex) =>
        row.map((type, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className="aspect-square">
            <Image
              src={type === 'pacman' ? '/pacman.svg' : '/dark-circle.svg'}
              alt={type === 'pacman' ? 'Pacman' : 'Circle'}
              width={128}
              height={128}
              className="h-full w-full object-contain"
            />
          </div>
        ))
      )}
    </div>
  );
}
