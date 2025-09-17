import { motion, steps } from 'framer-motion';
import Image from 'next/image';

export const CircleFooter = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/dark-circle.svg"
        alt="Dark Circle"
        width={128}
        height={128}
        className="object-contain"
      />
      <motion.div
        className=""
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: steps(4, 'end'),
        }}
      >
        <Image src="/pacman.svg" alt="Pacman" width={128} height={128} className="object-contain" />
      </motion.div>
      <Image
        src="/dark-circle.svg"
        alt="Dark Circle"
        width={128}
        height={128}
        className="object-contain"
      />
    </div>
  );
};
