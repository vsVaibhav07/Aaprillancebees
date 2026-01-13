"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-[var(--cream-bg)] text-[var(--charcoal-text)]
      shadow-[0_-8px_30px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

        {/* BRAND / LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
  
        >
          <Link href={"/"}><Image
            src="/images/logo.png"
            alt="Aprillance Bees"
            width={240}
            height={100}
            className="mx-auto md:mx-0 py-0 my-0 "
          /></Link>
          
         
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2 text-[var(--deep-honey-brown)]">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 mx-2 gap-y-2 gap-x-6 text-sm">
            {[
              ["Home", "/"],
              ["Shop", "/shop"],
              ["About Us", "/about"],
              ["Our Process", "/our-process"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
              ["Privacy Policy", "/privacy-policy"],
              ["Terms", "/terms"],
            ].map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="hover:text-[var(--honey-gold)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-[var(--deep-honey-brown)]">
            Contact
          </h3>

          <div className="flex mx-2 items-center gap-3 text-sm text-black/70">
            <FaEnvelope className="text-[var(--honey-gold)]" />
            <span>april@aprillancebees.com</span>
          </div>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4 text-[var(--deep-honey-brown)]">
            Follow Us
          </h3>

          <div className="flex gap-4 mx-2">
            {[FaFacebookF, FaInstagram, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full
                bg-white shadow-sm hover:bg-[var(--honey-gold)] hover:text-white
                transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-black/5 py-5 text-center text-sm text-black/60">
        © {new Date().getFullYear()} Aprillance Bees. All rights reserved.
      </div>
    </footer>
  );
}
