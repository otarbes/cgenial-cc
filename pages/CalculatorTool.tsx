import React, { useState, useMemo } from 'react';
import AddTripForm from '../components/Calculator/AddTripForm';
import Results from '../components/Calculator/Results';
import { Trip, PlanType, ComparisonResult } from '../types';
import { Plus, Trash2, HelpCircle, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorTool: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([
    { id: '1', name: 'Épicerie Hebdo', durationHours: 2, distanceKm: 12, frequencyPerMonth: 4 },
    { id: '2', name: 'Visite Famille', durationHours: 6, distanceKm: 80, frequencyPerMonth: 1 }
  ]);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTrip = (trip: Trip) => {
    setTrips([...trips, trip]);
    setShowAddForm(false);
  };

  const removeTrip = (id: string) => {
    setTrips(trips.filter(t => t.id !== id));
  };

  const calculateCosts = useMemo((): ComparisonResult => {
    if (trips.length === 0) {
      return { plans: [], competitorLeoYearly: 0, personalCarYearly: 0, flexPassSavingsYearly: 0 };
    }

    const totalHoursPerMonth = trips.reduce((acc, t) => acc + (t.durationHours * t.frequencyPerMonth), 0);
    const totalKmPerMonth = trips.reduce((acc, t) => acc + (t.distanceKm * t.frequencyPerMonth), 0);
    const totalTripsPerMonth = trips.reduce((acc, t) => acc + t.frequencyPerMonth, 0);

    const plansData = [
      { type: PlanType.Liberte, monthlyFee: 0, hourlyRate: 12.00, kmRate: 0.28 },
      { type: PlanType.LibertePlus, monthlyFee: 5.00, hourlyRate: 9.00, kmRate: 0.24 },
      { type: PlanType.Economique, monthlyFee: 12.50, hourlyRate: 4.80, kmRate: 0.21 },
      { type: PlanType.EconomiquePlus, monthlyFee: 30.00, hourlyRate: 3.50, kmRate: 0.19 },
      { type: PlanType.EcoExtra, monthlyFee: 60.00, hourlyRate: 2.95, kmRate: 0.16 }
    ];

    const planResults = plansData.map(plan => {
      const usageCost = (totalHoursPerMonth * plan.hourlyRate) + (totalKmPerMonth * plan.kmRate);
      const monthlyTotal = plan.monthlyFee + usageCost;
      return {
        name: plan.type,
        monthlyCost: monthlyTotal,
        yearlyCost: monthlyTotal * 12,
        isBest: false,
        color: '#E3E3E3'
      };
    });

    planResults.sort((a, b) => a.yearlyCost - b.yearlyCost);
    planResults[0].isBest = true;
    planResults[0].color = '#0066DA';

    const leoYearly = ((totalHoursPerMonth * 13.50) + (totalKmPerMonth * 0.30)) * 12;
    const carYearly = (500 + (totalKmPerMonth * 0.15)) * 12;
    const flexPassSavingsYearly = (totalTripsPerMonth * 0.5 * 12 * 8) - (75 * 12);

    return {
      plans: planResults,
      competitorLeoYearly: leoYearly,
      personalCarYearly: carYearly,
      flexPassSavingsYearly: flexPassSavingsYearly
    };
  }, [trips]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-[#050505]">
      
      {/* Tool Header */}
      <div className="bg-white border-b border-[#E3E3E3] py-4 px-6 sticky top-16 z-40">
         <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
               <Link to="/calculator" className="text-gray-400 hover:text-black transition-colors">
                  <ArrowLeft size={20}/>
               </Link>
               <h1 className="text-xl font-bold">Simulateur</h1>
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
               Tarifs 2026 appliqués
            </div>
         </div>
      </div>

      {/* Main Tool Interface */}
      <div className="max-w-6xl mx-auto px-6 py-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7">
             <div className="bg-white border border-[#E3E3E3] rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                   <h2 className="text-xl font-bold">Vos Trajets Types</h2>
                   <button 
                      onClick={() => setTrips([])}
                      className="text-xs text-gray-500 hover:text-red-500 font-medium underline"
                   >
                      Tout effacer
                   </button>
                </div>

                {/* List of Cards */}
                <div className="space-y-3 mb-6">
                   {trips.length === 0 ? (
                      <div className="text-center py-12 border-2 border-dashed border-[#E3E3E3] rounded-xl">
                         <p className="text-gray-400">Aucun trajet défini.</p>
                      </div>
                   ) : (
                      trips.map(trip => (
                         <div key={trip.id} className="bg-slate-50 p-4 rounded-xl border border-[#E3E3E3] flex items-center justify-between group hover:border-gray-300 transition-colors">
                            <div>
                               <div className="font-bold text-lg mb-1">{trip.name}</div>
                               <div className="text-sm text-gray-500 flex gap-3">
                                  <span className="bg-white px-2 py-0.5 rounded text-gray-600 border border-gray-100">{trip.distanceKm} km</span>
                                  <span className="bg-white px-2 py-0.5 rounded text-gray-600 border border-gray-100">{trip.durationHours} h</span>
                                  <span className="text-gray-400">× {trip.frequencyPerMonth}/mois</span>
                               </div>
                            </div>
                            <button 
                               onClick={() => removeTrip(trip.id)}
                               className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                            >
                               <Trash2 size={18} />
                            </button>
                         </div>
                      ))
                   )}
                </div>

                <button 
                   onClick={() => setShowAddForm(true)}
                   className="w-full py-4 border-2 border-dashed border-[#E3E3E3] rounded-xl text-gray-500 font-bold hover:bg-slate-50 hover:border-gray-300 hover:text-black transition-all flex items-center justify-center gap-2"
                >
                   <Plus size={20} /> Ajouter un trajet
                </button>
             </div>
             
             {/* Notes / FAQ in simple text */}
             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-500">
                <div>
                   <h4 className="font-bold text-[#050505] mb-2 flex items-center gap-2"><HelpCircle size={14}/> Essence & Assurances</h4>
                   <p>Les prix incluent l'essence et l'assurance de base (franchise standard). Les taxes sont calculées dans le rapport final.</p>
                </div>
                <div>
                   <h4 className="font-bold text-[#050505] mb-2 flex items-center gap-2"><Info size={14}/> Flex Pass</h4>
                   <p>Le calculateur applique automatiquement le tarif Laissez-passer Flex si votre volume le justifie.</p>
                </div>
             </div>
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-5 sticky top-28">
             <div className="bg-white border border-[#E3E3E3] rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Info size={100} />
                </div>
                <h2 className="text-xl font-bold mb-6 relative z-10">Rapport Financier</h2>
                <Results data={calculateCosts} />
             </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showAddForm && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
            <div className="max-w-lg w-full">
               <AddTripForm onAddTrip={addTrip} onCancel={() => setShowAddForm(false)} />
            </div>
         </div>
      )}

    </div>
  );
};

export default CalculatorTool;