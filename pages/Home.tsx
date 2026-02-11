import React from 'react';
import { ArrowRight, Car, FileSearch, TrendingUp, Sparkles, Check, MousePointer2, ShieldCheck, Database, Receipt, Coins, Repeat, Split, History, Users, Loader2, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-[#050505]">
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-24 px-4 max-w-7xl mx-auto text-center">
        <div className="mb-8 flex justify-center animate-fade-in-up">
           <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-full px-3 py-1 flex items-center gap-2 text-sm font-medium text-[#37352f]">
              <Sparkles size={14} className="text-orange-400" />
              <span>Compatible tarifs 2026</span>
           </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
          La boîte à outils complète <br/>
          <span className="text-[#9D9D9D]">pour votre budget Communauto.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#050505] font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          Comprenez enfin vos factures. Simulez vos trajets futurs. Optimisez votre forfait. Simple, gratuit et sécurisé.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link 
            to="/extractor"
            className="bg-[#0066DA] hover:bg-[#0055b5] text-white px-6 py-3 rounded-[4px] font-semibold text-[15px] transition-colors"
          >
            Analyser mes factures
          </Link>
          <Link 
            to="/calculator"
            className="text-[#37352f] hover:bg-[#F7F7F5] border border-[#E3E3E3] px-6 py-3 rounded-[4px] font-semibold text-[15px] transition-colors flex items-center gap-2"
          >
            Simulateur gratuit
          </Link>
        </div>

        <div className="mt-16 flex justify-center animate-bounce">
            <a href="#tools" className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors text-sm font-medium">
               En savoir plus
               <ChevronDown size={20} />
            </a>
        </div>
      </section>

      {/* Feature Grid (Bento) */}
      <section id="tools" className="py-20 bg-white border-t border-[#E3E3E3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Trois outils simples.</h2>
            <p className="text-lg text-[#37352f] max-w-2xl">
              Que vous soyez un utilisateur occasionnel ou quotidien, nous avons l'outil qu'il vous faut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             
             {/* Card 1: Calculator */}
             <div className="group border border-[#E3E3E3] rounded-xl p-8 hover:bg-[#F7F7F5] transition-colors flex flex-col h-full">
                <div className="mb-6">
                   <div className="w-12 h-12 bg-white border border-[#E3E3E3] rounded-lg flex items-center justify-center text-[#37352f] shadow-sm mb-6">
                      <MousePointer2 size={22} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                     Calculateur 
                     <span className="bg-[#E3E3E3] text-[#37352f] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">Gratuit</span>
                   </h3>
                   <p className="text-[#37352f] text-sm leading-relaxed mb-6">
                     Simulateur pour vos trajets futurs ou récurrents (ex: Épicerie, Chalet).
                   </p>
                   
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-2.5">
                          <Check size={18} className="text-green-600 shrink-0"/>
                          <span>Comparatif des 5 forfaits</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                          <Repeat size={18} className="text-green-600 shrink-0"/>
                          <span>Gestion des récurrences</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                          <Split size={18} className="text-green-600 shrink-0"/>
                          <span>Mode Flex vs Station</span>
                      </li>
                   </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-[#E3E3E3]/50">
                   <Link to="/calculator" className="text-[#0066DA] font-medium text-sm hover:underline flex items-center gap-1">
                     Lancer le simulateur <ArrowRight size={14}/>
                   </Link>
                </div>
             </div>

             {/* Card 2: Extractor */}
             <div className="group border border-[#E3E3E3] rounded-xl p-8 hover:bg-[#F7F7F5] transition-colors flex flex-col h-full">
                <div className="mb-6">
                   <div className="w-12 h-12 bg-white border border-[#E3E3E3] rounded-lg flex items-center justify-center text-[#37352f] shadow-sm mb-6">
                      <FileSearch size={22} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                     Extracteur
                     <span className="bg-[#E3E3E3] text-[#37352f] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">Gratuit</span>
                   </h3>
                   <p className="text-[#37352f] text-sm leading-relaxed mb-6">
                     Ne copiez plus vos factures à la main. Nous extrayons et organisons tout :
                   </p>
                   
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-2.5">
                         <Car size={18} className="text-blue-500 shrink-0"/>
                         <span>Trajets, distances & durées</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Receipt size={18} className="text-blue-500 shrink-0"/>
                         <span>Montants, taxes & crédits</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <ShieldCheck size={18} className="text-blue-500 shrink-0"/>
                         <span>Assurances & frais divers</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Users size={18} className="text-blue-500 shrink-0"/>
                         <span>Détection des co-abonnés</span>
                      </li>
                   </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-[#E3E3E3]/50">
                   <Link to="/extractor" className="text-[#0066DA] font-medium text-sm hover:underline flex items-center gap-1">
                     Importer mes factures <ArrowRight size={14}/>
                   </Link>
                </div>
             </div>

             {/* Card 3: Optimizer */}
             <div className="group bg-[#F7F7F5] border border-[#E3E3E3] rounded-xl p-8 flex flex-col h-full relative">
                <div className="mb-6 relative z-10">
                   <div className="w-12 h-12 bg-[#0066DA] rounded-lg flex items-center justify-center text-white shadow-sm mb-6">
                      <Sparkles size={22} />
                   </div>
                   <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                     Optimiseur
                     <span className="bg-[#EBEBEB] text-[#37352f] text-[10px] uppercase font-bold px-1.5 py-0.5 rounded">14.99$</span>
                   </h3>
                   <p className="text-[#37352f] text-sm leading-relaxed mb-6">
                     Nous rejouons votre historique réel pour trouver le forfait idéal.
                   </p>
                   
                   <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-2.5">
                         <History size={18} className="text-[#0066DA] shrink-0"/>
                         <span>Replay historique complet</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Zap size={18} className="text-[#0066DA] shrink-0"/>
                         <span>Rentabilité Flex (Illimité/20)</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <TrendingUp size={18} className="text-[#0066DA] shrink-0"/>
                         <span>Comparatif Léo & Auto Perso</span>
                      </li>
                   </ul>
                </div>
                <div className="mt-auto pt-6 border-t border-[#D4D4D4] relative z-10">
                   <Link to="/optimizer" className="text-[#0066DA] font-medium text-sm hover:underline flex items-center gap-1">
                     Voir l'offre <ArrowRight size={14}/>
                   </Link>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Security Statement */}
      <section className="py-24 border-t border-[#E3E3E3]">
         <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl border border-[#E3E3E3] shadow-sm">
             <div className="bg-green-50 p-4 rounded-full text-green-700">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h3 className="text-xl font-bold mb-2">Sécurité & Sauvegarde</h3>
                <p className="text-gray-600 leading-relaxed">
                   Vos données sont précieuses. Vos factures sont traitées et <strong>sauvegardées sur nos serveurs sécurisés</strong> (chiffrés). Cela vous permet de construire un historique complet sur plusieurs années, accessible à tout moment.
                </p>
             </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#F7F7F5] text-center border-t border-[#E3E3E3]">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Commencez par le gratuit.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link 
                  to="/calculator" 
                  className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-medium text-lg hover:bg-[#333333] transition-colors"
               >
                  Essayer le calculateur
               </Link>
               <Link 
                  to="/extractor" 
                  className="text-[#050505] bg-white border border-[#E3E3E3] px-8 py-4 rounded-[4px] font-medium text-lg hover:bg-gray-50 transition-colors shadow-sm"
               >
                  Extraire mes données
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;