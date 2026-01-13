"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
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
    { name: "Honey Bees for Sale", href: "/product" },
  ];

  return (
    <motion.header
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm text-[var(--deep-honey-brown)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        <Link href="/" className="z-50 ">
          <Image
            src={!scrolled && isHome ? "/images/lightlogo.png" : "/images/logo.png"}
            alt="Aprillance Bees Logo"
            width={200}
            height={90}
            className="object-contain"
            unoptimized
          />
        </Link>

        <nav className="hidden lg:flex gap-6 ml-4 lg:ml-14  whitespace-nowrap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-[var(--honey-gold)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 z-50">
          <div className="relative" ref={searchRef}>
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white text-black rounded-full shadow-lg px-3 py-1"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="h-9 w-56 text-sm bg-transparent outline-none"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)}>
                    <FiX size={18} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {!searchOpen && (
              <button
                onClick={() => setSearchOpen(true)}
                className="hover:text-[var(--honey-gold)] transition"
              >
                <FiSearch size={20} />
              </button>
            )}
          </div>

          <Link href="/cart" className="hover:text-[var(--honey-gold)] transition">
            <FiShoppingCart size={20} />
          </Link>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <span className="block w-6 h-[2px] bg-current mb-1" />
              <span className="block w-6 h-[2px] bg-current mb-1" />
              <span className="block w-6 h-[2px] bg-current" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full"
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
