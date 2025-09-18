'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion, steps } from 'framer-motion';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname?: string;
};

export default function Sidebar({ isOpen, onClose, pathname }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/50"
          onClick={onClose}
        />
      )}

      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[80vw] md:hidden transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'bg-black text-white rounded-l-2xl shadow-2xl'
        )}
      >
        <div className="flex h-full flex-col overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors text-red-500 cursor-pointer"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col h-full">
            <nav className="flex-1 px-6 py-12">
              <div className="flex flex-col space-y-8">
                <Link
                  href="/"
                  className={cn(
                    'text-2xl font-light transition-opacity duration-200 hover:opacity-80',
                    pathname === '/' && 'font-bold'
                  )}
                  onClick={onClose}
                >
                  Home
                </Link>
                <Link
                  href="/work"
                  className={cn(
                    'text-2xl font-light transition-opacity duration-200 hover:opacity-80',
                    pathname && pathname.startsWith('/work') && 'font-bold'
                  )}
                  onClick={onClose}
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    'text-2xl font-light transition-opacity duration-200 hover:opacity-80',
                    pathname === '/about' && 'font-bold'
                  )}
                  onClick={onClose}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    'text-2xl font-light transition-opacity duration-200 hover:opacity-80',
                    pathname === '/contact' && 'font-bold'
                  )}
                  onClick={onClose}
                >
                  Contact
                </Link>
              </div>
            </nav>
            <div className="flex flex-col items-center gap-16 pb-8">
              <div className="w-34 h-34">
                <motion.div
                  className="w-full h-full"
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
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
              
              <div className="flex items-center justify-center space-x-6">
                <a
                  href="https://www.instagram.com/aryaman.art?igsh=MXY2bGVpb256aXQ0aQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/icons/mdi_instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/aryaman-saudagar-7580a01b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/icons/mdi_linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://www.behance.net/aryamansaudagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/icons/mage_behance.svg"
                    alt="Behance"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


