import React from 'react';
import { Sparkles, Check, ShieldCheck, Clock, MapPin, Sun, Calendar, Moon, DollarSign, Repeat } from 'lucide-react';
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
          <button
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0066DA] hover:bg-[#0055b5] text-white px-6 py-3 rounded-[4px] font-semibold text-[15px] transition-colors"
          >
            Découvrir les outils
          </button>
        </div>
      </section>

      {/* On a reconstruit le calculateur */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-lg">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-5">Règles intégrées</div>
                <div className="space-y-3">
                  {[
                    { icon: <Clock size={16}/>, color: "bg-blue-50 text-blue-600", label: "Tarif horaire", detail: "Par forfait et par type de véhicule" },
                    { icon: <MapPin size={16}/>, color: "bg-green-50 text-green-600", label: "Tarif kilométrique", detail: "Variable selon le forfait choisi" },
                    { icon: <Sun size={16}/>, color: "bg-orange-50 text-orange-600", label: "Haute saison", detail: "15 juin au 15 octobre — majoration appliquée" },
                    { icon: <Calendar size={16}/>, color: "bg-red-50 text-red-600", label: "Supplément week-end", detail: "Vendredi 15h au lundi 9h" },
                    { icon: <Moon size={16}/>, color: "bg-indigo-50 text-indigo-600", label: "Nuit gratuite", detail: "0h-6h pour Éco+ et Éco Extra" },
                    { icon: <DollarSign size={16}/>, color: "bg-yellow-50 text-yellow-600", label: "Maximum journalier", detail: "Plafond de coût par réservation" },
                    { icon: <Repeat size={16}/>, color: "bg-purple-50 text-purple-600", label: "Abonnement mensuel", detail: "Inclus dans le total annuel" },
                  ].map((rule, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-[#E3E3E3]">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${rule.color}`}>
                        {rule.icon}
                      </div>
                      <div>
                        <div className="font-bold text-sm">{rule.label}</div>
                        <div className="text-xs text-gray-400">{rule.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                On a reconstruit<br/>le calculateur<br/>de Communauto.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Pas une estimation approximative. Nous avons implémenté l'intégralité des règles de calcul de Communauto : chaque grille tarifaire, chaque exception, chaque subtilité. Le résultat : un prix qui correspond exactement à ce que vous verrez sur votre facture.
              </p>
              <ul className="space-y-4">
                {[
                  "6 grilles tarifaires (avril 2021 à aujourd'hui)",
                  "Tarifs saisonniers, week-end, nuits gratuites",
                  "Maximum journalier par réservation",
                  "Abonnements mensuels inclus dans le total",
                  "Mise à jour sous 48h après chaque annonce Communauto",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#0066DA] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-white" size={12}/>
                    </div>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

          {/* 3 cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

             {/* Card 1: Calculator */}
             <div className="bg-white border border-[#E3E3E3] rounded-2xl p-7 flex flex-col h-full shadow-sm">
                <div className="mb-5">
                   <span className="inline-block bg-green-50 text-green-700 border border-green-200 text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                     Outil gratuit
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Le Calculateur</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Idéal pour les nouveaux utilisateurs ou pour tester des scénarios hypothétiques. Vous renseignez vos trajets types (ex: "Épicerie 4x/mois") et le calculateur projette ces données sur un an.
                </p>

                {/* Benefits */}
                <div className="mb-6">
                   <p className="text-green-600 uppercase text-xs font-bold tracking-wide mb-3">Ce que vous obtenez</p>
                   <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Identifiez le forfait le moins cher pour vous</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Simulez vos habitudes réelles, pas un trajet isolé</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Comprenez exactement d'où vient chaque dollar</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Sachez si le Flex Pass est rentable pour vous</span>
                      </li>
                   </ul>
                </div>

                <div className="mt-auto space-y-2.5">
                   <Link to="/calculator" className="bg-[#050505] hover:bg-[#333333] text-white w-full py-3 rounded-lg font-semibold text-center block transition-colors">
                     En savoir plus
                   </Link>
                   <Link to="/calculator/tool" className="border border-[#E3E3E3] text-[#050505] hover:bg-[#F7F7F5] w-full py-3 rounded-lg font-medium text-center block transition-colors text-sm">
                     Ouvrir le calculateur
                   </Link>
                </div>
             </div>

             {/* Card 2: Extractor */}
             <div className="bg-white border border-[#E3E3E3] rounded-2xl p-7 flex flex-col h-full shadow-sm">
                <div className="mb-5">
                   <span className="inline-block bg-green-50 text-green-700 border border-green-200 text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                     Outil gratuit
                   </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">L'Extracteur</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Transformez vos factures PDF illisibles en données structurées et exploitables. Nous détectons l'historique complet de vos services, trajets, durées et distances réelles depuis vos factures.
                </p>

                {/* Benefits */}
                <div className="mb-6">
                   <p className="text-green-600 uppercase text-xs font-bold tracking-wide mb-3">Ce que vous obtenez</p>
                   <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Voyez chaque trajet, distance et durée en clair</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Repérez vos taxes TPS/TVQ en un coup d'oeil</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Gérez facilement les co-abonnés sur votre compte</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-500 shrink-0 mt-0.5" />
                         <span>Exportez vos données en CSV / Excel en un clic</span>
                      </li>
                   </ul>
                </div>

                <div className="mt-auto space-y-2.5">
                   <Link to="/extractor" className="bg-[#050505] hover:bg-[#333333] text-white w-full py-3 rounded-lg font-semibold text-center block transition-colors">
                     En savoir plus
                   </Link>
                   <Link to="/extractor" className="border border-[#E3E3E3] text-[#050505] hover:bg-[#F7F7F5] w-full py-3 rounded-lg font-medium text-center block transition-colors text-sm">
                     Créer un compte
                   </Link>
                </div>
             </div>

             {/* Card 3: Optimizer — Premium */}
             <div className="relative bg-gradient-to-b from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-7 flex flex-col h-full shadow-sm overflow-hidden">
                {/* Decorative background icon */}
                <div className="absolute -top-2 -right-2 text-green-200/60">
                   <Sparkles size={80} strokeWidth={1} />
                </div>

                <div className="relative mb-5">
                   <span className="inline-block bg-green-600 text-white text-[11px] uppercase font-bold px-2.5 py-1 rounded-full tracking-wide">
                     Premium &bull; 14.99$
                   </span>
                </div>
                <h3 className="relative text-2xl font-bold mb-3">L'Optimiseur</h3>
                <p className="relative text-gray-600 text-sm leading-relaxed mb-6">
                  La précision absolue. Nous rejouons votre historique réel sous les 5 forfaits pour identifier le forfait mathématiquement optimal. Chaque trajet passé est recalculé avec les tarifs actuels.
                </p>

                {/* Benefits */}
                <div className="relative mb-6">
                   <p className="text-green-700 uppercase text-xs font-bold tracking-wide mb-3">Ce que vous obtenez</p>
                   <ul className="space-y-2.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
                         <span>Découvrez combien vous auriez payé sur chaque forfait</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
                         <span>Sachez si le Flex Pass vous fait vraiment économiser</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
                         <span>Vérifiez si votre assurance EDC est rentable</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                         <Check size={16} className="text-green-600 shrink-0 mt-0.5" />
                         <span>Voyez vos économies potentielles au dollar près</span>
                      </li>
                   </ul>
                </div>

                <div className="relative mt-auto space-y-2.5">
                   <Link to="/optimizer" className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-lg font-bold text-center block transition-colors">
                     En savoir plus
                   </Link>
                   <Link to="/optimizer" className="border border-green-300 text-green-700 hover:bg-green-100 w-full py-3 rounded-lg font-medium text-center block transition-colors text-sm">
                     Créer un compte
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
