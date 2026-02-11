import React from 'react';
import { ComparisonResult } from '../../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, Zap, AlertCircle, Info } from 'lucide-react';

interface Props {
  data: ComparisonResult;
}

const Results: React.FC<Props> = ({ data }) => {
  const { plans, competitorLeoYearly, personalCarYearly, flexPassSavingsYearly } = data;
  const bestPlan = plans.find(r => r.isBest);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white p-2 rounded text-xs">
          <p className="font-bold mb-1">{label}</p>
          <p>
            {new Intl.NumberFormat('fr-CA', { style: 'currency', currency: 'CAD' }).format(payload[0].value)}/an
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 animate-fade-in text-[#050505]">
      
      {/* 1. BEST PLAN HIGHLIGHT */}
      {bestPlan && (
        <div className="bg-[#EBF5FF] rounded-xl p-6 border border-blue-100">
           <div className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2 flex items-center gap-2">
              <Trophy size={16}/> Recommandation
           </div>
           <div className="text-3xl font-bold text-[#0066DA] mb-2">{bestPlan.name}</div>
           <p className="text-gray-600 leading-relaxed">
              C'est l'option la plus économique pour votre profil avec un coût total estimé de <span className="font-bold text-gray-900">{bestPlan.yearlyCost.toFixed(0)}$ /an</span>.
           </p>
        </div>
      )}

      {/* 2. PLANS COMPARISON CHART */}
      <div>
        <h4 className="text-sm font-bold text-gray-400 uppercase mb-4 tracking-wide">Comparatif des Forfaits</h4>
        <div className="h-[220px] w-full font-sans text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={plans}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F0F0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#6B7280', fontSize: 11, fontWeight: 500}}
                interval={0}
                dy={10}
              />
              <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
              <Bar dataKey="yearlyCost" radius={[4, 4, 0, 0]} barSize={40}>
                {plans.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.isBest ? '#0066DA' : '#E5E7EB'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="h-px bg-[#E3E3E3] w-full"></div>

      {/* 3. FLEX PASS ANALYSIS */}
      <div className="flex items-start gap-4">
         <div className={`mt-1 p-2 rounded-lg ${flexPassSavingsYearly > 0 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
            <Zap size={20} />
         </div>
         <div>
            <h4 className="font-bold text-lg mb-1">Laissez-passer Flex</h4>
            {flexPassSavingsYearly > 0 ? (
               <p className="text-sm text-gray-600">
                  <span className="font-bold text-green-600 bg-green-50 px-1 rounded">Rentable.</span> L'abonnement Flex vous ferait économiser environ <strong>{flexPassSavingsYearly.toFixed(0)}$/an</strong> sur vos trajets courts.
               </p>
            ) : (
               <p className="text-sm text-gray-500">
                  Pas intéressant pour votre volume de trajets Flex actuel.
               </p>
            )}
         </div>
      </div>
      
      {/* 4. CAR COMPARISON */}
      <div className="flex items-start gap-4">
         <div className="mt-1 p-2 rounded-lg bg-gray-100 text-gray-600">
            <Info size={20} />
         </div>
         <div className="w-full">
            <h4 className="font-bold text-lg mb-1">Vs Auto Personnelle</h4>
            <div className="flex justify-between items-center text-sm mb-1">
               <span className="text-gray-500">Coût estimé auto perso</span>
               <span className="font-mono font-medium">{personalCarYearly.toFixed(0)}$ /an</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500">Économie réalisée</span>
               <span className="font-mono font-bold text-green-600">{(personalCarYearly - (bestPlan?.yearlyCost || 0)).toFixed(0)}$ /an</span>
            </div>
         </div>
      </div>

    </div>
  );
};

export default Results;