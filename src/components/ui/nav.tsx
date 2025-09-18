'use client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { getNavLinkStyles } from '@/utils/nav-link';
import { useState } from 'react';
import Sidebar from './sidebar';

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={cn('py-6 relative', pathname === '/about' && 'bg-black text-white')}>
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-16 items-center">
          <div className="flex w-full items-center justify-between gap-8">
            <a href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
              <Image src="/logo.png" alt="Logo" width={50} height={50} priority />
            </a>
            <div className="hidden items-center space-x-6 md:flex md:text-2xl">
              <Link href="/" className={getNavLinkStyles(pathname, '/')}>
                Home
              </Link>
              <Link href="/work" className={getNavLinkStyles(pathname, '/work')}>
                Work
              </Link>
              <Link href="/about" className={getNavLinkStyles(pathname, '/about')}>
                About
              </Link>
              <Link href="/contact" className={getNavLinkStyles(pathname, '/contact')}>
                Contact
              </Link>
            </div>
          </div>
          <button 
            className="md:hidden" 
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={cn('h-6 w-6', pathname === '/about' && 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', pathname === '/about' && 'text-white')} />
            )}
          </button>
        </div>
      </div>

      <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} pathname={pathname} />
    </nav>
  );
}
