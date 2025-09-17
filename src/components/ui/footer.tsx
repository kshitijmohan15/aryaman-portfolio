"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);

  useEffect(() => {
    setIsAboutPage(pathname === "/about");
    setIsContactPage(pathname === "/contact");
  }, [pathname]);

  return (
    <footer className={`border-foreground/10 border-t py-6 md:py-8 ${isAboutPage ? 'bg-white' : 'bg-black'}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col-reverse space-y-reverse space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <p className={`text-xs md:text-sm text-center md:text-left ${isAboutPage ? 'text-black' : 'text-white'}`}>
            © 2025 by Aryaman Saudagar. All Rights Reserved.
          </p>
{!isContactPage && (
            <div className="flex items-center justify-center space-x-4 md:space-x-6">
              <a
                href="https://www.instagram.com/aryaman.art?igsh=MXY2bGVpb256aXQ0aQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icons/mdi_instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className={`md:w-6 md:h-6 ${isAboutPage ? 'invert' : ''}`}
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
                  width={20}
                  height={20}
                  className={`md:w-6 md:h-6 ${isAboutPage ? 'invert' : ''}`}
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
                  width={20}
                  height={20}
                  className={`md:w-6 md:h-6 ${isAboutPage ? 'invert' : ''}`}
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
