
import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-b border-purple-500/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Pruthvi Gami
          </div>
          <div className="hidden md:flex space-x-8">
            {[{
              id: 'home',
              label: 'Home'
            }, {
              id: 'about',
              label: 'About'
            }, {
              id: 'education',
              label: 'Education'
            }, {
              id: 'experience',
              label: 'Experience'
            },
            {
              id: 'certificates',
              label: 'Certificates'
            },  {
              id: 'skills',
              label: 'Skills'
            }, {
              id: 'contact',
              label: 'Contact'
            }].map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500/20 ${activeSection === item.id ? 'text-purple-400 bg-purple-500/20' : 'text-gray-300'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
