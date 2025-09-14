'use client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { getNavLinkStyles } from '@/utils/nav-link';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={cn('py-2 relative', pathname === '/about' && 'bg-black text-white')}>
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

      {/* Mobile Menu */}
      <div 
        className={cn(
          'absolute top-full left-0 right-0 md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out',
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        )}
      >
        <div className={cn(
          'border-t',
          pathname === '/about' 
            ? 'bg-black text-white border-white/10' 
            : 'bg-white border-gray-100'
        )}>
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex flex-col py-8 space-y-6">
              <Link 
                href="/" 
                className={cn(
                  'text-lg transition-colors duration-200',
                  getNavLinkStyles(pathname, '/')
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/work" 
                className={cn(
                  'text-lg transition-colors duration-200',
                  getNavLinkStyles(pathname, '/work')
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  'text-lg transition-colors duration-200',
                  getNavLinkStyles(pathname, '/about')
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={cn(
                  'text-lg transition-colors duration-200',
                  getNavLinkStyles(pathname, '/contact')
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
