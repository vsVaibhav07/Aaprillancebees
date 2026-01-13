"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Close search on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "A Sweet Note to Beekeepers", href: "/note-to-beekeepers" },
    { name: "Beekeeping Information", href: "/beekeeping-info" },
    { name: "Beekeeping Equipment", href: "/equipment" },
    { name: "Contact", href: "/contact" },
    { name: "Honey Bees for Sale", href: "/honey-bees" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        
        <Link href="/" className="z-50 ">
          <Image
            src="/images/logo.png"
            alt="Aprillance Bees Logo"
            width={200}
            height={90}
            className="object-contain"
          />
        </Link>

        {/* Center Nav */}
        <nav className="hidden lg:flex gap-6 whitespace-nowrap absolute ml-8 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`inline-flex items-center transition hover:text-[var(--honey-gold)] ${
                scrolled
                  ? "text-[var(--deep-honey-brown)]"
                  : "lg:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4 z-50">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white text-black rounded-full shadow-lg px-3 py-1 z-50"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-9 w-56 text-sm bg-transparent outline-none leading-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-gray-500 hover:text-[var(--honey-gold)] transition"
                  >
                    <FiX size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className={`transition hover:text-[var(--honey-gold)] ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                <FiSearch size={20} />
              </button>
            )}
          </div>

          {/* Cart */}
          <Link
            href="/cart"
            className={`transition hover:text-[var(--honey-gold)] ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <FiShoppingCart size={20} />
          </Link>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <span className="block w-6 h-[2px] bg-current mb-1" />
              <span className="block w-6 h-[2px] bg-current mb-1" />
              <span className="block w-6 h-[2px] bg-current" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full z-40"
            >
              <div className="flex text-black flex-col gap-4 px-6 py-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  className="mt-2 bg-[var(--honey-gold)] px-4 py-2 rounded-full text-center"
                >
                  Cart
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
