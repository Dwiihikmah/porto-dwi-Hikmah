import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedTheme = localStorage.getItem('theme');
    // Default theme first-time visit is Light Mode
    const initialDark = savedTheme ? savedTheme === 'dark' : false;
    
    setIsDark(initialDark);
    applyTheme(initialDark);
    if (!savedTheme) {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const toggleDarkMode = () => {
    const newValue = !isDark;
    setIsDark(newValue);
    applyTheme(newValue);
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  };

  return { isDark, toggleDarkMode, mounted };
};
