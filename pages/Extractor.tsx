import React, { useState, useEffect } from 'react';
import { FileSearch, Upload, ShieldCheck, Database, FileText, Languages, Users, Eye, Cloud, TrendingUp, Wallet, BarChart3, Loader2, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Extractor: React.FC = () => {
   const [activeStep, setActiveStep] = useState(1);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
     }, 5000); // Slower rotation to allow reading
     return () => clearInterval(interval);
   }, []);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 max-w-4xl mx-auto px-6 text-center">
         <div className="inline-flex items-center gap-2 bg-[#F7F7F5] border border-[#E3E3E3] rounded-full px-3 py-1 mb-8">
             <span className="w-2 h-2 rounded-full bg-blue-500"></span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Gratuit</span>
         </div>
         <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Pilotez votre budget <br/>
            <span className="text-[#0066DA]">au centime près.</span>
         </h1>
         <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Plus qu'un simple export Excel. Transformez vos factures PDF illisibles en un tableau de bord clair : évolution mensuelle, coût par trajet et analyse des frais annexes.
         </p>
         <div className="flex justify-center mb-12">
            <button className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-transform hover:scale-105 shadow-xl flex items-center gap-2">
               Importer mes factures <ArrowRight size={20}/>
            </button>
         </div>
      </section>

      {/* Interactive Workflow Module */}
      <section className="pb-20 px-4">
         <div className="max-w-5xl mx-auto bg-white border border-[#E3E3E3] rounded-2xl shadow-xl overflow-hidden">
            {/* Steps Navigation */}
            <div className="grid grid-cols-3 border-b border-[#E3E3E3]">
               <button 
                  onClick={() => setActiveStep(1)}
                  className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 1 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}
               >
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 1 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 1 ? 'text-[#050505]' : 'text-gray-500'}`}>Importation</span>
                  </div>
                  {activeStep === 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button 
                  onClick={() => setActiveStep(2)}
                  className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 2 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}
               >
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 2 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 2 ? 'text-[#050505]' : 'text-gray-500'}`}>Extraction</span>
                  </div>
                  {activeStep === 2 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button 
                  onClick={() => setActiveStep(3)}
                  className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 3 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}
               >
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 3 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 3 ? 'text-[#050505]' : 'text-gray-500'}`}>Visualisation claire</span>
                  </div>
                  {activeStep === 3 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
            </div>

            {/* Dynamic Content Area */}
            <div className="p-8 md:p-12 min-h-[500px] flex items-center justify-center bg-white transition-all duration-300">
               
               {/* STEP 1 CONTENT: Upload */}
               {activeStep === 1 && (
                  <div className="w-full animate-fade-in">
                     <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Déposez vos factures</h3>
                        <p className="text-gray-500">Accepte tous les PDF Communauto, anciens et nouveaux formats.</p>
                     </div>
                     <div className="bg-[#F7F7F5] border-2 border-dashed border-[#E3E3E3] rounded-2xl p-12 max-w-xl mx-auto hover:border-[#0066DA] transition-colors cursor-pointer group">
                        <div className="flex flex-col items-center gap-4">
                           <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 group-hover:text-[#0066DA] group-hover:scale-110 transition-all">
                              <Upload size={32} />
                           </div>
                           <div className="text-center">
                              <h3 className="text-lg font-bold group-hover:text-[#0066DA] transition-colors">Glissez-déposez vos PDF</h3>
                              <p className="text-sm text-gray-500">ou cliquez pour parcourir vos fichiers</p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}

               {/* STEP 2 CONTENT: Technical Grid */}
               {activeStep === 2 && (
                  <div className="w-full animate-fade-in">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Extraction Intelligente</h3>
                        <p className="text-gray-500">Notre algorithme structure et nettoie vos données brutes.</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm"><Database size={20}/></div>
                           <div><div className="font-bold">Structure Auto</div><div className="text-xs text-gray-500">Trajets, dates, et km isolés</div></div>
                        </div>
                         <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 shadow-sm"><Users size={20}/></div>
                           <div><div className="font-bold">Multi-Usagers</div><div className="text-xs text-gray-500">Détection des co-abonnés</div></div>
                        </div>
                         <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-600 shadow-sm"><Languages size={20}/></div>
                           <div><div className="font-bold">Bilingue</div><div className="text-xs text-gray-500">Factures FR & EN acceptées</div></div>
                        </div>
                         <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-600 shadow-sm"><ShieldCheck size={20}/></div>
                           <div><div className="font-bold">Stockage Sécurisé</div><div className="text-xs text-gray-500">Chiffrement de vos données</div></div>
                        </div>
                     </div>
                  </div>
               )}

               {/* STEP 3 CONTENT: Dashboard */}
               {activeStep === 3 && (
                  <div className="w-full animate-fade-in">
                     <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Tableau de Bord</h3>
                        <p className="text-gray-500">Visualisez vos dépenses et téléchargez l'export CSV.</p>
                     </div>
                     <div className="bg-[#F7F7F5] rounded-2xl border border-[#E3E3E3] p-6 shadow-sm max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                           <div className="bg-white p-4 rounded-xl border border-[#E3E3E3] shadow-sm">
                              <div className="text-xs text-gray-500 mb-1">Dépenses 2024</div>
                              <div className="text-xl font-bold text-[#050505]">2,450.00 $</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-[#E3E3E3] shadow-sm">
                              <div className="text-xs text-gray-500 mb-1">Coût / Trajet</div>
                              <div className="text-xl font-bold text-[#050505]">38.40 $</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-[#E3E3E3] shadow-sm">
                              <div className="text-xs text-gray-500 mb-1">Frais & Taxes</div>
                              <div className="text-xl font-bold text-orange-500">320.15 $</div>
                           </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#E3E3E3] shadow-sm h-32 flex items-end justify-between px-4 gap-2">
                            {[35, 55, 40, 70, 60, 45, 80, 50, 60, 40, 30, 50].map((h, i) => (
                              <div key={i} className="w-full bg-blue-100 rounded-t-sm relative">
                                 <div className="absolute bottom-0 w-full bg-[#0066DA] rounded-t-sm" style={{height: `${h}%`}}></div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               )}

            </div>
         </div>
      </section>

      {/* Technical Features Grid (Static Reminder) */}
      <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3]">
         <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Fonctionnalités de l'Extracteur</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Card 1 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-green-600">
                     <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Sauvegarde Sécurisée</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Vos factures sont stockées sur nos serveurs sécurisés. Vous ne perdrez plus jamais votre historique de trajets.
                  </p>
               </div>

               {/* Card 2 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-blue-600">
                     <Wallet size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Ventilation des Frais</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Identifiez immédiatement les "Frais divers": pénalités de retard, frais de réservation annulée, ou franchise d'accident.
                  </p>
               </div>

               {/* Card 3 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-purple-600">
                     <Users size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Support Co-abonnés</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Détection automatique des différents numéros d'usager présents sur la même facture pour diviser les coûts.
                  </p>
               </div>

               {/* Card 4 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-orange-600">
                     <Languages size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Bilingue & Flexible</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Fonctionne indifféremment avec les factures en français ou en anglais, et s'adapte aux changements de formats PDF.
                  </p>
               </div>

               {/* Card 5 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-gray-600">
                     <BarChart3 size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Monitoring Mensuel</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Suivez l'évolution de votre budget mois par mois. Repérez les anomalies de consommation instantanément.
                  </p>
               </div>

                {/* Card 6 */}
               <div className="bg-white p-8 rounded-2xl border border-[#E3E3E3] flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-[#F7F7F5] rounded-lg flex items-center justify-center border border-[#E3E3E3] mb-4 text-gray-600">
                     <FileText size={20} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Export CSV / Excel</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                     Pour les experts : téléchargez une version brute propre pour vos propres analyses dans Excel ou Notion.
                  </p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Extractor;