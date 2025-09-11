import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-foreground/10 border-t bg-black py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col-reverse space-y-reverse space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <p className="text-xs md:text-sm text-white text-center md:text-left">
            © 2025 by Aryaman Saudagar. All Rights Reserved.
          </p>
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
                className="md:w-6 md:h-6"
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
                className="md:w-6 md:h-6"
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
                className="md:w-6 md:h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
