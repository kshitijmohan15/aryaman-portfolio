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

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div 
        className={cn(
          'fixed top-0 right-0 h-full w-80 max-w-[80vw] z-50 md:hidden transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          pathname === '/about' 
            ? 'bg-black text-white' 
            : 'bg-white text-black shadow-xl'
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200/20">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex-1 px-6 py-8">
            <div className="flex flex-col space-y-8">
              <Link 
                href="/" 
                className={cn(
                  'text-2xl font-light transition-colors duration-200 hover:opacity-80',
                  pathname === '/' && 'font-bold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/work" 
                className={cn(
                  'text-2xl font-light transition-colors duration-200 hover:opacity-80',
                  pathname.startsWith('/work') && 'font-bold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link 
                href="/about" 
                className={cn(
                  'text-2xl font-light transition-colors duration-200 hover:opacity-80',
                  pathname === '/about' && 'font-bold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={cn(
                  'text-2xl font-light transition-colors duration-200 hover:opacity-80',
                  pathname === '/contact' && 'font-bold'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
