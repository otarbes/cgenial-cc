import React, { useState } from 'react';
import { ArrowRight, Play, Upload, FileText, Database, Languages, Users, ShieldCheck, ChevronDown, Check, BarChart3, Wallet, Eye, Sparkles, Clock, FileSearch, Download, Layers, AlertTriangle, RefreshCw, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    q: "Quels formats de factures sont acceptés\u00a0?",
    a: "L'extracteur accepte tous les PDF de factures Communauto, anciens et nouveaux formats. Les factures en français et en anglais sont détectées automatiquement. Vous pouvez importer de 1 à 24 fichiers à la fois, soit environ 2 ans d'historique."
  },
  {
    q: "Mes factures sont-elles stockées de façon sécurisée\u00a0?",
    a: "Oui. Vos PDF sont conservés sur nos serveurs sécurisés et chiffrés au repos. Vous retrouvez le PDF original associé à chaque trajet directement depuis votre compte — toutes vos infos sont centralisées. Vous pouvez supprimer vos données à tout moment."
  },
  {
    q: "Que faire si une facture échoue lors de l'import\u00a0?",
    a: "Les erreurs réseau ou système sont détectées automatiquement. Un bouton de réessai apparaît pour chaque fichier en erreur. Si le problème persiste, contactez-nous avec le fichier concerné."
  },
  {
    q: "Les co-abonnés sont-ils pris en charge\u00a0?",
    a: "Absolument. L'extracteur détecte automatiquement les différents numéros d'usager présents sur la même facture et les associe au compte principal. Les trajets de chaque co-abonné sont identifiés séparément."
  },
  {
    q: "Quelles données sont extraites exactement\u00a0?",
    a: "Pour chaque facture : les informations du compte (numéro d'abonné, forfait, période), le solde détaillé (paiements, intérêts, TPS/TVQ), le tableau complet des trajets (véhicule, dates, durée, distance, prix du temps, prix du km, frais) et les transactions annexes (crédits, assurance, frais admin)."
  },
  {
    q: "L'extracteur est-il vraiment gratuit\u00a0?",
    a: "Oui, l'extraction est entièrement gratuite. Seul un compte est requis pour sauvegarder vos données. L'Optimiseur, qui analyse votre forfait optimal à partir de vos données extraites, est un service payant séparé (14,99 $)."
  }
];

