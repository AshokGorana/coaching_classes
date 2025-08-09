// src/components/Navbar.jsx
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { navItems } from '../data/navConfig';
import NavItem from './NavItem';
import NavButton from './NavButton';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleDropdownToggle = useCallback((itemId) => {
    setActiveDropdown(prev => prev === itemId ? '' : itemId);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown('');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeDropdown]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f1824] shadow-lg">
      <nav 
        ref={navRef}
        className="flex items-center justify-between px-6 py-4 w-full mx-auto"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Left Section */}
        <div className="leftNavbar flex items-center gap-8">
          <button onClick={() => setMenuOpen(true)}
            className="manuBarIcon text-white hover:text-blue-400 cursor-pointer transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          <div className="text-white font-bold text-3xl tracking-wider cursor-pointer">
            TSG
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-2" role="menubar">
            {navItems.map(item => (
              <NavItem
                key={item.id}
                id={item.id}
                label={item.label}
                items={item.items}
                isActive={activeDropdown === item.id}
                onToggle={handleDropdownToggle}
              />
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <NavButton variant="primary">Talk to us</NavButton>
          <NavButton variant="secondary">Login</NavButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
