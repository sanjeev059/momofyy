"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Why Momofy", href: "/#why" },
  { label: "Products", href: "/products" },
  { label: "Franchise", href: "/franchise" },
  { label: "B2B", href: "/#b2b" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#FFF8F0]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-syne text-2xl font-extrabold tracking-tight">
            <span className="text-[#E8320A]">momo</span>
            <span className="text-[#1A0A00]">fy</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[#1A0A00] font-dm font-medium text-sm hover:text-[#E8320A] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/franchise"
              className="bg-[#E8320A] text-white font-dm font-medium text-sm px-5 py-2.5 rounded-full hover:bg-[#c92a07] transition-colors"
            >
              Start Franchise →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#1A0A00]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-orange-100 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1A0A00] font-dm font-medium text-base py-1 hover:text-[#E8320A] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/franchise"
            onClick={() => setOpen(false)}
            className="bg-[#E8320A] text-white font-dm font-medium text-center px-5 py-3 rounded-full hover:bg-[#c92a07] transition-colors"
          >
            Start Franchise →
          </Link>
        </div>
      )}
    </nav>
  );
}
