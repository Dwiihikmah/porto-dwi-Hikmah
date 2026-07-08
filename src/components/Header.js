import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleDarkMode, mounted } = useDarkMode();

  useEffect(() => {
    // Scroll lock disabled for absolute dropdown menu
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Training', href: '#training' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/70 backdrop-blur-md border-b border-[var(--border-color)]/30 transition-all duration-300'>
      <nav className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative'>
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow'>
            <span className='text-white font-bold'>D</span>
          </div>
          <h1 className='text-lg font-bold text-[var(--text-primary)] hidden sm:block transition-colors'>Dwi Hikmah</h1>
        </div>

        <ul className={`${
          isMenuOpen 
            ? 'flex flex-col justify-start items-center absolute top-full left-0 right-0 bg-white dark:bg-[#0a0e27] border-b border-[var(--border-color)]/20 shadow-xl py-6 px-6 space-y-2 text-[var(--text-primary)]' 
            : 'hidden'
        } md:flex gap-1 md:gap-2 lg:gap-6 md:static md:bg-transparent md:border-0 md:shadow-none p-4 md:p-0 md:w-auto md:h-auto md:space-y-0 md:text-base md:flex-row transition-all duration-300 z-[9999]`}>
          {menuItems.map((item, idx) => (
            <li key={idx} className='w-full md:w-auto'>
              <a 
                href={item.href} 
                className='text-[var(--text-secondary)] hover:text-[var(--accent-blue)] hover:bg-[var(--bg-secondary)] md:hover:bg-transparent font-semibold md:font-medium transition-all duration-300 text-base md:text-sm lg:text-base py-2.5 md:py-0 px-4 md:px-0 block md:inline-block rounded-xl text-center md:text-left'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4 z-[10000]'>
          {mounted && (
            <button
              onClick={toggleDarkMode}
              className='p-2 rounded-lg bg-[var(--bg-secondary)]/50 hover:bg-[var(--card-hover)]/50 text-[var(--text-primary)] transition-all duration-300 backdrop-blur-sm border border-[var(--border-color)]/20'
              aria-label='Toggle dark mode'
            >
              {isDark ? (
                <FiSun size={20} className='text-yellow-500' />
              ) : (
                <FiMoon size={20} className='text-slate-600' />
              )}
            </button>
          )}

          <button 
            className='md:hidden text-[var(--text-primary)] text-2xl hover:text-[var(--accent-blue)] transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
