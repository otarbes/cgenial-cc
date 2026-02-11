import React from 'react';
import { HelpCircle, ShieldCheck, ArrowRight, DollarSign, FileSearch, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-[#050505] font-sans">
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#F7F7F5] border-b border-[#E3E3E3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="inline-flex items-center gap-2 bg-white border border-[#E3E3E3] rounded-full px-3 py-1 mb-6">
             <HelpCircle size={14} className="text-gray-500" />
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Support & Aide</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Foire aux questions</h1>
           <p className="text-lg text-gray-500 max-w-2xl mx-auto">
             Tout ce que vous devez savoir sur la sécurité, le fonctionnement et les tarifs de Cgénial.
           </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 max-w-3xl mx-auto px-6">
         
         <div className="space-y-12">
            
            {/* Category: Security */}
            <div>
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-green-600"/> Sécurité & Données
               </h2>
               <div className="space-y-6">
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Mes factures sont-elles envoyées sur un serveur ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. Vos factures sont téléversées et stockées de manière sécurisée (chiffrée). Cela nous permet de vous offrir un historique illimité et accessible depuis n'importe quel appareil, sans risque de perte.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Gardez-vous mes informations personnelles ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Nous conservons les documents que vous téléversez dans votre espace sécurisé personnel. Vous restez propriétaire de vos données et pouvez demander la suppression intégrale de votre compte et de vos fichiers à tout moment.
                     </p>
                  </div>
               </div>
            </div>

            {/* Category: Product */}
            <div>
               <h2 className="text-xl font-bold mb-6">Fonctionnement</h2>
               <div className="space-y-6">
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Est-ce compatible avec les tarifs 2026 ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. Tous nos outils (Calculateur et Optimiseur) intègrent la grille tarifaire officielle 2026 de Communauto, incluant les nouveaux tarifs horaires et kilométriques.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Comment fonctionne l'Optimiseur ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        L'Optimiseur "rejoue" votre historique. Il prend chaque trajet que vous avez fait l'an passé et calcule combien il aurait coûté avec chaque forfait disponible. Il additionne ensuite le tout pour trouver l'option mathématiquement la moins chère.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Prenez-vous en compte les Laissez-passer Flex ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. C'est souvent l'oubli principal des calculs manuels. Nous vérifions si l'achat d'un pass illimité ou 20 trajets aurait été rentable basé sur votre fréquence d'utilisation réelle des véhicules Flex.
                     </p>
                  </div>
               </div>
            </div>

         </div>

            {/* Category: Pricing */}
            <div>
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <DollarSign className="text-[#0066DA]"/> Tarifs & Paiement
               </h2>
               <div className="space-y-6">
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Pourquoi 14.99$ ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        C'est un paiement unique pour 12 mois d'accès à l'Optimiseur. Il n'y a pas d'abonnement ni de renouvellement automatique. La plupart des utilisateurs identifient entre 100$ et 500$ d'économies annuelles, soit un retour sur investissement de 7x à 33x.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Puis-je être remboursé ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. Si les résultats de l'Optimiseur ne vous satisfont pas, vous avez 30 jours pour demander un remboursement complet, sans conditions.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Le Calculateur et l'Extracteur sont-ils vraiment gratuits ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. Le Calculateur est accessible sans compte et sans limite. L'Extracteur nécessite un compte gratuit pour sauvegarder vos factures, mais l'extraction elle-même est entièrement gratuite.
                     </p>
                  </div>
               </div>
            </div>

            {/* Category: Extractor */}
            <div>
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FileSearch className="text-purple-600"/> Extracteur
               </h2>
               <div className="space-y-6">
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Quelles données sont extraites de mes factures ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Chaque trajet est décomposé : date, durée, distance, véhicule utilisé, prix du temps, prix du km, taxes (TPS/TVQ), assurances, crédits et pénalités éventuelles. Le tout est structuré dans un tableau filtrable.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Combien de factures puis-je importer ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Il n'y a aucune limite. Vous pouvez importer toutes vos factures d'un coup, que ce soit 6 mois ou 5 ans d'historique.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Est-ce que ça fonctionne avec les anciens formats de factures ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Oui. Notre algorithme supporte les factures en français et en anglais, ainsi que les différents formats PDF que Communauto a utilisés au fil des ans.
                     </p>
                  </div>
               </div>
            </div>

            {/* Category: Tool Differences */}
            <div>
               <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layers className="text-orange-600"/> Différences entre les outils
               </h2>
               <div className="space-y-6">
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Calculateur vs Optimiseur : quelle différence ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Le <strong>Calculateur</strong> simule des trajets futurs hypothétiques. Vous définissez des trajets types et leurs récurrences, et l'outil projette le coût annuel sous les 5 forfaits. L'<strong>Optimiseur</strong> analyse vos trajets <em>réels</em> passés (via vos factures) pour trouver le forfait qui aurait été le moins cher.
                     </p>
                  </div>
                  <div className="border border-[#E3E3E3] rounded-xl p-6 hover:bg-gray-50 transition-colors">
                     <h3 className="font-bold text-lg mb-2">Dois-je utiliser les 3 outils ?</h3>
                     <p className="text-gray-600 leading-relaxed">
                        Non. Si vous êtes nouveau sur Communauto, commencez par le <strong>Calculateur</strong> pour estimer vos coûts. Si vous êtes déjà abonné, importez vos factures avec l'<strong>Extracteur</strong> puis lancez l'<strong>Optimiseur</strong> pour identifier vos économies réelles.
                     </p>
                  </div>
               </div>
            </div>

      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F7F7F5] border-t border-[#E3E3E3]">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Une question non couverte ?</h2>
            <p className="text-gray-500 mb-8">Le simulateur est gratuit et sans inscription. Testez-le en 30 secondes.</p>
            <Link to="/calculator" className="inline-flex items-center gap-2 bg-[#050505] text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#333] transition-colors">
               Essayer le simulateur <ArrowRight size={20}/>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default FAQ;