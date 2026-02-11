import React, { useState, useEffect } from 'react';
import { ArrowRight, Calculator as CalcIcon, CheckCircle2, Zap, LayoutGrid, Clock, PiggyBank, Repeat, Split, RefreshCw, MapPin, Calendar, Check, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Calculator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">
       {/* Hero */}
       <section className="pt-24 pb-12 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#F7F7F5] border border-[#E3E3E3] rounded-full px-3 py-1 mb-8">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Gratuit & Sans inscription</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
             Simulez vos trajets <br/>
             <span className="text-[#0066DA]">au dollar près.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
             Un moteur de calcul puissant qui gère les récurrences, compare les modes Flex vs Station et intègre la grille tarifaire 2026.
          </p>
          <div className="flex justify-center">
             <Link
                to="/calculator/tool"
                className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-transform hover:scale-105 shadow-xl flex items-center gap-2"
             >
                Lancer le simulateur <ArrowRight size={20}/>
             </Link>
          </div>
       </section>

       {/* Interactive Workflow Module */}
       <section className="pb-20 px-4">
         <div className="max-w-5xl mx-auto bg-white border border-[#E3E3E3] rounded-2xl shadow-xl overflow-hidden">
            {/* Steps Navigation */}
            <div className="grid grid-cols-3 border-b border-[#E3E3E3]">
               <button onClick={() => setActiveStep(1)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 1 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 1 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 1 ? 'text-[#050505]' : 'text-gray-500'}`}>Définition</span>
                  </div>
                  {activeStep === 1 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(2)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 2 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 2 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 2 ? 'text-[#050505]' : 'text-gray-500'}`}>Moteur</span>
                  </div>
                  {activeStep === 2 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
               <button onClick={() => setActiveStep(3)} className={`py-4 md:py-6 px-4 text-left relative transition-colors ${activeStep === 3 ? 'bg-white' : 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'}`}>
                  <div className="flex items-center gap-3">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${activeStep === 3 ? 'bg-[#0066DA] text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                     <span className={`font-bold hidden md:inline ${activeStep === 3 ? 'text-[#050505]' : 'text-gray-500'}`}>Résultat</span>
                  </div>
                  {activeStep === 3 && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0066DA]"></div>}
               </button>
            </div>

            {/* Dynamic Content */}
            <div className="p-8 md:p-12 min-h-[450px] flex items-center justify-center bg-white transition-all duration-300">
               
               {/* STEP 1: Input Form Visual */}
               {activeStep === 1 && (
                  <div className="w-full animate-fade-in max-w-lg mx-auto">
                     <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Créez vos trajets</h3>
                        <p className="text-gray-500">Définissez vos habitudes de déplacement simplement.</p>
                     </div>
                     <div className="bg-white rounded-xl shadow-lg border border-[#E3E3E3] p-6 relative">
                        <div className="mb-4">
                           <div className="text-xs font-bold text-gray-400 uppercase mb-1">Nom du trajet</div>
                           <div className="bg-gray-50 p-2 rounded border border-gray-200 text-sm font-medium">Épicerie Hebdo</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                           <div>
                              <div className="text-xs font-bold text-gray-400 uppercase mb-1 flex items-center gap-1"><Clock size={10}/> Durée</div>
                              <div className="bg-gray-50 p-2 rounded border border-gray-200 text-sm font-medium">2 h</div>
                           </div>
                           <div>
                              <div className="text-xs font-bold text-gray-400 uppercase mb-1 flex items-center gap-1"><MapPin size={10}/> Distance</div>
                              <div className="bg-gray-50 p-2 rounded border border-gray-200 text-sm font-medium">12 km</div>
                           </div>
                        </div>
                        <div>
                           <div className="text-xs font-bold text-gray-400 uppercase mb-1 flex items-center gap-1"><Calendar size={10}/> Fréquence</div>
                           <div className="bg-blue-50 p-2 rounded border border-blue-100 text-sm font-medium text-[#0066DA] flex justify-between">
                              <span>4 fois / mois</span>
                              <Check size={16}/>
                           </div>
                        </div>
                        {/* Cursor imitation */}
                        <div className="absolute bottom-6 right-6 pointer-events-none">
                           <MousePointer2 className="fill-black text-white drop-shadow-md" size={24}/>
                        </div>
                     </div>
                  </div>
               )}

               {/* STEP 2: Logic Grid */}
               {activeStep === 2 && (
                  <div className="w-full animate-fade-in">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Calcul Instantané</h3>
                        <p className="text-gray-500">Notre moteur compare des milliers de possibilités en temps réel.</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600 shadow-sm"><Repeat size={20}/></div>
                           <div><div className="font-bold">Projection Annuelle</div><div className="text-xs text-gray-500">Calcul basé sur la récurrence</div></div>
                        </div>
                        <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-600 shadow-sm"><Split size={20}/></div>
                           <div><div className="font-bold">Flex vs Station</div><div className="text-xs text-gray-500">Comparatif des 2 modes</div></div>
                        </div>
                        <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-purple-600 shadow-sm"><LayoutGrid size={20}/></div>
                           <div><div className="font-bold">5 Forfaits</div><div className="text-xs text-gray-500">Liberté à Eco Extra</div></div>
                        </div>
                        <div className="p-4 border border-[#E3E3E3] rounded-xl flex items-center gap-4 bg-[#F7F7F5]">
                           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-green-600 shadow-sm"><Zap size={20}/></div>
                           <div><div className="font-bold">Flex Pass</div><div className="text-xs text-gray-500">Analyse de rentabilité</div></div>
                        </div>
                     </div>
                  </div>
               )}

               {/* STEP 3: Result Visual */}
               {activeStep === 3 && (
                  <div className="w-full animate-fade-in max-w-xl mx-auto">
                     <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Recommandation Claire</h3>
                        <p className="text-gray-500">Identifiez immédiatement le forfait gagnant.</p>
                     </div>
                     <div className="border-2 border-[#0066DA] bg-blue-50 p-6 rounded-xl relative shadow-lg">
                       <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0066DA] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Meilleur choix</div>
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <div className="text-sm text-gray-600 font-medium mb-1">Forfait Recommandé</div>
                             <div className="text-2xl font-bold text-[#0066DA]">Économique</div>
                          </div>
                          <div className="text-right">
                             <div className="text-sm text-gray-600 font-medium mb-1">Coût Annuel</div>
                             <div className="text-2xl font-bold text-gray-900">1,120 $</div>
                          </div>
                       </div>
                       <div className="h-px bg-blue-200 w-full mb-4"></div>
                       <div className="flex justify-between items-center text-sm">
                          <span className="text-blue-700 font-medium">Économie vs Liberté</span>
                          <span className="bg-white px-2 py-1 rounded text-green-600 font-bold border border-green-100">+ 330 $ /an</span>
                       </div>
                    </div>
                  </div>
               )}
            </div>
         </div>
       </section>

       {/* Detailed Feature Grid (Static) */}
       <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3]">
          <div className="max-w-6xl mx-auto px-6">
             <h2 className="text-3xl font-bold mb-16 text-center">Fonctionnalités du Calculateur</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-blue-50 text-[#0066DA] rounded-lg flex items-center justify-center mb-4">
                      <Repeat size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Gestion des Récurrences</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      Définissez un trajet comme "Hebdomadaire" ou "Mensuel". L'outil projette automatiquement le coût sur une année complète.
                   </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                      <Split size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Double Mode de Calcul</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      Chaque trajet est calculé simultanément en mode <strong>Station</strong> et en mode <strong>Flex</strong>. Voyez instantanément quel véhicule choisir.
                   </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                      <RefreshCw size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Temps Réel</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      Recalcul automatique à chaque modification (300ms). Idéal pour tester des scénarios "What if".
                   </p>
                </div>

                {/* Feature 4 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <LayoutGrid size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Les 5 Forfaits</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      Comparatif complet : Liberté, Liberté+, Économique, Éco+ et Éco Extra. Le gagnant est mis en évidence.
                   </p>
                </div>

                {/* Feature 5 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                      <Zap size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Analyse Flex Pass</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      L'outil détecte si l'abonnement "Laissez-passer Flex" (Illimité ou 20 trajets) est rentable selon votre volume.
                   </p>
                </div>

                {/* Feature 6 */}
                <div className="p-8 bg-white border border-[#E3E3E3] rounded-2xl hover:shadow-lg transition-shadow">
                   <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                      <Clock size={20}/>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Détails subtils</h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      Prise en compte des tarifs de nuit (gratuits sur certains forfaits) et des tarifs longue distance.
                   </p>
                </div>
             </div>
          </div>
       </section>

       {/* Bottom CTA */}
       <section className="py-24 bg-white text-center">
          <div className="max-w-2xl mx-auto px-6">
             <h2 className="text-4xl font-bold mb-8">Testez vos scénarios maintenant.</h2>
             <Link
                to="/calculator/tool"
                className="inline-flex items-center gap-2 bg-[#0066DA] hover:bg-[#0055b5] text-white px-8 py-4 rounded-[4px] font-bold text-lg transition-colors shadow-lg shadow-blue-100"
             >
                Démarrer le simulateur <ArrowRight size={20}/>
             </Link>
          </div>
       </section>
    </div>
  );
};

export default Calculator;