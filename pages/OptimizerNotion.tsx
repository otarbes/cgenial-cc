import React, { useState } from 'react';
import { ArrowRight, Play, History, Zap, Shield, SlidersHorizontal, FileText, RefreshCw, ShieldCheck, ChevronDown, Check, TrendingUp, DollarSign, Users, Clock, BarChart3, Star, Lock, ChevronRight, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    q: "Quelle est la différence entre le Calculateur gratuit et l'Optimiseur\u00a0?",
    a: "Le Calculateur simule des trajets hypothétiques que vous décrivez manuellement. L'Optimiseur, lui, rejoue vos trajets réels — extraits de vos factures Communauto — sous les 5 forfaits. Le résultat est basé sur votre historique, pas sur des estimations."
  },
  {
    q: "Faut-il avoir importé ses factures avant\u00a0?",
    a: "Oui. L'Optimiseur analyse les données extraites par l'Extracteur. Importez au moins 3 mois de factures pour un résultat fiable — idéalement 12 mois pour capturer la saisonnalité."
  },
  {
    q: "Comment fonctionne le replay historique\u00a0?",
    a: "Chaque trajet de votre historique est recalculé sous les 5 forfaits Communauto avec les tarifs 2026. Le coût total (trajets + abonnement mensuel) est comparé forfait par forfait. Le forfait le moins cher est identifié automatiquement."
  },
  {
    q: "L'analyse Flex Pass est-elle incluse\u00a0?",
    a: "Oui. L'Optimiseur détermine si le Laissez-passer Flex (75 $/mois) est rentable pour votre volume d'utilisation réel. Il compare les options Illimité et 20 trajets, et chiffre l'économie ou le surcoût."
  },
  {
    q: "Que couvre la garantie satisfait ou remboursé\u00a0?",
    a: "Si l'Optimiseur ne vous apporte pas de valeur dans les 30 jours suivant l'achat, vous êtes remboursé intégralement, sans condition. Contactez-nous et le remboursement est traité sous 48h."
  },
  {
    q: "Puis-je relancer l'analyse après un nouvel import\u00a0?",
    a: "Oui. Votre accès de 12 mois inclut des recalculs illimités. Si vous importez de nouvelles factures via l'Extracteur, l'Optimiseur recalcule automatiquement avec l'historique mis à jour."
  }
];

