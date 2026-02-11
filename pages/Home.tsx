import React from 'react';
import { FileSearch, Sparkles, Check, MousePointer2, ShieldCheck } from 'lucide-react';
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
          <span className="text-gray-400">pour votre budget Communauto.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#050505] font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          Que vous découvriez Communauto ou soyez abonné depuis 5 ans, nos outils vous montrent exactement combien ça coûte.
        </p>
        <div className="flex justify-center">
          <a
            href="#tools"
            className="bg-[#0066DA] hover:bg-[#0055b5] text-white px-6 py-3 rounded-[4px] font-semibold text-[15px] transition-colors"
          >
            Découvrir les outils
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

          {/* Top row: 2 cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

             {/* Card 1: Calculator */}
             <div className="border border-[#E3E3E3] rounded-xl p-8 flex flex-col h-full">
                <div className="mb-4">
                   <span className="inline-block bg-green-50 text-green-700 border border-green-200 text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                     Outil gratuit
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Le Calculateur</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Idéal pour les nouveaux utilisateurs ou pour tester des scénarios hypothétiques.
                </p>

                {/* Mini-card */}
                <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-xl p-4 mb-6">
                   <div className="flex items-start gap-3">
                      <MousePointer2 size={20} className="text-[#37352f] shrink-0 mt-0.5" />
                      <div>
                         <p className="font-bold text-sm mb-1">Simulation Manuelle</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           Vous renseignez vos trajets types (ex: "Épicerie 4x/mois"). Le calculateur projette ces données sur un an.
                         </p>
                      </div>
                   </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                   <p className="text-green-600 uppercase text-xs font-bold tracking-wide mb-3">Fonctionnalités incluses</p>
                   <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>5 forfaits comparés simultanément</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Récurrences quotidiennes, hebdo, mensuelles</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Tarifs saisonniers, nuit, longue distance</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Estimation rentabilité Flex Pass</span>
                      </li>
                   </ul>
                </div>

                <div className="mt-auto">
                   <Link to="/calculator" className="border border-[#E3E3E3] text-[#050505] hover:bg-[#F7F7F5] w-full py-3 rounded-[4px] font-medium text-center block transition-colors">
                     Utiliser le calculateur
                   </Link>
                </div>
             </div>

             {/* Card 2: Extractor */}
             <div className="border border-[#E3E3E3] rounded-xl p-8 flex flex-col h-full">
                <div className="mb-4">
                   <span className="inline-block bg-green-50 text-green-700 border border-green-200 text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                     Outil gratuit
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">L'Extracteur</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Transformez vos factures PDF illisibles en données structurées et exploitables.
                </p>

                {/* Mini-card */}
                <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-xl p-4 mb-6">
                   <div className="flex items-start gap-3">
                      <FileSearch size={20} className="text-[#37352f] shrink-0 mt-0.5" />
                      <div>
                         <p className="font-bold text-sm mb-1">Extraction Automatisée</p>
                         <p className="text-gray-500 text-xs leading-relaxed">
                           Nous détectons l'historique complet de vos services, trajets, durées et distances réelles depuis vos factures.
                         </p>
                      </div>
                   </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                   <p className="text-green-600 uppercase text-xs font-bold tracking-wide mb-3">Fonctionnalités incluses</p>
                   <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Trajets, distances, durées isolés</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>TPS et TVQ détaillées par ligne</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Détection automatique des co-abonnés</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0" />
                         <span>Export CSV / Excel en un clic</span>
                      </li>
                   </ul>
                </div>

                <div className="mt-auto">
                   <Link to="/extractor" className="border border-[#E3E3E3] text-[#050505] hover:bg-[#F7F7F5] w-full py-3 rounded-[4px] font-medium text-center block transition-colors">
                     Importer mes factures
                   </Link>
                </div>
             </div>

          </div>

          {/* Bottom row: Optimizer full width horizontal */}
          <div className="border border-[#E3E3E3] rounded-xl p-8">
             <div className="mb-4">
                <span className="inline-block bg-[#0066DA]/10 text-[#0066DA] border border-[#0066DA]/20 text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                  Premium &bull; 14.99$
                </span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left column */}
                <div>
                   <h3 className="text-2xl font-bold mb-2">L'Optimiseur</h3>
                   <p className="text-gray-500 text-sm leading-relaxed mb-6">
                     La précision absolue. Nous rejouons votre historique réel sous les 5 forfaits pour identifier le forfait mathématiquement optimal.
                   </p>

                   {/* Mini-card */}
                   <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-xl p-4">
                      <div className="flex items-start gap-3">
                         <Sparkles size={20} className="text-[#0066DA] shrink-0 mt-0.5" />
                         <div>
                            <p className="font-bold text-sm mb-1">Audit Automatisé</p>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              Chaque trajet passé est recalculé avec les tarifs actuels. L'algorithme teste toutes les combinaisons forfait + options.
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col">
                   <div className="mb-4">
                      <p className="text-[#0066DA] uppercase text-xs font-bold tracking-wide mb-3">Fonctionnalités exclusives</p>
                      <ul className="space-y-2.5 text-sm text-gray-600">
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Replay de chaque trajet sous 5 forfaits</span>
                         </li>
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Analyse rentabilité Flex Pass</span>
                         </li>
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Audit assurance EDC par conducteur</span>
                         </li>
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Économies chiffrées au dollar près</span>
                         </li>
                      </ul>
                   </div>

                   <div className="mb-6">
                      <p className="text-gray-400 uppercase text-[10px] font-bold tracking-wide mb-2">Aussi inclus</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Comparatif concurrent Léo</span>
                         </li>
                         <li className="flex items-center gap-2.5">
                            <Check size={16} className="text-[#0066DA] shrink-0" />
                            <span>Comparatif Auto Personnelle</span>
                         </li>
                      </ul>
                   </div>

                   <div className="mt-auto">
                      <Link to="/optimizer" className="bg-[#0066DA] hover:bg-[#0055b5] text-white w-full py-3 rounded-[4px] font-bold text-center block transition-colors">
                        Commencer l'audit — 14.99$
                      </Link>
                      <p className="text-xs text-gray-400 text-center mt-2">Satisfait ou remboursé 30 jours</p>
                   </div>
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
