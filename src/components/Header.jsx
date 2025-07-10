import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import logo from '../../public/images/logo.png'

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Artisan Blend Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Artisan Blend</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-gray-100">
          {/* Home, About, Signature Dishes */}
          {navLinks
            .filter(({ label }) => label !== 'Chatbot')
            .map(({ label, to }) => (
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

          {/* Menu Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <button
              onClick={() => setDropdownClickOpen(!dropdownClickOpen)}
              className="flex items-center gap-1 hover:text-[#CCAA35]"
            >
              <span>Menu</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            <div
              className={`absolute right-0 top-10 w-48 bg-white dark:bg-gray-800 shadow rounded-md p-2 space-y-1 z-50
              ${dropdownClickOpen ? 'block' : 'hidden'} group-hover:block`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={`menu/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  smooth
                  duration={500}
                  className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  onClick={() => setDropdownClickOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Chatbot */}
          <Link
            to="chatbot"
            smooth
            duration={500}
            className="cursor-pointer hover:text-[#CCAA35]"
          >
            Chatbot
          </Link>

          {/* Book Button */}
          <Link to="book" smooth duration={500}>
            <button
              className="px-4 py-2 rounded-md hover:opacity-90 transition"
              style={{ backgroundColor: '#CCAA35', color: '#fff' }}
            >
              Book
            </button>
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 text-gray-800 dark:text-gray-100 hover:text-[#CCAA35]"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 text-gray-800 dark:text-gray-100">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              smooth
              duration={500}
              className="block py-2 border-b border-gray-200 dark:border-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Dropdown Menu */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownClickOpen(!dropdownClickOpen)}
              className="flex items-center gap-1 py-2"
            >
              <ChevronDown /> <span>Menu</span>
            </button>
            {dropdownClickOpen && (
              <div className="mt-2 bg-white dark:bg-gray-800 shadow rounded-md p-2 space-y-1 z-50">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={`menu/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    smooth
                    duration={500}
                    className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
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

          {/* Book */}
          <Link to="book" smooth duration={500}>
            <button
              className="w-full mt-4 rounded-md"
              style={{ backgroundColor: '#CCAA35', color: '#000' }}
            >
              Book
            </button>
          </Link>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="mt-2 text-gray-800 dark:text-gray-100 hover:text-[#CCAA35]"
          >
            {theme === 'light' ? <Moon /> : <Sun />}
          </button>
        </div>
      )}
    </header>
  );
}
