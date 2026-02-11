import React, { useState } from 'react';
import { TrendingUp, Check, Star, ArrowRight, Shield, Zap, Search, History, DollarSign, Car, Lock, FileSearch, Users, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Optimizer: React.FC = () => {
   const [activeStep, setActiveStep] = useState(1);


  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">
       
       {/* Hero / Value Prop */}
       <section className="pt-24 pb-12 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full mb-8">
             <Star size={12} fill="currentColor" className="text-yellow-400"/>
             <span className="text-xs font-bold uppercase tracking-wide">14.99$ pour 12 mois</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
             Identifiez des économies <br/>
             <span className="text-[#0066DA]">réelles.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
             Nous rejouons votre historique avec les tarifs 2026 pour révéler l'économie cachée.
          </p>
          
          <div className="flex justify-center">
             <Link to="/optimizer" className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-transform hover:scale-105 shadow-xl flex items-center gap-2">
                Commencer l'audit <ArrowRight size={20}/>
             </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">Paiement unique de 14.99$. Satisfait ou remboursé 30 jours.</p>
       </section>

       {/* Interactive Workflow Module */}
       <section className="pb-20 px-4">
         <div className="max-w-5xl mx-auto bg-white border border-[#E3E3E3] rounded-2xl shadow-xl overflow-hidden">
            {/* Steps Navigation */}
            <div className="grid grid-cols-3 border-b border-[#E3E3E3]">
               <button onClick={() => setActiveStep(1)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 1 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 1 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                     <span className={`font-bold text-xs md:text-base ${activeStep === 1 ? 'text-[#050505]' : 'text-gray-500'}`}>Données</span>
                  </div>
                  {activeStep === 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(2)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 2 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 2 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                     <span className={`font-bold text-xs md:text-base ${activeStep === 2 ? 'text-[#050505]' : 'text-gray-500'}`}>Replay</span>
                  </div>
                  {activeStep === 2 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(3)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 3 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 3 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                     <span className={`font-bold text-xs md:text-base ${activeStep === 3 ? 'text-[#050505]' : 'text-gray-500'}`}>Rapport</span>
                  </div>
                  {activeStep === 3 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
            </div>

            {/* Dynamic Content */}
            <div className="p-8 md:p-12 min-h-[300px] md:min-h-[500px] flex items-center justify-center bg-white transition-all duration-300">
               
               {/* STEP 1: Secure Data */}
               {activeStep === 1 && (
                  <div className="w-full animate-fade-in text-center max-w-lg mx-auto">
                     <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">Connexion Sécurisée</h3>
                        <p className="text-gray-500">Importez votre historique sans risque.</p>
                     </div>
                     <div className="bg-[#F7F7F5] rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6 border border-[#E3E3E3]">
                        <Lock size={48} className="text-gray-400"/>
                     </div>
                     <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Nous analysons vos factures pour extraire 12 mois d'historique de conduite réel. Aucune donnée bancaire n'est stockée.
                     </p>
                     <div className="flex justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                        <span className="flex items-center gap-1"><Check size={14}/> Chiffré</span>
                        <span className="flex items-center gap-1"><Check size={14}/> Anonyme</span>
                     </div>
                  </div>
               )}

               {/* STEP 2: Scenarios */}
               {activeStep === 2 && (
                  <div className="w-full animate-fade-in">
                     <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Simulation Massive</h3>
                        <p className="text-gray-500">Nous testons chaque variable pour vous.</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <div className="p-5 border border-[#E3E3E3] rounded-xl bg-white shadow-sm flex gap-4">
                           <div className="mt-1"><History size={20} className="text-[#0066DA]"/></div>
                           <div>
                              <h4 className="font-bold text-sm">Replay Historique</h4>
                              <p className="text-xs text-gray-500 mt-1">Vos trajets passés recalculés avec les 5 forfaits actuels.</p>
                           </div>
                        </div>
                        <div className="p-5 border border-[#E3E3E3] rounded-xl bg-white shadow-sm flex gap-4">
                           <div className="mt-1"><Zap size={20} className="text-[#0066DA]"/></div>
                           <div>
                              <h4 className="font-bold text-sm">Analyse Flex Pass</h4>
                              <p className="text-xs text-gray-500 mt-1">Rentabilité du pass Illimité ou 20 trajets vérifiée.</p>
                           </div>
                        </div>
                        <div className="p-5 border border-[#E3E3E3] rounded-xl bg-white shadow-sm flex gap-4">
                           <div className="mt-1"><Shield size={20} className="text-[#0066DA]"/></div>
                           <div>
                              <h4 className="font-bold text-sm">Audit Assurance</h4>
                              <p className="text-xs text-gray-500 mt-1">Vérification de la pertinence de l'option Collision.</p>
                           </div>
                        </div>
                        <div className="p-5 border border-[#E3E3E3] rounded-xl bg-white shadow-sm flex gap-4">
                           <div className="mt-1"><Car size={20} className="text-[#0066DA]"/></div>
                           <div>
                              <h4 className="font-bold text-sm">Comparatif Auto</h4>
                              <p className="text-xs text-gray-500 mt-1">Coût face à la possession d'une voiture personnelle.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               {/* STEP 3: Report */}
               {activeStep === 3 && (
                  <div className="w-full animate-fade-in max-w-md mx-auto">
                     <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Vos Économies</h3>
                        <p className="text-gray-500">Un rapport clair et actionnable.</p>
                     </div>
                     <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#E3E3E3] rotate-1">
                         <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                            <span className="font-bold text-lg">Rapport Final</span>
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase">Vérifié</span>
                         </div>
                         <div className="space-y-6">
                            <div className="flex justify-between items-center">
                               <span className="text-gray-500">Forfait Actuel</span>
                               <span className="font-mono font-bold text-red-500 line-through">1,240 $</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-gray-500">Forfait Optimal (Eco+)</span>
                               <span className="font-mono font-bold text-[#050505]">995 $</span>
                            </div>
                             <div className="flex justify-between items-center">
                               <span className="text-gray-500">Ajustement Flex Pass</span>
                               <span className="font-mono font-bold text-[#050505]">- 65 $</span>
                            </div>
                            
                            <div className="pt-6 border-t border-gray-100 text-center">
                               <div className="text-sm text-gray-500 mb-1">Économie annuelle identifiée</div>
                               <div className="text-5xl font-bold text-[#0066DA] tracking-tight">245 $</div>
                               <div className="text-xs text-green-600 font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">ROI estimé : 7x à 33x</div>
                            </div>
                         </div>
                      </div>
                  </div>
               )}

            </div>
         </div>
       </section>

       {/* Feature Grid */}
       <section className="py-20 bg-[#F7F7F5]">
          <div className="max-w-6xl mx-auto px-6">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">Fonctionnalités de l'Optimiseur</h2>
               <p className="text-gray-500">Entre les forfaits, les options Flex et les assurances, il existe des dizaines de combinaisons. Nous les testons toutes.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-blue-50 text-[#0066DA] rounded-lg flex items-center justify-center mb-4">
                      <History size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Replay Historique</h3>
                   <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Chaque trajet de votre historique est recalculé sous les 5 forfaits avec les tarifs actuels.
                   </p>
                   <ul className="text-xs text-gray-400 space-y-1">
                      <li>Filtrage par période : analysez 3 mois ou 2 ans</li>
                      <li>Choix du forfait de référence pour comparer</li>
                      <li>Économies exactes au dollar près</li>
                   </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Zap size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Analyse Flex Pass</h3>
                   <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Le Laissez-passer Flex (75$/mois) est-il rentable pour vous ?
                   </p>
                   <ul className="text-xs text-gray-400 space-y-1">
                      <li>Comparaison Illimité vs 20 trajets</li>
                      <li>Basée sur votre volume réel d'utilisation</li>
                      <li>Économies ou surcoûts chiffrés</li>
                   </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                      <Shield size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Assurance EDC</h3>
                   <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      L'Exclusion du Déductible de Collision (8-15$/mois) vaut-elle le coût ?
                   </p>
                   <ul className="text-xs text-gray-400 space-y-1">
                      <li>Analyse par conducteur (co-abonnés inclus)</li>
                      <li>Basée sur votre fréquence et types de trajets</li>
                   </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <SlidersHorizontal size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Paramètres Flexibles</h3>
                   <p className="text-sm text-gray-500 leading-relaxed mb-3">
                      Ajustez l'analyse selon votre situation exacte.
                   </p>
                   <ul className="text-xs text-gray-400 space-y-1">
                      <li>Nombre de co-abonnés ajustable</li>
                      <li>Période d'analyse personnalisable</li>
                      <li>Forfait de référence au choix</li>
                   </ul>
                </div>
             </div>
          </div>
       </section>

       {/* What's included */}
       <section className="py-20 bg-white border-t border-[#E3E3E3]">
          <div className="max-w-3xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-12">Ce qui est inclus pour 14.99$</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
                <div className="flex items-center gap-3">
                   <Check size={18} className="text-green-600 shrink-0"/>
                   <span className="text-sm text-gray-600">12 mois d'accès aux analyses</span>
                </div>
                <div className="flex items-center gap-3">
                   <Check size={18} className="text-green-600 shrink-0"/>
                   <span className="text-sm text-gray-600">Paiement unique, pas d'abonnement</span>
                </div>
                <div className="flex items-center gap-3">
                   <Check size={18} className="text-green-600 shrink-0"/>
                   <span className="text-sm text-gray-600">Satisfait ou remboursé 30 jours</span>
                </div>
                <div className="flex items-center gap-3">
                   <Check size={18} className="text-green-600 shrink-0"/>
                   <span className="text-sm text-gray-600">Recalcul si nouvelles factures importées</span>
                </div>
             </div>
          </div>
       </section>

       {/* Testimonials */}
       <section className="py-20 bg-white border-t border-[#E3E3E3]">
          <div className="max-w-6xl mx-auto px-6">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold">Ils ont économisé.</h2>
                 <p className="text-gray-500 mt-2">Économies typiques estimées : 100 à 500 $/an selon le profil.</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 border border-[#E3E3E3] rounded-xl bg-white shadow-sm">
                   <div className="flex text-yellow-400 mb-4 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                   <p className="text-lg font-medium mb-4 leading-relaxed">"J'ai rentabilisé les 15$ de l'audit en 30 secondes. J'étais sur le mauvais forfait depuis 2 ans."</p>
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs">TR</div>
                      <div className="text-sm font-bold text-gray-900">Thomas R.</div>
                   </div>
                </div>
                <div className="p-8 border border-[#E3E3E3] rounded-xl bg-white shadow-sm">
                   <div className="flex text-yellow-400 mb-4 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                   <p className="text-lg font-medium mb-4 leading-relaxed">"L'analyse du Flex Pass est introuvable ailleurs. C'est le seul outil qui le calcule correctement."</p>
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs">SL</div>
                      <div className="text-sm font-bold text-gray-900">Sarah L.</div>
                   </div>
                </div>
                <div className="p-8 border border-[#E3E3E3] rounded-xl bg-white shadow-sm">
                   <div className="flex text-yellow-400 mb-4 gap-1"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                   <p className="text-lg font-medium mb-4 leading-relaxed">"Interface propre, sécurisé, et le résultat est sans appel. Merci pour l'économie."</p>
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-xs">MD</div>
                      <div className="text-sm font-bold text-gray-900">Marc D.</div>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Bottom CTA */}
       <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3]">
          <div className="max-w-3xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-bold mb-4">Prêt à découvrir vos économies ?</h2>
             <p className="text-gray-500 mb-8">Commencez gratuitement avec le simulateur, ou lancez l'audit complet de votre historique.</p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/calculator" className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-colors flex items-center justify-center gap-2">
                   Essayer le simulateur gratuit <ArrowRight size={20}/>
                </Link>
                <Link to="/extractor" className="border border-[#E3E3E3] bg-white text-[#050505] px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#F7F7F5] transition-colors">
                   Importer mes factures
                </Link>
             </div>
          </div>
       </section>

    </div>
  );
};

export default Optimizer;