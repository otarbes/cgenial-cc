import React from 'react';
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E3E3E3] pt-16 pb-12 font-sans text-[#37352f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

          <div className="col-span-2 md:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="border border-gray-900 rounded-[4px] p-0.5">
                <Car size={20} fill="currentColor" className="text-gray-900"/>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">Cgénial</span>
            </Link>
            <p className="text-[#37352f] mb-6 max-w-xs">
              L'outil indépendant pour optimiser vos coûts Communauto.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Produits</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calculator" className="text-gray-500 hover:text-[#0066DA] hover:underline">Calculateur</Link></li>
              <li><Link to="/extractor" className="text-gray-500 hover:text-[#0066DA] hover:underline">Extracteur</Link></li>
              <li><Link to="/optimizer" className="text-gray-500 hover:text-[#0066DA] hover:underline">Optimiseur</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Aide</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="text-gray-500 hover:text-[#0066DA] hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E3E3E3] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Cgénial Labs. Non affilié à Communauto Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
