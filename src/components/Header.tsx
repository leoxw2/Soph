"use client";

import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Über mich", path: "/ueber-mich" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-semibold text-primary flex items-baseline gap-2">
              Psychotherapie <span className="font-sans font-medium text-foreground">Sophia Müller</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-accent text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-all shadow-md hover:shadow-lg"
            >
              Termin anfragen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none transition-colors p-2"
              aria-label="Menü öffnen/schließen"
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-primary/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-4 text-base font-medium text-foreground hover:text-primary border-b border-primary/5"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="block mt-6 px-3 py-3 text-center text-base font-medium text-white bg-accent rounded-md hover:bg-accent/90"
              onClick={() => setIsOpen(false)}
            >
              Termin anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
