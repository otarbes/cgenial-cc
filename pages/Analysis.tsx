import React from 'react';
import { FileText, Check, Lock, Upload, BarChart3, TrendingUp, Zap, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Analysis: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="pt-20 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8 border border-brand-100 animate-fade-in-up">
             <Upload size={16} /> Importez vos PDF Communauto
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Vos factures cachent des trésors. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">Révélez-les.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Nous transformons vos factures PDF complexes en tableaux de bord clairs.
            Visualisez votre historique gratuitement, ou activez l'optimiseur pour économiser.
          </p>
        </div>
      </section>

      {/* Pricing / Tiers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Free Tier - Extractor */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Gratuit à vie
              </div>
              
              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-600">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">L'Extracteur</h3>
                <p className="text-gray-500 mt-2">Pour comprendre et visualiser votre usage.</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong>Extraction PDF illimitée</strong> de vos factures</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Export des données structurées (Excel/CSV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Historique complet des services</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Statistiques d'usage (Km, Heures, Fréquence)</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl font-bold transition-colors">
                Créer un compte gratuit
              </button>
            </div>

            {/* Paid Tier - Optimizer */}
            <div className="bg-white rounded-3xl p-8 border-2 border-brand-500 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase">
                Recommandé
              </div>

              <div className="text-center mb-8 mt-4">
                <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-brand-600">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">L'Optimiseur</h3>
                <p className="text-gray-500 mt-2">Pour auditer et réduire vos factures.</p>
                <div className="mt-4 flex items-center justify-center gap-1">
                  <span className="text-3xl font-bold text-gray-900">14.99$</span>
                  <span className="text-gray-400">/ audit</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                     <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">Tout ce qu'il y a dans l'Extracteur</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                     <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">Calcul du <strong>meilleur forfait</strong> sur historique réel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                     <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">Audit des options d'assurances (Collision)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                     <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">Rentabilité <strong>Laissez-passer Flex</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-brand-100 p-1 rounded-full text-brand-600 mt-0.5">
                     <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-gray-800 font-medium">Comparatif Léo & Auto Perso</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-brand-200">
                Commencer mon audit
              </button>
              <p className="text-xs text-center text-gray-400 mt-3">Satisfait ou remboursé si aucune économie trouvée.</p>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Comment ça marche ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 font-bold text-2xl">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Téléversez</h3>
              <p className="text-gray-500">
                Importez vos fichiers PDF téléchargés depuis votre espace client Communauto.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600 font-bold text-2xl">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analysez (Gratuit)</h3>
              <p className="text-gray-500">
                Notre algorithme lit, nettoie et structure vos données. Vous accédez immédiatement à vos stats.
              </p>
            </div>
            <div className="text-center px-4">
              <div className="w-20 h-20 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-600 font-bold text-2xl">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimisez (Payant)</h3>
              <p className="text-gray-500">
                Nous rejouons votre année avec tous les tarifs possibles pour trouver la combinaison la moins chère.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
          <div className="bg-green-100 p-3 rounded-full text-green-700 shrink-0">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Confidentialité Maximale</h3>
            <p className="text-gray-600 text-sm">
              Vos factures contiennent des données sensibles. Nous les traitons de manière automatisée et sécurisée. 
              Vos données ne sont <strong>jamais revendues</strong> à des tiers.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Analysis;