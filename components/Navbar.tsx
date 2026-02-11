import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path ? "bg-[#F7F7F5] text-black font-semibold" : "text-[#37352f] hover:bg-[#F7F7F5]";

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E3E3E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo & Links Area */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
              <div className="border border-gray-900 rounded-[4px] p-0.5">
                <Car size={20} fill="currentColor" className="text-gray-900"/>
              </div>
              <span className="font-bold text-lg tracking-tight">Cgénial</span>
            </Link>

            {/* Desktop Menu - Direct Links */}
            <div className="hidden md:flex items-center gap-2">
               <Link 
                  to="/calculator" 
                  className={`px-3 py-1.5 rounded transition-colors text-[15px] ${isActive('/calculator')}`}
               >
                 Calculateur
               </Link>
               <Link 
                  to="/extractor" 
                  className={`px-3 py-1.5 rounded transition-colors text-[15px] ${isActive('/extractor')}`}
               >
                 Extracteur
               </Link>
               <Link 
                  to="/optimizer" 
                  className={`px-3 py-1.5 rounded transition-colors text-[15px] ${isActive('/optimizer')}`}
               >
                 Optimiseur
               </Link>
               <div className="h-4 w-px bg-gray-200 mx-2"></div>
               <Link 
                  to="/faq" 
                  className={`px-3 py-1.5 rounded transition-colors text-[15px] ${isActive('/faq')}`}
               >
                 FAQ
               </Link>
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-[14px] font-medium text-[#37352f] hover:bg-[#F7F7F5] px-3 py-1.5 rounded transition-colors">
              Connexion
            </a>
            <Link 
              to="/calculator"
              className="bg-[#050505] hover:bg-[#333333] text-white px-4 py-1.5 rounded-[4px] font-medium text-[14px] transition-all"
            >
              Essayer gratuitement
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#37352f] p-2 hover:bg-[#F7F7F5] rounded"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-white border-t border-[#E3E3E3] absolute w-full left-0 shadow-xl z-50 animate-fade-in">
          <div className="px-6 pt-6 pb-6 space-y-4">
             <Link to="/calculator" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-[#37352f] py-2 border-b border-gray-100">Calculateur</Link>
             <Link to="/extractor" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-[#37352f] py-2 border-b border-gray-100">Extracteur</Link>
             <Link to="/optimizer" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-[#37352f] py-2 border-b border-gray-100">Optimiseur</Link>
             <Link to="/faq" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-[#37352f] py-2">FAQ</Link>
             <div className="border-t border-[#E3E3E3] pt-6 mt-4 space-y-3">
               <a href="#" onClick={() => setIsOpen(false)} className="block w-full text-center text-[#37352f] py-3 rounded-[4px] font-medium text-lg border border-[#E3E3E3] hover:bg-[#F7F7F5] transition-colors">Connexion</a>
               <Link to="/calculator" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#050505] text-white py-3 rounded-[4px] font-medium text-lg">Essayer gratuitement</Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;