const OptimizerNotion: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#050505] text-white rounded-full px-3 py-1 mb-8">
          <Star size={12} fill="currentColor" className="text-yellow-400"/>
          <span className="text-xs font-bold uppercase tracking-wide">14,99 $ &middot; Paiement unique</span>
        </div>
        <h1 className="text-4xl md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
          Vos économies Communauto,<br/>
          <span className="text-[#0066DA]">chiffrées au dollar près.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          L'Optimiseur rejoue votre historique réel de trajets sous les 5 forfaits et révèle combien vous pourriez économiser. Résultat : un rapport clair et actionnable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/optimizer/tool"
            className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
          >
            Lancer l'audit <ArrowRight size={20}/>
          </Link>
          <a
            href="#demo"
            className="text-[#37352f] px-8 py-4 rounded-[4px] font-medium text-lg hover:bg-[#F7F7F5] transition-colors flex items-center justify-center gap-2 border border-[#E3E3E3]"
          >
            Voir la démo
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-400">Satisfait ou remboursé 30 jours. 12 mois d'accès.</p>
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
                <p className="text-gray-500 font-medium">Découvrez l'Optimiseur en 90 secondes</p>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-[#E3E3E3] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              <div className="flex-1 mx-4">
                <div className="bg-[#F7F7F5] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-400">cgenial.app/optimizer</span>
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
              Un audit complet de votre abonnement.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
              Six analyses pour une réponse claire : gardez votre forfait, ou changez.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3E3E3] border border-[#E3E3E3] rounded-2xl overflow-hidden">
            {[
              { icon: <History size={20}/>, color: "text-blue-600", title: "Replay Historique", desc: "Chaque trajet réel recalculé sous les 5 forfaits avec les tarifs 2026. Le forfait optimal est identifié automatiquement." },
              { icon: <Zap size={20}/>, color: "text-purple-600", title: "Analyse Flex Pass", desc: "Le Laissez-passer Flex (75 $/mois) est-il rentable pour vous ? Comparaison Illimité vs 20 trajets, chiffrée." },
              { icon: <Shield size={20}/>, color: "text-green-600", title: "Assurance EDC", desc: "L'Exclusion du Déductible de Collision (8-15 $/mois) vaut-elle le coût ? Analyse par conducteur incluse." },
              { icon: <SlidersHorizontal size={20}/>, color: "text-orange-600", title: "Paramètres Flexibles", desc: "Ajustez la période d'analyse, le nombre de co-abonnés et le forfait de référence selon votre situation." },
              { icon: <FileText size={20}/>, color: "text-[#0066DA]", title: "Rapport Détaillé", desc: "Forfait optimal, économies en $ et en %, ventilation par trajet. Un rapport clair et actionnable." },
              { icon: <RefreshCw size={20}/>, color: "text-yellow-600", title: "Recalcul Illimité", desc: "Importez de nouvelles factures ? L'analyse se met à jour automatiquement pendant 12 mois." },
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
            J'ai rentabilisé les 15 $ de l'audit en 30 secondes. J'étais sur le mauvais forfait depuis 2 ans.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0066DA] flex items-center justify-center text-white font-bold text-sm">T</div>
            <div className="text-left">
              <div className="font-bold text-sm">Thomas R.</div>
              <div className="text-xs text-gray-400">Membre Communauto depuis 2022</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 1 — Replay Historique
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Vos vrais trajets,<br/>5 forfaits comparés.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                L'Optimiseur recalcule chaque trajet de votre historique sous les 5 forfaits Communauto avec les tarifs 2026. Le coût total inclut les abonnements mensuels pour une comparaison honnête.
              </p>
              <ul className="space-y-3">
                {[
                  "Chaque trajet recalculé sous Liberté, Liberté+, Éco, Éco+, Éco Extra",
                  "Abonnements mensuels inclus dans le total",
                  "Forfait optimal identifié avec économies en $ et en %",
                  "Filtrage par période : 3 mois, 6 mois, 1 an ou personnalisé",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-blue-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Replay results mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Résultat du replay — 12 mois</div>
              <div className="bg-[#EBF5FF] rounded-xl p-5 border border-blue-100 mb-5">
                <div className="text-xs font-bold text-[#0066DA] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Star size={14}/> Forfait optimal identifié
                </div>
                <div className="text-xl font-bold text-[#0066DA] mb-1">Économique+</div>
                <div className="text-sm text-gray-600">Basé sur vos 64 trajets réels.</div>
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-3">Coût annuel (trajets + abonnement)</div>
              <div className="space-y-2">
                {[
                  { name: "Économique+", cost: "1 180 $", sub: "dont 360 $ d'abonnement", best: true },
                  { name: "Économique", cost: "1 340 $", sub: "dont 150 $ d'abonnement", best: false },
                  { name: "Éco Extra", cost: "1 520 $", sub: "dont 720 $ d'abonnement", best: false },
                  { name: "Liberté+", cost: "2 010 $", sub: "dont 60 $ d'abonnement", best: false },
                  { name: "Liberté", cost: "2 680 $", sub: "pas d'abonnement", best: false },
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
                <span className="text-sm font-medium text-green-700">Économie de 1 500 $ / an vs Liberté</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 2 — Analyse Flex Pass
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-5">Analyse Flex Pass</div>
                <div className="space-y-4">
                  {/* Current usage */}
                  <div className="bg-gray-50 rounded-xl border border-[#E3E3E3] p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-3">Votre utilisation Flex</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">18</div>
                        <div className="text-xs text-gray-400">trajets Flex / mois</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">72 %</div>
                        <div className="text-xs text-gray-400">de vos trajets</div>
                      </div>
                    </div>
                  </div>
                  {/* Comparison */}
                  <div className="space-y-2">
                    <div className="p-3 rounded-lg border bg-gray-50 border-[#E3E3E3]">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-600 text-sm">Sans Flex Pass</span>
                        <span className="font-mono text-sm text-gray-500">142 $ / mois</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">Paiement à l'usage</div>
                    </div>
                    <div className="p-3 rounded-lg border bg-purple-50 border-purple-300">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-purple-700 font-bold text-sm">Flex Pass Illimité</span>
                        <span className="font-mono text-sm text-purple-700 font-bold">75 $ / mois</span>
                      </div>
                      <div className="text-xs text-purple-600 mt-0.5">Trajets Flex illimités inclus</div>
                    </div>
                    <div className="p-3 rounded-lg border bg-gray-50 border-[#E3E3E3]">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-600 text-sm">Flex Pass 20 trajets</span>
                        <span className="font-mono text-sm text-gray-500">45 $ / mois</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">Insuffisant pour votre volume</div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 p-3 bg-green-50 border border-green-200 rounded-lg text-center">
                  <div className="text-sm text-green-700 font-medium">Flex Pass Illimité recommandé</div>
                  <div className="text-lg font-bold text-green-700">+ 804 $ / an d'économie</div>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 mb-6">
                <Zap className="text-purple-600" size={14}/>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Analyse exclusive</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Le Flex Pass<br/>est-il rentable<br/>pour vous ?
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                À 75 $/mois, le Laissez-passer Flex est un investissement. L'Optimiseur calcule votre volume réel de trajets Flex et détermine si le pass est rentable — et lequel choisir entre Illimité et 20 trajets.
              </p>
              <ul className="space-y-3">
                {[
                  "Volume réel de trajets Flex calculé sur votre historique",
                  "Comparaison Illimité (75 $) vs 20 trajets (45 $)",
                  "Économie ou surcoût chiffré en $ par mois et par an",
                  "Recommandation claire : oui, non, ou pas encore",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-purple-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 3 — Assurance EDC
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-6">
                <Shield className="text-green-600" size={14}/>
                <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Par conducteur</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                L'assurance collision :<br/>utile ou superflue ?
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                L'EDC (Exclusion du Déductible de Collision) coûte entre 8 et 15 $ par mois. L'Optimiseur analyse votre fréquence d'utilisation et le type de vos trajets pour déterminer si cette option vaut le coût — conducteur par conducteur.
              </p>
              <ul className="space-y-3">
                {[
                  "Analyse par conducteur (co-abonnés inclus)",
                  "Basée sur votre fréquence et types de trajets réels",
                  "Coût annuel vs risque estimé",
                  "Recommandation personnalisée par usager",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-green-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — EDC analysis mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Analyse assurance EDC</div>
              <div className="space-y-3">
                {[
                  { name: "Usager principal", id: "#1234567", trips: 48, freq: "4 / mois", recommend: true, cost: "12 $/mois" },
                  { name: "Co-abonné 1", id: "#1234568", trips: 8, freq: "0,7 / mois", recommend: false, cost: "8 $/mois" },
                ].map((user, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${user.recommend ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-[#E3E3E3]'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${user.recommend ? 'bg-green-600 text-white' : 'bg-gray-300 text-white'}`}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{user.name}</div>
                          <div className="text-xs text-gray-400 font-mono">{user.id}</div>
                        </div>
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${user.recommend ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                        {user.recommend ? 'Recommandé' : 'Non recommandé'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div>
                        <div className="text-xs text-gray-400">Trajets</div>
                        <div className="font-medium">{user.trips}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Fréquence</div>
                        <div className="font-medium">{user.freq}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400">Coût EDC</div>
                        <div className="font-mono font-medium">{user.cost}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm text-blue-700">
                  <span className="font-medium">Conclusion :</span> L'EDC est rentable pour l'usager principal (fréquence élevée) mais pas pour le co-abonné (usage trop faible).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 4 — Rapport Final
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="flex justify-between items-center mb-5">
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Rapport final</div>
                  <span className="text-xs bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded uppercase">Vérifié</span>
                </div>
                <div className="space-y-0 divide-y divide-[#E3E3E3]">
                  {[
                    { label: "Votre forfait actuel", detail: "Liberté+ — basé sur 64 trajets", value: "2 010 $", muted: false, strike: true },
                    { label: "Forfait optimal identifié", detail: "Économique+ — même historique", value: "1 180 $", muted: false, highlight: true },
                    { label: "Ajustement Flex Pass", detail: "Illimité recommandé", value: "- 804 $", muted: false },
                    { label: "Ajustement assurance EDC", detail: "EDC retiré pour co-abonné", value: "- 96 $", muted: false },
                  ].map((line, i) => (
                    <div key={i} className={`flex justify-between items-center py-3 ${line.muted ? 'opacity-50' : ''}`}>
                      <div>
                        <div className="text-sm font-medium">{line.label}</div>
                        <div className="text-xs text-gray-400">{line.detail}</div>
                      </div>
                      <div className={`text-sm font-mono font-medium text-right ${line.strike ? 'line-through text-red-400' : ''} ${line.highlight ? 'text-[#0066DA] font-bold' : ''}`}>
                        {line.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t-2 border-[#050505] text-center">
                  <div className="text-sm text-gray-500 mb-1">Économie annuelle identifiée</div>
                  <div className="text-4xl font-bold text-[#0066DA] tracking-tight">930 $</div>
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                    <TrendingUp className="text-green-600" size={14}/>
                    <span className="text-xs font-bold text-green-700">ROI : 62x le prix de l'audit</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Un rapport clair.<br/>Des actions concrètes.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Le rapport de l'Optimiseur ne se contente pas de dire "changez de forfait". Il chiffre précisément chaque source d'économie : forfait, Flex Pass, assurance. Vous savez exactement quoi faire et combien ça rapporte.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-[#0066DA]" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Économies ventilées</div>
                    <div className="text-sm text-gray-500">Chaque source d'économie isolée et chiffrée</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="text-green-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">ROI immédiat</div>
                    <div className="text-sm text-gray-500">Économie moyenne constatée : ~180 $ / an</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="text-orange-600" size={16}/>
                  </div>
                  <div>
                    <div className="font-bold text-sm">Mise à jour continue</div>
                    <div className="text-sm text-gray-500">Recalcul automatique quand vous importez de nouvelles factures</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRICING — Ce qui est inclus
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-4">
              Tout ça pour 14,99 $.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Un paiement unique. Pas d'abonnement. Pas de mauvaise surprise.
            </p>
          </div>
          <div className="bg-white rounded-2xl border-2 border-[#0066DA] p-8 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-[#050505]">14,99 $</span>
                  <span className="text-lg text-gray-400">/ paiement unique</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "12 mois d'accès aux analyses",
                    "Replay sous les 5 forfaits",
                    "Analyse Flex Pass complète",
                    "Audit assurance EDC",
                    "Recalcul illimité sur la période",
                    "Satisfait ou remboursé 30 jours",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-[#0066DA] flex-shrink-0" size={16}/>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Link
                  to="/optimizer/tool"
                  className="bg-[#0066DA] hover:bg-[#0055b5] text-white px-8 py-4 rounded-[4px] font-bold text-lg transition-colors shadow-lg shadow-blue-100 flex items-center gap-2"
                >
                  Lancer l'audit <ArrowRight size={20}/>
                </Link>
                <span className="text-xs text-gray-400">Requiert des factures importées</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMPARISON TABLE — Calculateur vs Optimiseur
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-4">
              Simuler vs Optimiser.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Le Calculateur estime. L'Optimiseur prouve.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E3E3E3]">
                  <th className="text-left p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide w-1/3"></th>
                  <th className="text-center p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide">Calculateur (gratuit)</th>
                  <th className="text-center p-4 md:p-5 font-bold text-[#0066DA] uppercase text-xs tracking-wide bg-blue-50">Optimiseur (14,99 $)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E3E3]">
                {[
                  { feature: "Source des données", them: "Trajets hypothétiques", us: "Factures réelles importées" },
                  { feature: "Forfaits comparés", them: "5 forfaits", us: "5 forfaits" },
                  { feature: "Analyse Flex Pass", them: "Non", us: "Oui (Illimité + 20 trajets)" },
                  { feature: "Audit assurance EDC", them: "Non", us: "Oui, par conducteur" },
                  { feature: "Co-abonnés", them: "Non", us: "Oui, séparés par usager" },
                  { feature: "Filtrage par période", them: "Non", us: "Oui (3, 6, 12 mois…)" },
                  { feature: "Rapport détaillé", them: "Résultat instantané", us: "Rapport complet avec actions" },
                  { feature: "Recalcul", them: "Illimité", us: "Illimité (12 mois)" },
                  { feature: "Précision", them: "Estimations", us: "Données vérifiées" },
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
              <h3 className="text-xl font-bold mb-2">Vos données restent privées.</h3>
              <p className="text-gray-500 leading-relaxed">
                L'Optimiseur analyse vos données extraites sans jamais les partager. Paiement sécurisé, données chiffrées, suppression à tout moment. Aucune donnée bancaire n'est stockée sur nos serveurs.
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
            Prêt à découvrir vos économies ?
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            14,99 $. Paiement unique. Satisfait ou remboursé.
          </p>
          <Link
            to="/optimizer/tool"
            className="inline-flex items-center gap-2 bg-[#0066DA] hover:bg-[#0055b5] text-white px-8 py-4 rounded-[4px] font-bold text-lg transition-colors shadow-lg shadow-blue-100"
          >
            Lancer l'audit maintenant <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BRIDGE TO EXTRACTOR
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 bg-white border border-[#E3E3E3] rounded-lg flex items-center justify-center mx-auto mb-6 text-[#0066DA]">
            <FileText size={24}/>
          </div>
          <h2 className="text-2xl font-bold mb-4">Pas encore importé vos factures ?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            L'Optimiseur a besoin de vos données de facturation. Importez vos PDF Communauto gratuitement avec l'Extracteur — c'est la première étape.
          </p>
          <Link
            to="/extractor"
            className="inline-flex items-center gap-2 text-[#0066DA] font-bold hover:underline"
          >
            Importer mes factures gratuitement <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OptimizerNotion;