const ExtractorNotion: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">

      {/* ═══════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════ */}
      <section className="pt-24 pb-16 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#F7F7F5] border border-[#E3E3E3] rounded-full px-3 py-1 mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Gratuit &middot; Compte requis</span>
        </div>
        <h1 className="text-4xl md:text-[56px] font-bold tracking-tight mb-6 leading-[1.1]">
          Vos factures Communauto,<br/>
          <span className="text-[#0066DA]">enfin lisibles.</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          Transformez des PDF illisibles en données structurées. Dashboard, export CSV, ventilation ligne par ligne. Plus besoin de deviner ce que vous payez.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/extractor"
            className="bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-all hover:scale-[1.02] shadow-xl flex items-center justify-center gap-2"
          >
            Importer mes factures <ArrowRight size={20}/>
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
                <p className="text-gray-500 font-medium">Découvrez l'extracteur en 60 secondes</p>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 h-10 bg-white border-b border-[#E3E3E3] flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
              <div className="flex-1 mx-4">
                <div className="bg-[#F7F7F5] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
                  <span className="text-xs text-gray-400">cgenial.app/extractor</span>
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
              De PDF illisible à données claires.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
              Six capacités clés pour reprendre le contrôle de vos factures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3E3E3] border border-[#E3E3E3] rounded-2xl overflow-hidden">
            {[
              { icon: <Upload size={20}/>, color: "text-blue-600", title: "Import Multi-Fichiers", desc: "Glissez jusqu'à 24 PDF d'un coup. Environ 2 ans de factures traitées en quelques secondes." },
              { icon: <Database size={20}/>, color: "text-green-600", title: "Structuration Auto", desc: "Trajets, dates, distances, tarifs : chaque donnée est isolée et placée dans un tableau propre." },
              { icon: <Languages size={20}/>, color: "text-orange-600", title: "Bilingue FR / EN", desc: "Détection automatique de la langue. Fonctionne indifféremment avec les factures en français ou en anglais." },
              { icon: <Users size={20}/>, color: "text-purple-600", title: "Co-abonnés Détectés", desc: "Les numéros d'usager sont identifiés automatiquement. Les trajets de chaque co-abonné sont séparés." },
              { icon: <Wallet size={20}/>, color: "text-[#0066DA]", title: "Chaque Dollar Identifié", desc: "Prix du temps, prix du km, frais de réservation, TPS, TVQ : zéro ligne mystère sur votre facture." },
              { icon: <Download size={20}/>, color: "text-yellow-600", title: "Export CSV / Excel", desc: "Téléchargez vos données structurées pour vos propres analyses dans Excel, Notion ou Google Sheets." },
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
            Je ne comprenais rien à mes factures Communauto. Maintenant je vois exactement où passe chaque dollar.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0066DA] flex items-center justify-center text-white font-bold text-sm">M</div>
            <div className="text-left">
              <div className="font-bold text-sm">Membre Communauto</div>
              <div className="text-xs text-gray-400">3 ans d'historique importé</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 1 — Import Multi-Fichiers
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Importez 2 ans<br/>de factures d'un coup.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Glissez-déposez vos PDF ou sélectionnez-les depuis votre ordinateur. L'extracteur traite jusqu'à 24 fichiers simultanément, avec un suivi en temps réel de chaque fichier.
              </p>
              <ul className="space-y-3">
                {[
                  "1 à 24 fichiers PDF par import",
                  "50 Mo maximum par fichier",
                  "Détection automatique des doublons",
                  "Bouton de réessai pour les fichiers en erreur",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-blue-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Upload mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Import de factures</div>
              <div className="border-2 border-dashed border-[#E3E3E3] rounded-xl p-8 text-center mb-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3 text-gray-400">
                  <Upload size={24}/>
                </div>
                <p className="text-sm font-medium text-gray-400">Glissez vos PDF ici</p>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Facture_Jan_2026.pdf", status: "done", size: "1.2 Mo" },
                  { name: "Facture_Fev_2026.pdf", status: "done", size: "980 Ko" },
                  { name: "Facture_Mars_2026.pdf", status: "processing", size: "1.1 Mo" },
                  { name: "Facture_Avr_2026.pdf", status: "waiting", size: "1.3 Mo" },
                ].map((file, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg border border-[#E3E3E3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="text-gray-400 flex-shrink-0" size={16}/>
                      <div>
                        <div className="font-medium text-sm">{file.name}</div>
                        <div className="text-xs text-gray-400">{file.size}</div>
                      </div>
                    </div>
                    {file.status === "done" && (
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Check className="text-green-600" size={12}/>
                      </div>
                    )}
                    {file.status === "processing" && (
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                        <Clock className="text-blue-600" size={12}/>
                      </div>
                    )}
                    {file.status === "waiting" && (
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <Clock className="text-gray-400" size={12}/>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <span className="text-xs text-blue-600">2 / 4 fichiers traités — </span>
                <span className="font-bold text-sm text-blue-700">en cours...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 2 — Structuration Automatique
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-5">Données extraites — Janvier 2026</div>
                {/* Mockup: extracted data */}
                <div className="space-y-4">
                  {/* Compte info */}
                  <div className="bg-gray-50 rounded-xl border border-[#E3E3E3] p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-3">Informations du compte</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Abonné</span>
                        <span className="font-mono font-medium">1234567</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Forfait</span>
                        <span className="font-medium">Éco+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Période</span>
                        <span className="font-mono font-medium">Jan 2026</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Facture</span>
                        <span className="font-mono font-medium">#98765</span>
                      </div>
                    </div>
                  </div>
                  {/* Trajets mini-table */}
                  <div className="bg-gray-50 rounded-xl border border-[#E3E3E3] p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-3">Trajets (aperçu)</div>
                    <div className="space-y-2">
                      {[
                        { date: "5 jan.", dur: "2h15", km: "18 km", cost: "14,20 $" },
                        { date: "12 jan.", dur: "4h30", km: "45 km", cost: "28,50 $" },
                        { date: "19 jan.", dur: "1h45", km: "12 km", cost: "11,80 $" },
                      ].map((trip, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex gap-3">
                            <span className="text-gray-400 w-16">{trip.date}</span>
                            <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100 text-xs">{trip.dur}</span>
                            <span className="bg-white px-1.5 py-0.5 rounded border border-gray-100 text-xs">{trip.km}</span>
                          </div>
                          <span className="font-mono font-medium">{trip.cost}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Solde */}
                  <div className="bg-gray-50 rounded-xl border border-[#E3E3E3] p-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Solde</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Nouveau solde</span>
                      <span className="font-mono font-bold text-[#0066DA]">54,50 $</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Du texte brut<br/>au tableau structuré.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Les PDF Communauto sont conçus pour l'impression, pas pour l'analyse. L'extracteur reconnaît chaque champ, chaque ligne, chaque montant — et les organise dans des tableaux clairs et filtrables.
              </p>
              <ul className="space-y-3">
                {[
                  "Informations du compte et période de facturation",
                  "Tableau complet des trajets avec tous les détails",
                  "TPS et TVQ isolées par ligne",
                  "Solde, paiements reçus, intérêts de retard",
                  "Transactions annexes (crédits, assurance, frais admin)",
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
          SPOTLIGHT 3 — Chaque Dollar Identifié
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-6">
                <Eye className="text-[#0066DA]" size={14}/>
                <span className="text-xs font-bold text-[#0066DA] uppercase tracking-wide">Transparence totale</span>
              </div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Chaque ligne<br/>de votre facture,<br/>expliquée.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Les factures Communauto mélangent tout : trajets, taxes, frais annexes, crédits. L'extracteur isole chaque composante pour que vous compreniez exactement ce que vous payez — et pourquoi.
              </p>
              <ul className="space-y-3">
                {[
                  "Prix du temps et prix du km séparés",
                  "Frais de réservation et autres frais/crédits",
                  "TPS et TVQ détaillées par ligne de trajet",
                  "Tarif appliqué identifié pour chaque trajet",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#0066DA] flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Detail breakdown mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide">Détail — Trajet du 12 jan.</div>
                <span className="text-xs bg-blue-50 text-[#0066DA] font-bold px-2 py-0.5 rounded">Éco+</span>
              </div>
              <div className="space-y-0 divide-y divide-[#E3E3E3]">
                {[
                  { label: "Prix du temps", detail: "4h30 × 3,50 $/h", value: "15,75 $" },
                  { label: "Prix du km", detail: "45 km × 0,19 $/km", value: "8,55 $" },
                  { label: "Frais de réservation", detail: "Frais fixe applicable", value: "1,00 $" },
                  { label: "Autres frais / crédits", detail: "Aucun crédit", value: "0,00 $", muted: true },
                  { label: "TPS (5%)", detail: "Sur sous-total", value: "1,27 $" },
                  { label: "TVQ (9,975%)", detail: "Sur sous-total", value: "2,52 $" },
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
                <span className="font-bold">Total du trajet</span>
                <span className="font-bold font-mono text-lg">29,09 $</span>
              </div>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-500">
                <span>Véhicule #A-4521 · Usager principal</span>
                <span className="font-mono font-medium text-gray-400">Tarif : Régulier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SPOTLIGHT 4 — Dashboard & Monitoring
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual (left) */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
                <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-5">Tableau de bord — 2025</div>
                {/* KPI cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-gray-50 p-3 rounded-xl border border-[#E3E3E3] text-center">
                    <div className="text-xs text-gray-400 mb-1">Total</div>
                    <div className="text-lg font-bold">2 450 $</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-[#E3E3E3] text-center">
                    <div className="text-xs text-gray-400 mb-1">Moy. / trajet</div>
                    <div className="text-lg font-bold">38 $</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl border border-[#E3E3E3] text-center">
                    <div className="text-xs text-gray-400 mb-1">Trajets</div>
                    <div className="text-lg font-bold">64</div>
                  </div>
                </div>
                {/* Chart mockup */}
                <div className="bg-gray-50 p-4 rounded-xl border border-[#E3E3E3]">
                  <div className="text-xs font-bold text-gray-400 uppercase mb-3">Évolution mensuelle</div>
                  <div className="h-32 flex items-end justify-between gap-1.5">
                    {[35, 55, 40, 70, 60, 45, 80, 50, 65, 40, 30, 55].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-[#0066DA] rounded-t-sm transition-all"
                          style={{ height: `${h}%` }}
                        ></div>
                        <span className="text-[9px] text-gray-300">
                          {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Anomaly alert */}
                <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-center gap-3">
                  <AlertTriangle className="text-orange-500 flex-shrink-0" size={16}/>
                  <div>
                    <div className="text-sm font-medium text-orange-700">Pic en juillet</div>
                    <div className="text-xs text-orange-600">+87 % vs moyenne — haute saison</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text (right) */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Un tableau de bord<br/>pour piloter<br/>votre budget.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Plus qu'un simple export. L'extracteur génère un dashboard avec vos KPI clés, l'évolution mois par mois, et la détection automatique des anomalies de consommation.
              </p>
              <ul className="space-y-3">
                {[
                  "Total dépensé, coût moyen par trajet, nombre de trajets",
                  "Graphique d'évolution mensuelle",
                  "Détection des pics de dépenses",
                  "Comparaison période par période",
                  "Export CSV / Excel en un clic",
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
          SPOTLIGHT 5 — Co-abonnés & Validation
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight mb-6">
                Co-abonnés détectés.<br/>Compte validé.
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Si vous partagez votre abonnement, l'extracteur identifie automatiquement chaque usager et ses trajets. Et pour protéger vos données, il vérifie que chaque facture correspond bien à votre compte.
              </p>
              <ul className="space-y-3">
                {[
                  "Détection automatique des numéros d'usager",
                  "Trajets séparés par co-abonné",
                  "Validation du numéro de compte à chaque import",
                  "Protection contre l'import de factures d'un autre abonné",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-purple-600 flex-shrink-0" size={18}/>
                    <span className="text-[15px] text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Visual — Co-subscribers mockup */}
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 shadow-lg">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Usagers détectés</div>
              <div className="space-y-3">
                {[
                  { name: "Usager principal", id: "#1234567", trips: 48, cost: "1 820 $", primary: true },
                  { name: "Co-abonné 1", id: "#1234568", trips: 16, cost: "630 $", primary: false },
                ].map((user, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${user.primary ? 'bg-purple-50 border-purple-200' : 'bg-gray-50 border-[#E3E3E3]'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${user.primary ? 'bg-purple-600 text-white' : 'bg-gray-300 text-white'}`}>
                          {user.primary ? 'P' : 'C'}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{user.name}</div>
                          <div className="text-xs text-gray-400 font-mono">{user.id}</div>
                        </div>
                      </div>
                      {user.primary && (
                        <span className="text-xs bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded">Principal</span>
                      )}
                    </div>
                    <div className="flex gap-4 text-sm mt-2">
                      <span className="text-gray-500">{user.trips} trajets</span>
                      <span className="font-mono font-medium">{user.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <ShieldCheck className="text-green-600 flex-shrink-0" size={16}/>
                <div className="text-sm text-green-700">
                  <span className="font-medium">Compte vérifié</span>
                  <span className="text-green-600"> — Toutes les factures correspondent au compte #1234567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC NOTION A — Pleine largeur + 2 cartes
          (Pattern "Trouvez des réponses, où qu'elles se cachent")
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
              Toutes vos données,<br/>enfin réunies.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Vos factures sont dispersées dans votre boîte mail. L'extracteur les centralise, les structure et les rend exploitables — au même endroit.
            </p>
          </div>

          {/* Mockup pleine largeur */}
          <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6 md:p-8 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-[#0066DA] rounded-lg flex items-center justify-center">
                <Layers className="text-white" size={16}/>
              </div>
              <div>
                <div className="font-bold text-sm">Historique centralisé</div>
                <div className="text-xs text-gray-400">24 factures importées · Jan 2024 — Déc 2025</div>
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {["Jan 24", "Fév 24", "Mar 24", "Avr 24", "Mai 24", "Jun 24", "Jul 24", "Aoû 24", "Sep 24", "Oct 24", "Nov 24", "Déc 24", "Jan 25", "Fév 25", "Mar 25", "Avr 25", "Mai 25", "Jun 25", "Jul 25", "Aoû 25", "Sep 25", "Oct 25", "Nov 25", "Déc 25"].map((month, i) => (
                <div key={i} className={`text-center p-2 rounded-lg border text-xs font-medium ${i < 20 ? 'bg-blue-50 border-blue-100 text-[#0066DA]' : 'bg-green-50 border-green-100 text-green-700'}`}>
                  {month}
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between text-sm">
              <div className="flex items-center gap-6 text-gray-500">
                <span><strong className="text-[#050505]">156</strong> trajets extraits</span>
                <span><strong className="text-[#050505]">2</strong> usagers détectés</span>
                <span><strong className="text-[#050505]">4 820 $</strong> total facturé</span>
              </div>
              <span className="text-xs text-gray-400 mt-2 md:mt-0">Dernière mise à jour : il y a 2 min</span>
            </div>
          </div>

          {/* 2 cartes en dessous */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6">
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-orange-600" size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Tendances mois par mois</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Le dashboard génère automatiquement l'évolution de vos dépenses et détecte les pics de consommation (haute saison, trajets longue distance).
              </p>
              <div className="h-20 flex items-end gap-1">
                {[30, 45, 35, 55, 50, 40, 75, 65, 50, 38, 28, 42].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className={`w-full rounded-t-sm ${i === 6 ? 'bg-orange-400' : 'bg-[#0066DA]'}`} style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-[#E3E3E3] p-6">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="text-red-500" size={20}/>
              </div>
              <h3 className="font-bold text-lg mb-2">Anomalies détectées</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                L'extracteur identifie les écarts significatifs : factures inhabituellement élevées, trajets facturés en double, frais inattendus.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg border border-orange-100">
                  <AlertTriangle className="text-orange-500 flex-shrink-0" size={14}/>
                  <span className="text-xs text-orange-700"><strong>Juil 24</strong> — +87 % vs moyenne (haute saison)</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg border border-red-100">
                  <AlertTriangle className="text-red-500 flex-shrink-0" size={14}/>
                  <span className="text-xs text-red-700"><strong>Oct 24</strong> — Frais admin inhabituel (45 $)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC NOTION B — 2 colonnes visuelles
          (Pattern "Cherchez et analysez à votre façon")
      ═══════════════════════════════════════════ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
              Explorez et exportez<br/>à votre façon.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carte gauche — Export */}
            <div className="bg-[#F7F7F5] rounded-2xl border border-[#E3E3E3] p-6 md:p-8">
              <h3 className="font-bold text-lg mb-2">Exportez vers vos outils favoris.</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Téléchargez vos données structurées en CSV ou Excel pour vos propres analyses. Compatible avec tous les tableurs.
              </p>
              <div className="bg-white rounded-xl border border-[#E3E3E3] p-5">
                <div className="flex items-center gap-4 mb-4">
                  {[
                    { name: "Excel", color: "bg-green-50 border-green-200 text-green-700" },
                    { name: "Google Sheets", color: "bg-blue-50 border-blue-200 text-blue-700" },
                    { name: "CSV", color: "bg-gray-50 border-gray-200 text-gray-700" },
                  ].map((tool, i) => (
                    <div key={i} className={`flex-1 text-center py-2.5 rounded-lg text-xs font-bold border ${tool.color}`}>
                      {tool.name}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Trajets (156 lignes)", format: ".xlsx" },
                    { label: "Soldes mensuels (24 lignes)", format: ".csv" },
                    { label: "Transactions annexes (12 lignes)", format: ".xlsx" },
                  ].map((file, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg border border-[#E3E3E3]">
                      <div className="flex items-center gap-2">
                        <Download className="text-gray-400" size={14}/>
                        <span className="text-sm font-medium">{file.label}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{file.format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Carte droite — Filtrage */}
            <div className="bg-[#F7F7F5] rounded-2xl border border-[#E3E3E3] p-6 md:p-8">
              <h3 className="font-bold text-lg mb-2">Filtrez par période et par usager.</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Isolez les données d'un trimestre précis, d'un co-abonné spécifique, ou combinez les filtres pour une vue sur mesure.
              </p>
              <div className="bg-white rounded-xl border border-[#E3E3E3] p-5">
                <div className="space-y-4">
                  {/* Filtre période */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Période</div>
                    <div className="flex gap-2">
                      {["3 mois", "6 mois", "1 an", "Tout"].map((period, i) => (
                        <div key={i} className={`flex-1 text-center py-2 rounded-lg text-xs font-bold border ${i === 2 ? 'bg-blue-50 border-[#0066DA] text-[#0066DA]' : 'bg-white border-[#E3E3E3] text-gray-400'}`}>
                          {period}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Filtre usager */}
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Usager</div>
                    <div className="flex gap-2">
                      {[
                        { label: "Tous", active: false },
                        { label: "Principal", active: true },
                        { label: "Co-abonné", active: false },
                      ].map((filter, i) => (
                        <div key={i} className={`flex-1 text-center py-2 rounded-lg text-xs font-bold border ${filter.active ? 'bg-purple-50 border-purple-300 text-purple-700' : 'bg-white border-[#E3E3E3] text-gray-400'}`}>
                          {filter.label}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Résultat filtre */}
                  <div className="p-3 bg-gray-50 rounded-lg border border-[#E3E3E3] flex items-center justify-between">
                    <span className="text-sm text-gray-500">Résultat</span>
                    <span className="text-sm font-bold">42 trajets · 1 580 $</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOC NOTION C — Grille de fonctionnalités compacte
          (Pattern "L'espace de travail alimenté par l'IA")
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-b border-[#E3E3E3]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
              L'extracteur le plus complet<br/>pour Communauto.
            </h2>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour comprendre et maîtriser vos factures.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-[#E3E3E3] overflow-hidden">
            {[
              {
                category: "Import",
                items: [
                  { label: "Glisser-déposer", detail: "Jusqu'à 24 PDF d'un coup" },
                  { label: "Détection de doublons", detail: "Factures déjà importées ignorées" },
                  { label: "Réessai automatique", detail: "Erreurs réseau gérées" },
                ],
              },
              {
                category: "Extraction",
                items: [
                  { label: "Bilingue FR / EN", detail: "Détection automatique de la langue" },
                  { label: "Trajets complets", detail: "Dates, durée, distance, prix, tarif" },
                  { label: "Taxes détaillées", detail: "TPS et TVQ par ligne de trajet" },
                ],
              },
              {
                category: "Analyse",
                items: [
                  { label: "Dashboard mensuel", detail: "Graphiques d'évolution et KPI" },
                  { label: "Détection d'anomalies", detail: "Pics, doublons, frais inattendus" },
                  { label: "Co-abonnés séparés", detail: "Trajets filtrés par usager" },
                ],
              },
              {
                category: "Export",
                items: [
                  { label: "CSV / Excel", detail: "Compatible tous les tableurs" },
                  { label: "Filtrage par période", detail: "3 mois, 6 mois, 1 an, personnalisé" },
                  { label: "Données complètes", detail: "Trajets, soldes, transactions" },
                ],
              },
            ].map((section, si) => (
              <div key={si} className={si > 0 ? 'border-t border-[#E3E3E3]' : ''}>
                <div className="grid grid-cols-1 md:grid-cols-4">
                  <div className="p-5 md:p-6 flex items-center md:border-r border-[#E3E3E3] bg-[#FAFAFA]">
                    <span className="font-bold text-sm text-gray-500 uppercase tracking-wide">{section.category}</span>
                  </div>
                  {section.items.map((item, ii) => (
                    <div key={ii} className={`p-5 md:p-6 ${ii < section.items.length - 1 ? 'md:border-r border-[#E3E3E3]' : ''} border-t md:border-t-0 border-[#E3E3E3]`}>
                      <div className="font-bold text-sm mb-1">{item.label}</div>
                      <div className="text-xs text-gray-400">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BEFORE / AFTER TABLE
      ═══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F7F7F5] border-t border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-4">
              Avant / Après<br/>l'extraction.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ce que vous obtenez en important vos factures PDF Communauto.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#E3E3E3] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E3E3E3]">
                  <th className="text-left p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide w-1/3"></th>
                  <th className="text-center p-4 md:p-5 font-bold text-gray-400 uppercase text-xs tracking-wide">Facture PDF brute</th>
                  <th className="text-center p-4 md:p-5 font-bold text-[#0066DA] uppercase text-xs tracking-wide bg-blue-50">Après extraction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3E3E3]">
                {[
                  { feature: "Format des données", them: "Texte brut non copiable", us: "Tableaux structurés et filtrables" },
                  { feature: "Tarifs", them: "Noyés dans les lignes", us: "Prix du temps, prix du km isolés" },
                  { feature: "Taxes", them: "Agrégées en bas de page", us: "TPS et TVQ détaillées par ligne" },
                  { feature: "Co-abonnés", them: "Mélangés dans les mêmes lignes", us: "Séparés et identifiés" },
                  { feature: "Vue d'ensemble", them: "Aucune", us: "Dashboard avec graphiques mensuels" },
                  { feature: "Historique", them: "Fichiers éparpillés", us: "Toutes les factures centralisées" },
                  { feature: "Export", them: "Impossible", us: "CSV / Excel en un clic" },
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
              <h3 className="text-xl font-bold mb-2">Vos factures centralisées, en toute sécurité.</h3>
              <p className="text-gray-500 leading-relaxed">
                Vos PDF sont conservés sur nos serveurs sécurisés et chiffrés au repos. Retrouvez le PDF original de chaque trajet à tout moment — toutes vos infos au même endroit. Suppression de vos données en un clic depuis votre compte.
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
            Importez vos factures gratuitement.
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Compte gratuit requis. Résultats en quelques secondes.
          </p>
          <Link
            to="/extractor"
            className="inline-flex items-center gap-2 bg-[#0066DA] hover:bg-[#0055b5] text-white px-8 py-4 rounded-[4px] font-bold text-lg transition-colors shadow-lg shadow-blue-100"
          >
            Commencer l'import <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BRIDGE TO OPTIMIZER
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 bg-white border border-[#E3E3E3] rounded-lg flex items-center justify-center mx-auto mb-6 text-[#0066DA]">
            <Sparkles size={24}/>
          </div>
          <h2 className="text-2xl font-bold mb-4">Vos données sont prêtes. Découvrez vos économies.</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            L'Optimiseur rejoue votre historique réel sous les 5 forfaits Communauto et vous révèle combien vous pourriez économiser. À partir de 14,99 $.
          </p>
          <Link
            to="/optimizer"
            className="inline-flex items-center gap-2 text-[#0066DA] font-bold hover:underline"
          >
            Découvrir l'Optimiseur <ArrowRight size={16}/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExtractorNotion;