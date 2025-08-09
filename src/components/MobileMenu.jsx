import React from 'react';
import { IoClose } from 'react-icons/io5';
import { navItems } from '../data/navConfig';
import NavItem from './NavItem';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-80 bg-[#111c2e] shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b">
        {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
        <span className='text-white text-2xl font-bold'>TSG</span>
        <button onClick={onClose} className="text-gray-600 text-2xl cursor-pointer">
          <IoClose />
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-4">
        {navItems.map(item => (
          <div key={item.id} className="mb-2">
            <NavItem
              id={item.id}
              label={item.label}
              items={item.items}
              isMobile
            />
          </div>
        ))}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
