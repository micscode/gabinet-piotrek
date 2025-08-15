"use client";

import { useEffect } from "react";

export default function ThemeWatcher() {
  useEffect(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    
    document.documentElement.classList.toggle("dark", initialTheme === 'dark');
  }, []);

  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<'light' | 'dark'>) => {
      const newTheme = event.detail;
      document.documentElement.classList.toggle("dark", newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
    };

    window.addEventListener('themeChange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themeChange', handleThemeChange as EventListener);
  }, []);

  return null;
}


