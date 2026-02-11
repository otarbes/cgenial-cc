import React, { useState, useEffect } from 'react';
import { TrendingUp, Check, Star, ArrowRight, Shield, Zap, Search, History, DollarSign, Car, Lock, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';

const Optimizer: React.FC = () => {
   const [activeStep, setActiveStep] = useState(1);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
     }, 5000); 
     return () => clearInterval(interval);
   }, []);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">
       
       {/* Hero / Value Prop */}
       <section className="pt-24 pb-12 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full mb-8">
             <Star size={12} fill="currentColor" className="text-yellow-400"/>
             <span className="text-xs font-bold uppercase tracking-wide">14.99$ pour 12 mois</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
             Identifiez des économies <br/>
             <span className="text-[#0066DA]">réelles.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
             Nous rejouons votre historique avec les tarifs 2026 pour révéler l'économie cachée.
          </p>
          
          <div className="flex justify-center">
             <button className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-transform hover:scale-105 shadow-xl flex items-center gap-2">
                Commencer l'audit <ArrowRight size={20}/>
             </button>
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
                     <span className={`font-bold hidden md:inline ${activeStep === 1 ? 'text-[#050505]' : 'text-gray-500'}`}>Données</span>
                  </div>
                  {activeStep === 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(2)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 2 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 2 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 2 ? 'text-[#050505]' : 'text-gray-500'}`}>Replay</span>
                  </div>
                  {activeStep === 2 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(3)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 3 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 3 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 3 ? 'text-[#050505]' : 'text-gray-500'}`}>Rapport</span>
                  </div>
                  {activeStep === 3 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
            </div>

            {/* Dynamic Content */}
            <div className="p-8 md:p-12 min-h-[500px] flex items-center justify-center bg-white transition-all duration-300">
               
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
                               <div className="text-xs text-green-600 font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">ROI Immédiat (16x)</div>
                            </div>
                         </div>
                      </div>
                  </div>
               )}

            </div>
         </div>
       </section>

       {/* Detailed Methodology Section (Static Text) */}
       <section className="py-20 bg-[#F7F7F5]">
          <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">Fonctionnalités de l'Optimiseur</h2>
               <p className="text-gray-500">Entre les forfaits, les options Flex et les assurances, il existe des dizaines de combinaisons possibles.</p>
             </div>
             <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E3E3E3] shadow-sm">
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                   Notre algorithme de "Replay" est le seul capable de tester <strong>tous les scénarios</strong> sur <strong>chacun de vos trajets passés</strong> pour trouver la configuration mathématiquement parfaite.
                </p>
             </div>
          </div>
       </section>

       {/* Testimonials */}
       <section className="py-20 bg-white border-t border-[#E3E3E3]">
          <div className="max-w-6xl mx-auto px-6">
             <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold">Ils ont économisé.</h2>
                 <p className="text-gray-500 mt-2">Économie moyenne constatée : 180 $/an.</p>
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

    </div>
  );
};

export default Optimizer;