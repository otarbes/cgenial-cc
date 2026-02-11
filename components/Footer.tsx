import React from 'react';
import { Car, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E3E3E3] pt-16 pb-12 font-sans text-[#37352f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          
          <div className="col-span-2 md:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="border border-gray-900 rounded-[4px] p-0.5">
                <Car size={20} fill="currentColor" className="text-gray-900"/>
              </div>
              <span className="font-bold text-lg tracking-tight text-gray-900">Cgénial</span>
            </div>
            <p className="text-[#37352f] mb-6 max-w-xs">
              L'outil indépendant pour optimiser vos coûts Communauto.
            </p>
            <div className="flex gap-4 text-gray-500">
               <Twitter size={20} className="hover:text-black cursor-pointer"/>
               <Linkedin size={20} className="hover:text-black cursor-pointer"/>
               <Github size={20} className="hover:text-black cursor-pointer"/>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-sm mb-4">Produits</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/calculator" className="text-gray-500 hover:text-[#0066DA] hover:underline">Calculateur</a></li>
              <li><a href="/extractor" className="text-gray-500 hover:text-[#0066DA] hover:underline">Extracteur</a></li>
              <li><a href="/optimizer" className="text-gray-500 hover:text-[#0066DA] hover:underline">Optimiseur</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Nouveautés</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Ressources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Guide des tarifs</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Aide & Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Communauté</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">À propos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Contact</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Confidentialité</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#0066DA] hover:underline">Conditions</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#E3E3E3] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 Cgénial Labs. Non affilié à Communauto Inc.</p>
          <div className="flex gap-4">
             <button className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1">
                🌐 Français (France)
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;