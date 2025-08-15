"use client";

import { useEffect } from "react";

export default function ThemeWatcher() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const isDark = media.matches;
      document.documentElement.classList.toggle("dark", isDark);
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return null;
}


