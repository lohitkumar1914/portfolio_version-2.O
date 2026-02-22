"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
  { label: "Work", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-[#1F1F2A]"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-2 text-white font-mono text-sm tracking-tight"
        >
          <Terminal className="h-4 w-4 text-[#f17463]" />
          <span className="font-semibold">lohit.dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#71717A] hover:text-white text-sm transition-colors duration-200 hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-[#ffffff] text-black text-sm font-medium hover:bg-[#e05a4a] transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-b border-[#1F1F2A] px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#A1A1AA] hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#ffffff] text-black text-sm font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
