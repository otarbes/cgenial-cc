import React, { useState } from 'react';
import { ArrowRight, Play, Repeat, Split, LayoutGrid, Zap, Clock, RefreshCw, ShieldCheck, ChevronDown, Check, FileSearch, Car, TrendingUp, Target, List, DollarSign, Trophy, Sun, Moon, Calendar, MapPin, ChevronRight } from 'lucide-react';
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

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          VIDEO
      ═══════════════════════════════════════════ */}
      <section id="demo" className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#E3E3E3] shadow-2xl bg-[#F7F7F5] aspect-video group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#050505] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="text-white ml-1" size={32} fill="white"/>
                </div>
                <p className="text-gray-500 font-medium">Découvrez le calculateur en 90 secondes</p>
              </div>
            </div>
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

      {/* ═══════════════════════════════════════════
          6 FEATURES GRID (overview)
      ═══════════════════════════════════════════ */}
      <section className="py-20 border-t border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight">
              Tout ce qu'il faut pour décider.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
              Six fonctionnalités clés pour une réponse claire en quelques clics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3E3E3] border border-[#E3E3E3] rounded-2xl overflow-hidden">
            {[
              { icon: <Target size={20}/>, color: "text-blue-600", title: "Multi-Trajets", desc: "Ajoutez autant de trajets que nécessaire, chacun nommé avec sa date, heure de départ, durée et distance." },
              { icon: <Repeat size={20}/>, color: "text-orange-600", title: "Récurrence Complète", desc: "Quotidien, hebdomadaire ou mensuel. Choix des jours, intervalle personnalisable, fin par date ou par nombre d'occurrences." },
              { icon: <Split size={20}/>, color: "text-purple-600", title: "Flex vs Station", desc: "Choisissez le mode par trajet ou laissez le calculateur appliquer le moins cher. Changez en 1 clic." },
              { icon: <List size={20}/>, color: "text-green-600", title: "Ventilation Complète du Prix", desc: "Chaque composante visible : temps, distance, maximum journalier, haute saison, nuit gratuite. Zéro boîte noire." },
              { icon: <LayoutGrid size={20}/>, color: "text-[#0066DA]", title: "Prix des 5 Forfaits", desc: "Chaque trajet évalué sur les 5 forfaits. Le total annuel intègre les abonnements mensuels, pas seulement les trajets." },
              { icon: <RefreshCw size={20}/>, color: "text-yellow-600", title: "Le Vrai Moteur Communauto", desc: "Nous avons reconstruit l'intégralité des règles de calcul Communauto. Résultat : un prix identique à votre facture." },
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

      {/* ═══════════════════════════════════════════
          QUOTE / SOCIAL PROOF
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 1 — Multi-Trajets
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Simulez tous vos trajets,<br/>en une seule vue.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Un aller-retour au bureau, l'épicerie du samedi, la visite chez les beaux-parents. Le calculateur gère vos multiples usages simultanément et nomme chaque trajet pour que vous vous y retrouviez.
              </p>
              <ul className="space-y-3">
                {[
                  "Nombre de trajets illimité",
                  "Nom personnalisé pour chaque trajet",
                  "Date, heure de départ, durée (ou heure de fin), distance",
                  "Modifier ou supprimer un trajet à tout moment",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-blue-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Trip list mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Vos Trajets Types</div>
              <div className="space-y-3">
                {[
                  { name: "Épicerie Hebdo", date: "Sam. 10h", km: 12, h: 2, mode: "Station" },
                  { name: "Bureau Vendredi", date: "Ven. 8h30", km: 18, h: 9, mode: "Le - cher" },
                  { name: "Visite Famille", date: "Dim. 11h", km: 80, h: 6, mode: "Station" },
                ].map((trip, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl border border-[#E3E3E3] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm">{trip.name}</div>
                      <div className="text-xs text-gray-400 flex flex-wrap gap-2 mt-1">
                        <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100">{trip.date}</span>
                        <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100">{trip.h} h</span>
                        <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100">{trip.km} km</span>
                        <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100">{trip.mode}</span>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-300" size={16}/>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-2 border-dashed border-[#E3E3E3] rounded-xl p-3 text-center text-sm text-gray-400 font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                + Ajouter un trajet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 2 — Récurrence Complète
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-5">Configuration de récurrence</div>
                {/* Mockup: recurrence config panel */}
                <div className="space-y-5">
                  {/* Type de récurrence */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Type</div>
                    <div className="flex gap-2">
                      {["Quotidien", "Hebdomadaire", "Mensuel"].map((type, i) => (
                        <div key={i} className={`flex-1 text-center py-2 rounded-lg text-xs font-bold border ${i === 1 ? 'bg-orange-50 border-orange-400 text-orange-700' : 'bg-white border-[#E3E3E3] text-gray-400'}`}>
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Jours de la semaine */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Jours de la semaine</div>
                    <div className="flex gap-1.5">
                      {["L", "M", "Me", "J", "V", "S", "D"].map((day, i) => (
                        <div key={i} className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold border ${[4, 5].includes(i) ? 'bg-orange-50 border-orange-400 text-orange-700' : 'bg-white border-[#E3E3E3] text-gray-300'}`}>
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Intervalle */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Intervalle</div>
                    <div className="bg-gray-50 border border-[#E3E3E3] rounded-lg p-3 flex items-center justify-between">
                      <span className="text-sm font-medium">Toutes les</span>
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-8 bg-white border border-[#E3E3E3] rounded text-center font-bold text-sm leading-8">1</div>
                        <span className="text-sm text-gray-500">semaine(s)</span>
                      </div>
                    </div>
                  </div>
                  {/* Fin */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Se termine</div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-orange-50 border border-orange-400 rounded-lg p-3 text-center">
                        <div className="text-xs font-bold text-orange-700">Par date</div>
                        <div className="text-xs text-orange-600 mt-1">31 déc. 2026</div>
                      </div>
                      <div className="flex-1 bg-white border border-[#E3E3E3] rounded-lg p-3 text-center">
                        <div className="text-xs font-bold text-gray-400">Par occurrences</div>
                        <div className="text-xs text-gray-300 mt-1">52 trajets</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Résumé */}
                <div className="mt-5 p-3 bg-orange-50 rounded-lg border border-orange-200 text-center">
                  <span className="text-xs text-orange-600">Ven. + Sam. chaque semaine → </span>
                  <span className="font-bold text-sm text-orange-700">104 occurrences générées</span>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Un vrai système<br/>de récurrence.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Pas un simple "X fois par mois". Le calculateur offre un système de récurrence complet : choisissez le rythme, les jours précis, l'intervalle et la durée. Les occurrences sont générées automatiquement pour alimenter le calcul.
              </p>
              <ul className="space-y-3">
                {[
                  "Quotidien, hebdomadaire ou mensuel",
                  "Sélection des jours de la semaine",
                  "Intervalle personnalisable (ex: toutes les 2 semaines)",
                  "Fin par date ou par nombre d'occurrences",
                  "Occurrences générées automatiquement pour le calcul",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-orange-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 3 — Flex vs Station
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 mb-6">
                <Zap className="text-purple-600" size={14}/>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Par trajet</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Flex ou Station :<br/>vous décidez,<br/>trajet par trajet.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Parfois vous devez laisser la voiture ailleurs — il vous faut un Flex. D'autres fois, la Station est moins chère. Par défaut, le calculateur applique le mode le plus économique, mais vous pouvez forcer le mode de chaque trajet en un clic.
              </p>
              <ul className="space-y-3">
                {[
                  "Mode automatique : le moins cher est sélectionné",
                  "Override en 1 clic si vous savez quel mode utiliser",
                  "Analyse Flex Pass : l'abonnement est-il rentable pour vous ?",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-purple-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Mode toggle mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Mode par trajet</div>
              <div className="space-y-4">
                {[
                  { name: "Épicerie Hebdo", mode: "auto", best: "Station", stationCost: "28 $", flexCost: "34 $" },
                  { name: "Courses rapides", mode: "flex", best: "Flex", stationCost: "—", flexCost: "12 $" },
                  { name: "Visite Famille", mode: "auto", best: "Station", stationCost: "52 $", flexCost: "71 $" },
                ].map((trip, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl border border-[#E3E3E3] p-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-sm">{trip.name}</span>
                      {trip.mode === "flex" ? (
                        <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded">Forcé : Flex</span>
                      ) : (
                        <span className="text-xs bg-gray-200 text-gray-600 font-bold px-2 py-0.5 rounded">Auto</span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <div className={`flex-1 text-center p-2 rounded-lg text-xs font-medium border ${trip.best === "Station" && trip.mode === "auto" ? 'bg-blue-50 border-[#0066DA] text-[#0066DA]' : 'bg-white border-[#E3E3E3] text-gray-400'}`}>
                        Station · {trip.stationCost}
                      </div>
                      <div className={`flex-1 text-center p-2 rounded-lg text-xs font-medium border ${trip.mode === "flex" || (trip.best === "Flex" && trip.mode === "auto") ? 'bg-purple-50 border-purple-400 text-purple-600' : 'bg-white border-[#E3E3E3] text-gray-400'}`}>
                        Flex · {trip.flexCost}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="text-sm text-green-700 font-medium">Flex Pass rentable pour ce profil</div>
                <div className="text-lg font-bold text-green-700">+ 84 $ / an d'économie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 4 — Ventilation Complète du Prix
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Détail — Épicerie Hebdo</div>
                  <span className="text-xs bg-blue-50 text-[#0066DA] font-bold px-2 py-0.5 rounded">Éco+</span>
                </div>
                <div className="space-y-0 divide-y divide-[#E3E3E3]">
                  {[
                    { label: "Coût horaire", detail: "2h × 3,50 $/h", value: "7,00 $" },
                    { label: "Coût kilométrique", detail: "12 km × 0,19 $/km", value: "2,28 $" },
                    { label: "Maximum journalier", detail: "Plafond non atteint", value: "—", muted: true },
                    { label: "Supplément week-end", detail: "Samedi — applicable", value: "2,50 $" },
                    { label: "Haute saison (été)", detail: "15 juin — 15 oct.", value: "+ 0,92 $" },
                    { label: "Heures de nuit gratuites", detail: "Éco+ : 0h-6h inclus", value: "- 0,00 $", muted: true },
                  ].map((line, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${line.muted ? 'opacity-50' : ''}`}>
                      <div>
                        <div className="text-sm font-medium">{line.label}</div>
                        <div className="text-xs text-gray-400">{line.detail}</div>
                      </div>
                      <div className="text-sm font-mono font-medium text-right">{line.value}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t-2 border-[#050505] flex justify-between items-center">
                  <span className="font-bold">Total par trajet</span>
                  <span className="font-bold font-mono text-lg">12,70 $</span>
                </div>
                <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                  <span>× 4 fois / mois × 12 mois</span>
                  <span className="font-mono font-medium">609,60 $ /an</span>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Chaque dollar<br/>expliqué.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Le calculateur officiel de Communauto donne un prix final sans explication. Le nôtre décompose chaque composante : vous voyez exactement d'où vient chaque dollar de votre facture.
              </p>
              <ul className="space-y-3">
                {[
                  "Coût horaire × durée du trajet",
                  "Coût kilométrique × distance parcourue",
                  "Maximum journalier (plafond par réservation)",
                  "Supplément week-end si applicable",
                  "Majoration haute saison (15 juin — 15 octobre)",
                  "Crédit heures de nuit (Éco+ / Éco Extra)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-green-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 5 — Prix des 5 Forfaits
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                5 forfaits comparés.<br/>Abonnement inclus.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Chaque trajet est évalué sur les 5 forfaits Communauto en parallèle. Le coût total annuel intègre les frais d'abonnement mensuel — pas seulement le coût des trajets — pour que la comparaison soit honnête.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LayoutGrid className="text-[#0066DA]" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Classement Automatique</div>
                    <div className="text-sm text-gray-500">Les forfaits sont triés du moins cher au plus cher</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-green-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Abonnement + Trajets</div>
                    <div className="text-sm text-gray-500">Le total annuel inclut les 12 mensualités d'abonnement</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-purple-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Économies Chiffrées</div>
                    <div className="text-sm text-gray-500">Montant exact d'économie vs le forfait le plus cher</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Visual — Résultats mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="bg-[#EBF5FF] rounded-xl p-5 border border-blue-100 mb-6">
                <div className="text-xs font-bold text-[#0066DA] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Trophy size={14}/> Recommandation
                </div>
                <div className="text-xl font-bold text-[#0066DA] mb-1">Économique</div>
                <div className="text-sm text-gray-600">Le forfait optimal pour votre profil.</div>
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Coût annuel (trajets + abonnement)</div>
              <div className="space-y-2">
                {[
                  { name: "Économique", cost: "1 270 $", sub: "dont 150 $ d'abonnement", best: true },
                  { name: "Éco+", cost: "1 510 $", sub: "dont 360 $ d'abonnement", best: false },
                  { name: "Éco Extra", cost: "1 840 $", sub: "dont 720 $ d'abonnement", best: false },
                  { name: "Liberté+", cost: "2 220 $", sub: "dont 60 $ d'abonnement", best: false },
                  { name: "Liberté", cost: "2 880 $", sub: "pas d'abonnement", best: false },
                ].map((plan, i) => (
                  <div key={i} className={`p-3 rounded-lg border ${plan.best ? 'bg-blue-50 border-[#0066DA]' : 'bg-gray-50 border-[#E3E3E3]'}`}>
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${plan.best ? 'text-[#0066DA] font-bold' : 'text-gray-600'}`}>{plan.name}</span>
                      <span className={`font-mono text-sm ${plan.best ? 'text-[#0066DA] font-bold' : 'text-gray-500'}`}>{plan.cost} /an</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-0.5">{plan.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                <TrendingUp className="text-green-600" size={16}/>
                <span className="text-sm font-medium text-green-700">Économie de 1 610 $ / an vs Liberté</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 6 — Le Vrai Moteur Communauto
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          COMPARAISON LÉO & AUTO PERSO (centré + 2 cartes)
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
              Comparez au-delà<br/>de Communauto.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Le calculateur ne s'arrête pas aux forfaits. Il confronte aussi votre coût optimal à deux alternatives concrètes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {/* Carte Léo */}
            <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-2xl p-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-orange-600">
                <Car size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Comparaison Léo</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Léo est le concurrent direct de Communauto. Le calculateur estime votre coût annuel chez Léo et affiche l'écart avec votre forfait optimal.
              </p>
              <div className="bg-white rounded-lg border border-[#E3E3E3] p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Coût estimé Léo</span>
                  <span className="font-mono font-bold">2 430 $ /an</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-gray-500">Votre forfait optimal</span>
                  <span className="font-mono font-bold text-[#0066DA]">1 270 $ /an</span>
                </div>
                <div className="h-px bg-[#E3E3E3] my-3"></div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-green-700">Économie</span>
                  <span className="font-mono font-bold text-green-600">+ 1 160 $ /an</span>
                </div>
              </div>
            </div>
            {/* Carte Auto Personnelle */}
            <div className="bg-[#F7F7F5] border border-[#E3E3E3] rounded-2xl p-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm text-green-600">
                <DollarSign size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Comparaison Auto Personnelle</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Posséder une voiture coûte cher : assurance, essence, entretien, stationnement. Le calculateur estime ce coût et le compare à Communauto.
              </p>
              <div className="bg-white rounded-lg border border-[#E3E3E3] p-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Coût estimé auto perso</span>
                  <span className="font-mono font-bold">7 200 $ /an</span>
                </div>
                <div className="flex justify-between items-center text-sm mt-2">
                  <span className="text-gray-500">Votre forfait optimal</span>
                  <span className="font-mono font-bold text-[#0066DA]">1 270 $ /an</span>
                </div>
                <div className="h-px bg-[#E3E3E3] my-3"></div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-green-700">Économie</span>
                  <span className="font-mono font-bold text-green-600">+ 5 930 $ /an</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════ */}
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
                  { feature: "Mode Flex / Station", them: "Non", us: "Choix par trajet + auto" },
                  { feature: "Détail du prix", them: "Prix final uniquement", us: "Ventilation complète" },
                  { feature: "Abonnement dans le total", them: "Non", us: "Oui, inclus" },
                  { feature: "Tarifs saisonniers", them: "Non", us: "Oui (été / hiver)" },
                  { feature: "Flex Pass", them: "Non", us: "Analyse de rentabilité" },
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

      {/* ═══════════════════════════════════════════
          SECURITY
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════ */}
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

      {/* ═══════════════════════════════════════════
          BRIDGE TO EXTRACTOR
      ═══════════════════════════════════════════ */}
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