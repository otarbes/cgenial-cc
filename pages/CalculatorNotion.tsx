import React, { useState } from 'react';
import { ArrowRight, Play, Repeat, Split, LayoutGrid, Zap, Clock, RefreshCw, ShieldCheck, ChevronDown, Check, FileSearch, BarChart3, Car, Calculator as CalcIcon, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    q: "Comment le calculateur détermine-t-il le forfait optimal\u00a0?",
    a: "Le moteur simule chaque trajet sur les 5 forfaits Communauto en parallèle, en appliquant la grille tarifaire 2026 complète (tarifs saisonniers, suppléments week-end, heures de nuit gratuites). Le forfait au coût annuel le plus bas est automatiquement identifié."
  },
  {
    q: "Les tarifs sont-ils à jour\u00a0?",
    a: "Oui. Le calculateur intègre la grille tarifaire d'avril 2026, incluant les 5 forfaits Station et les véhicules Flex. Nous mettons à jour les tarifs dans les 48h suivant chaque annonce de Communauto."
  },
  {
    q: "Puis-je simuler plusieurs trajets différents\u00a0?",
    a: "Absolument. Ajoutez autant de trajets que nécessaire (épicerie, travail, visite famille…). Chaque trajet a sa propre durée, distance et fréquence. Le calcul global prend en compte l'ensemble de vos habitudes."
  },
  {
    q: "Quelle est la différence entre le mode Station et Flex\u00a0?",
    a: "Le mode Station utilise des véhicules réservés à l'avance dans des emplacements fixes. Le mode Flex permet de prendre et laisser un véhicule n'importe où dans la zone de service. Les tarifs diffèrent : le calculateur compare les deux pour chaque trajet."
  },
  {
    q: "Mes données sont-elles stockées\u00a0?",
    a: "Non. Le calculateur fonctionne entièrement dans votre navigateur. Aucune donnée n'est envoyée à un serveur. Vos trajets restent sur votre appareil et disparaissent quand vous fermez l'onglet."
  },
  {
    q: "Quelle est la différence avec le simulateur officiel de Communauto\u00a0?",
    a: "Le simulateur officiel est limité à un seul trajet et un seul forfait à la fois. Le nôtre gère les multi-trajets récurrents, compare les 5 forfaits simultanément, et intègre l'analyse Flex Pass."
  }
];

