"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Brands", href: "/brands" },
  { label: "Products", href: "/products" },
  { label: "Who We Are", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-500 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      {/* Glass pill container */}
      <div
        className="relative flex items-center justify-between px-5 py-5 rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(220,220,220,0.10) 60%, rgba(255,255,255,0.06) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow:
            "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.15)",
        }}
      >
        {/* Inner glare highlight */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Spottive logo"
            width={100}
            height={100}
            className="text-white"
          />
        </Link>

        {/* Nav links */}
        <ul className="relative z-10 hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 group
                  ${
                    activeLink === link.label
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {/* Active / hover background */}
                {activeLink === link.label && (
                  <span
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.07))",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  />
                )}
                <span className="relative">{link.label}</span>

                {/* Hover underline dot */}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white transition-all duration-200
                    ${activeLink === link.label ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="relative z-10 md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-5 h-0.5 bg-white rounded-full" />
          <span className="block w-5 h-0.5 bg-white rounded-full" />
          <span className="block w-3 h-0.5 bg-white rounded-full" />
        </button>
      </div>
    </nav>
  );
}