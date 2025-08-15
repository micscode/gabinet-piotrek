"use client";

import { useEffect, useState } from "react";

export default function ThemeWatcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === 'dark');
  }, []);

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<'light' | 'dark'>) => {
      const newTheme = event.detail;
      setTheme(newTheme);
      document.documentElement.classList.toggle("dark", newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
    };

    window.addEventListener('themeChange' as any, handleThemeChange);
    return () => window.removeEventListener('themeChange' as any, handleThemeChange);
  }, []);

  return null;
}


