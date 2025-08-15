"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHeaderHeightVariable = () => {
      const height = headerRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty("--header-h", `${height}px`);
    };

    updateHeaderHeightVariable();
    window.addEventListener("resize", updateHeaderHeightVariable);
    return () => window.removeEventListener("resize", updateHeaderHeightVariable);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0a0a0a]/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="#start" className="text-sm font-semibold tracking-tight">
          <span className="text-sky-600">GO</span> Piotr Socha
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 sm:flex">
          <a className="hover:text-gray-900 dark:hover:text-white" href="#o-mnie">
            O mnie
          </a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#uslugi">
            Usługi
          </a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#cennik">
            Cennik
          </a>
          <a className="hover:text-gray-900 dark:hover:text-white" href="#kontakt">
            Kontakt
          </a>
        </nav>
        <motion.a
          href="tel:75718288"
          className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 sm:inline-flex"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Zadzwoń
        </motion.a>
      </div>
    </header>
  );
}


