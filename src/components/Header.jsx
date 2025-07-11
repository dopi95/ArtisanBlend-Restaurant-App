import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../../public/images/logo.png';

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownClickOpen, setDropdownClickOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Signature Dishes', to: 'signature' },
    { label: 'Chatbot', to: 'chatbot' },
  ];

  const menuItems = ['Break Fast', 'Main-Dishes', 'Desserts', 'Drinks'];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownClickOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Artisan Blend Logo" className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Artisan Blend</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-gray-100">
            {navLinks.filter(({ label }) => label !== 'Chatbot').map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                smooth
                duration={500}
                className="cursor-pointer hover:text-[#CCAA35]"
              >
                {label}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={() => setDropdownClickOpen(!dropdownClickOpen)}
                className="flex items-center gap-1 hover:text-[#CCAA35]"
              >
                <span>Menu</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              <div
                className={`absolute right-0 top-10 w-48 bg-white dark:bg-gray-800 shadow rounded-md p-2 space-y-1 z-50 ${
                  dropdownClickOpen ? 'block' : 'hidden'
                }`}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={`menu/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    smooth
                    duration={500}
                    offset={-80}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                    onClick={() => setDropdownClickOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="chatbot"
              smooth
              duration={500}
              className="cursor-pointer hover:text-[#CCAA35]"
            >
              Chatbot
            </Link>

            <Link to="reservation" smooth duration={500}>
              <button
                className="px-4 py-2 rounded-md hover:opacity-90 transition"
                style={{ backgroundColor: '#CCAA35', color: '#fff' }}
              >
                Book
              </button>
            </Link>

            <button
              onClick={toggleTheme}
              className="ml-2 text-gray-800 dark:text-gray-100 hover:text-[#CCAA35]"
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center justify-between px-4 py-3">
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-gray-100 hover:text-[#CCAA35]"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </button>

            <button
              className="text-gray-700 dark:text-white ml-3"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-b-xl w-full max-w-md mx-auto mt-0 animate-slideDown shadow-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 dark:text-white"
              >
                <X />
              </button>
            </div>

            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map(({ label, to }, index) => (
                <Link
                  key={label}
                  to={to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className={`text-gray-800 dark:text-gray-100 text-lg font-medium transform transition-all ease-out duration-500 delay-[${index * 100}ms] translate-y-0 opacity-100`}
                >
                  {label}
                </Link>
              ))}

              {/* Dropdown inside mobile panel */}
              <div ref={dropdownRef}>
                <button
                  onClick={() => setDropdownClickOpen(!dropdownClickOpen)}
                  className="flex items-center text-gray-800 dark:text-gray-100 space-x-2"
                >
                  <span>Menu</span>
                  <ChevronDown className="w-5 h-5" />
                </button>

                {dropdownClickOpen && (
                  <div className="mt-2 ml-2 p-2 rounded-md space-y-1 bg-white dark:bg-gray-800 shadow">
                    {menuItems.map((item, index) => (
                      <Link
                        key={item}
                        to={`menu/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        smooth
                        duration={500}
                        offset={-80}
                        className="block text-sm px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          setDropdownClickOpen(false);
                          setMenuOpen(false);
                        }}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="reservation" smooth duration={500} offset={-80}>
                <button
                  className="w-full py-2 mt-4 rounded-md hover:opacity-90 transition"
                  style={{ backgroundColor: '#CCAA35', color: '#fff' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Book
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
