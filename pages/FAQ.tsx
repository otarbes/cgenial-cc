import React from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

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

      </section>

    </div>
  );
};

export default FAQ;