const CalculatorNotion: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">

      {/* ─── HERO ─── */}
      <section className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F7F7F5] border border-[#E3E3E3] rounded-full px-3 py-1 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Gratuit &middot; Sans inscription</span>
        </div>
        <h1 className="text-4xl md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
          Simulez vos coûts Communauto,<br/>
          <span className="text-[#0066DA]">au dollar près.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Multi-trajets, récurrences, 5 forfaits comparés en temps réel. Le moteur de calcul le plus précis pour les membres Communauto.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/calculator/tool"
            className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
          >
            Lancer le simulateur <ArrowRight size={20}/>
          </Link>
          <a
            href="#demo"
            className="text-[#37352f] px-8 py-4 rounded-[4px] font-medium text-lg hover:bg-[#F7F7F5] transition-colors flex items-center justify-center gap-2 border border-[#E3E3E3]"
          >
            Voir la démo
          </a>
        </div>
      </section>

      {/* ─── VIDEO SECTION ─── */}
      <section id="demo" className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#E3E3E3] shadow-2xl bg-[#F7F7F5] aspect-video group cursor-pointer">
            {/* Video placeholder - replace src with actual video */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#050505] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={32} fill="white"/>
                </div>
                <p className="text-gray-500 font-medium">Découvrez le calculateur en 90 secondes</p>
              </div>
            </div>
            {/* Decorative browser chrome */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-[#E3E3E3] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              <div className="flex-1 mx-4">
                <div className="bg-[#F7F7F5] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-400">cgenial.app/calculator</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE / SOCIAL PROOF ─── */}
      <section className="py-20 bg-white border-t border-b border-[#E3E3E3]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl text-gray-200 font-serif leading-none mb-4">&laquo;</div>
          <blockquote className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-[#050505]">
            Ce qui prenait des heures avec un tableur Excel peut désormais être réglé en quelques minutes.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0066DA] flex items-center justify-center text-white font-bold text-sm">C</div>
            <div className="text-left">
              <div className="font-bold text-sm">Communauté Cgénial</div>
              <div className="text-xs text-gray-400">Membre depuis 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT 1 : Multi-trajets ─── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
              Simulez tous vos trajets,<br/>en une seule vue.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Ajoutez vos habitudes de déplacement : épicerie, travail, loisirs. Chaque trajet a sa durée, sa distance et sa fréquence.
            </p>
          </div>
          {/* Two-column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-2xl p-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-blue-600">
                <Repeat size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Récurrences Intelligentes</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Définissez un trajet comme récurrent (hebdomadaire, bimensuel…). Le moteur projette automatiquement le coût sur 12 mois.
              </p>
            </div>
            <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-2xl p-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-orange-600">
                <Target size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Nommage des Trajets</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Donnez un nom à chaque trajet pour mieux les identifier : "Épicerie Hebdo", "Visite Famille", "Bureau Vendredi".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT 2 : Moteur de calcul (alternating) ─── */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Un moteur de calcul<br/>qui gère chaque subtilité.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Bien plus qu'une estimation. Notre moteur intègre chaque détail de la grille tarifaire Communauto 2026.
              </p>
              <ul className="space-y-4">
                {[
                  "6 grilles tarifaires (avril 2021 à aujourd'hui)",
                  "Tarifs saisonniers (15 juin — 15 octobre)",
                  "Heures de nuit gratuites (Éco+ / Éco Extra)",
                  "Suppléments week-end intégrés",
                  "4 formules : régulier, aller-retour, longue distance, travail"
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
            {/* Visual */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-lg">
              <div className="space-y-4">
                {[
                  { label: "Liberté", fee: "0 $/mois", rate: "12,00 $/h", km: "0,28 $/km", color: "bg-gray-100" },
                  { label: "Liberté+", fee: "5 $/mois", rate: "9,00 $/h", km: "0,24 $/km", color: "bg-gray-100" },
                  { label: "Économique", fee: "12,50 $/mois", rate: "4,80 $/h", km: "0,21 $/km", color: "bg-blue-50 border-blue-200" },
                  { label: "Éco+", fee: "30 $/mois", rate: "3,50 $/h", km: "0,19 $/km", color: "bg-gray-100" },
                  { label: "Éco Extra", fee: "60 $/mois", rate: "2,95 $/h", km: "0,16 $/km", color: "bg-gray-100" },
                ].map((plan, i) => (
                  <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${plan.color} ${i === 2 ? 'border-[#0066DA] ring-1 ring-[#0066DA]' : 'border-[#E3E3E3]'}`}>
                    <div className="font-bold text-sm flex items-center gap-2">
                      {i === 2 && <span className="w-2 h-2 rounded-full bg-[#0066DA]"></span>}
                      {plan.label}
                    </div>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span>{plan.fee}</span>
                      <span>{plan.rate}</span>
                      <span>{plan.km}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-400">Grille tarifaire 2026 — Mise à jour automatique</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT 3 : Comparaison temps réel (reversed) ─── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left this time) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-lg">
                {/* Simulated bar chart */}
                <div className="mb-6">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Coût annuel estimé</div>
                  <div className="space-y-3">
                    {[
                      { name: "Liberté", cost: 2880, max: 2880, best: false },
                      { name: "Liberté+", cost: 2160, max: 2880, best: false },
                      { name: "Économique", cost: 1120, max: 2880, best: true },
                      { name: "Éco+", cost: 1350, max: 2880, best: false },
                      { name: "Éco Extra", cost: 1680, max: 2880, best: false },
                    ].map((bar, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-20 text-xs font-medium text-gray-600 text-right flex-shrink-0">{bar.name}</div>
                        <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${bar.best ? 'bg-[#0066DA]' : 'bg-[#E5E7EB]'}`}
                            style={{ width: `${(bar.cost / bar.max) * 100}%` }}
                          ></div>
                        </div>
                        <div className={`text-xs font-bold w-16 text-right ${bar.best ? 'text-[#0066DA]' : 'text-gray-400'}`}>
                          {bar.cost.toLocaleString('fr-CA')} $
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                  <TrendingUp className="text-green-600" size={16}/>
                  <span className="text-sm font-medium text-green-700">Économie de 1 760 $ / an vs Liberté</span>
                </div>
              </div>
            </div>
            {/* Text (right this time) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Comparez 5 forfaits<br/>en temps réel.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Chaque modification recalcule instantanément les 5 forfaits. Ajoutez un trajet, changez une fréquence : le classement se met à jour en 300ms.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-[#0066DA]" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Graphique Comparatif</div>
                    <div className="text-sm text-gray-500">Visualisez l'écart entre forfaits d'un coup d'œil</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-green-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Économies Chiffrées</div>
                    <div className="text-sm text-gray-500">Montant exact d'économie vs le forfait le plus cher</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="text-purple-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Scénarios "What If"</div>
                    <div className="text-sm text-gray-500">Testez des variations rapidement sans tout recommencer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE SPOTLIGHT 4 : Flex Pass ─── */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 mb-6">
                <Zap className="text-purple-600" size={14}/>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Exclusif</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Flex Pass :<br/>l'analyse que personne<br/>ne fait.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Le Flex Pass réduit le tarif kilométrique des véhicules Flex. Mais est-ce rentable pour <em>vos</em> habitudes ? Notre moteur le calcule trajet par trajet.
              </p>
              <ul className="space-y-3">
                {[
                  "Comparaison Station vs Flex pour chaque trajet",
                  "Calcul automatique de rentabilité du Flex Pass",
                  "Sélection du mode le moins cher par trajet",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-purple-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-purple-600" size={28}/>
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Analyse Flex Pass</div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-[#E3E3E3]">
                  <div>
                    <div className="font-bold text-sm">Épicerie Hebdo</div>
                    <div className="text-xs text-gray-400">2h · 12 km · 4×/mois</div>
                  </div>
                  <div className="bg-blue-50 text-[#0066DA] text-xs font-bold px-2 py-1 rounded">Station</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-[#E3E3E3]">
                  <div>
                    <div className="font-bold text-sm">Courses rapides</div>
                    <div className="text-xs text-gray-400">0.5h · 3 km · 6×/mois</div>
                  </div>
                  <div className="bg-purple-50 text-purple-600 text-xs font-bold px-2 py-1 rounded">Flex</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-[#E3E3E3]">
                  <div>
                    <div className="font-bold text-sm">Visite Famille</div>
                    <div className="text-xs text-gray-400">6h · 80 km · 1×/mois</div>
                  </div>
                  <div className="bg-blue-50 text-[#0066DA] text-xs font-bold px-2 py-1 rounded">Station</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                <div className="text-sm text-green-700 font-medium">Flex Pass rentable</div>
                <div className="text-2xl font-bold text-green-700 mt-1">+ 84 $ / an d'économie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE GRID (6 mini features) ─── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight">
              Tout ce qu'il faut pour décider.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
              Chaque fonctionnalité a été pensée pour vous donner une réponse claire en quelques clics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3E3E3] border border-[#E3E3E3] rounded-2xl overflow-hidden">
            {[
              { icon: <Repeat size={20}/>, color: "text-blue-600", title: "Projections Annuelles", desc: "Chaque trajet récurrent est projeté sur 12 mois pour un budget réaliste." },
              { icon: <Split size={20}/>, color: "text-orange-600", title: "Station vs Flex", desc: "Comparaison automatique des deux modes pour chaque trajet défini." },
              { icon: <LayoutGrid size={20}/>, color: "text-gray-600", title: "5 Forfaits Comparés", desc: "De Liberté à Éco Extra, tous les forfaits sont évalués simultanément." },
              { icon: <Clock size={20}/>, color: "text-yellow-600", title: "Tarifs de Précision", desc: "Saisonnalité, week-end, nuits gratuites : chaque règle tarifaire est appliquée." },
              { icon: <Car size={20}/>, color: "text-green-600", title: "Coût Auto Personnelle", desc: "Comparez avec le coût réel d'une voiture personnelle (assurance, essence, entretien)." },
              { icon: <CalcIcon size={20}/>, color: "text-purple-600", title: "Résultat Instantané", desc: "Le recalcul se fait en 300ms. Idéal pour les scénarios \"What if\"." },
            ].map((feat, i) => (
              <div key={i} className="bg-white p-8 hover:bg-[#FAFAFA] transition-colors">
                <div className={`w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-4 ${feat.color}`}>
                  {feat.icon}
                </div>
                <h3 className="font-bold text-[15px] mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section className="py-24 bg-[#F7F7F5] border-t border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-4">
              Pourquoi ce calculateur<br/>est différent.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Le simulateur officiel de Communauto est limité à un seul trajet. Le nôtre va beaucoup plus loin.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E3E3E3]">
                  <th className="text-left p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide w-1/3"></th>
                  <th className="text-center p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide">Communauto.com</th>
                  <th className="text-center p-4 md:p-5 font-bold text-[#0066DA] uppercase text-xs tracking-wide bg-blue-50">Cgénial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E3E3]">
                {[
                  { feature: "Nombre de trajets", them: "1 seul", us: "Illimité" },
                  { feature: "Récurrence", them: "Non", us: "Oui (hebdo, mensuel…)" },
                  { feature: "Forfaits comparés", them: "1 à la fois", us: "5 simultanément" },
                  { feature: "Mode Flex", them: "Non", us: "Station vs Flex" },
                  { feature: "Flex Pass", them: "Non", us: "Analyse de rentabilité" },
                  { feature: "Tarifs saisonniers", them: "Non", us: "Oui (été / hiver)" },
                  { feature: "Recommandation", them: "Non", us: "Forfait optimal identifié" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAFAFA] transition-colors">
                    <td className="p-4 md:p-5 font-medium">{row.feature}</td>
                    <td className="p-4 md:p-5 text-center text-gray-400">{row.them}</td>
                    <td className="p-4 md:p-5 text-center font-medium bg-blue-50/50">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── SECURITY ─── */}
      <section className="py-20 bg-white border-t border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="text-green-600" size={32}/>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Effectuez vos simulations en toute sécurité.</h3>
              <p className="text-gray-500 leading-relaxed">
                Le calculateur fonctionne entièrement dans votre navigateur. Aucune donnée personnelle n'est collectée ni transmise. Pas de compte requis, pas de cookies de suivi. Vos trajets restent sur votre appareil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-[#F7F7F5] border-t border-[#E3E3E3]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight text-center mb-12">
            Questions / réponses
          </h2>
          <div className="space-y-px bg-[#E3E3E3] rounded-2xl overflow-hidden border border-[#E3E3E3]">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-[#FAFAFA] transition-colors"
                >
                  <span className="font-bold text-[15px] pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 bg-white text-center border-t border-[#E3E3E3]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-4">
            Testez vos scénarios maintenant.
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Gratuit, sans inscription, en 2 minutes.
          </p>
          <Link
            to="/calculator/tool"
            className="inline-flex items-center gap-2 bg-[#0066DA] hover:bg-[#0055b5] text-white px-8 py-4 rounded-[4px] font-bold text-lg transition-colors shadow-lg shadow-blue-100"
          >
            Démarrer le simulateur <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

      {/* ─── BRIDGE TO EXTRACTOR ─── */}
      <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 bg-white border border-[#E3E3E3] rounded-lg flex items-center justify-center mx-auto mb-6 text-[#0066DA]">
            <FileSearch size={24}/>
          </div>
          <h2 className="text-2xl font-bold mb-4">Le simulateur estime. Vos factures prouvent.</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Importez vos factures Communauto et découvrez vos économies exactes basées sur votre historique réel de trajets.
          </p>
          <Link
            to="/extractor"
            className="inline-flex items-center gap-2 text-[#0066DA] font-bold hover:underline"
          >
            Analyser mes vraies factures <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CalculatorNotion;