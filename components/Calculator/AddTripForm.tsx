import React, { useState } from 'react';
import { X, Clock, MapPin, Calendar } from 'lucide-react';
import { Trip } from '../../types';

interface Props {
  onAddTrip: (trip: Trip) => void;
  onCancel: () => void;
}

const AddTripForm: React.FC<Props> = ({ onAddTrip, onCancel }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState<number>(2);
  const [distance, setDistance] = useState<number>(10);
  const [frequency, setFrequency] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTrip({
      id: Math.random().toString(36).substr(2, 9),
      name: name || 'Trajet sans nom',
      durationHours: duration,
      distanceKm: distance,
      frequencyPerMonth: frequency
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-[#E3E3E3] overflow-hidden animate-fade-in-up">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#E3E3E3] flex justify-between items-center bg-white">
        <h3 className="font-bold text-lg">Nouveau Trajet</h3>
        <button onClick={onCancel} className="text-gray-400 hover:text-black transition-colors">
          <X size={20} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        
        {/* Name Input */}
        <div className="mb-6">
           <label className="block text-sm font-bold text-gray-700 mb-2">Nom du trajet</label>
           <input 
            type="text" 
            placeholder="Ex: Épicerie, Weekend Chalet..." 
            className="w-full text-lg border border-[#E3E3E3] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0066DA] focus:border-transparent transition-all placeholder-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
            required
           />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
           {/* Duration */}
           <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1"><Clock size={14}/> Durée (h)</label>
              <input 
               type="number" step="0.5" min="0.5"
               className="w-full border border-[#E3E3E3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0066DA] transition-all"
               value={duration}
               onChange={(e) => setDuration(parseFloat(e.target.value))}
              />
           </div>

           {/* Distance */}
           <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1"><MapPin size={14}/> Distance (km)</label>
              <input 
               type="number" min="1"
               className="w-full border border-[#E3E3E3] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0066DA] transition-all"
               value={distance}
               onChange={(e) => setDistance(parseFloat(e.target.value))}
              />
           </div>
        </div>

        {/* Frequency */}
        <div className="mb-8">
           <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1"><Calendar size={14}/> Fréquence mensuelle</label>
           <div className="flex items-center gap-3">
              <input 
               type="range" min="1" max="10"
               className="flex-1 accent-[#0066DA] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
               value={frequency}
               onChange={(e) => setFrequency(parseInt(e.target.value))}
              />
              <div className="w-16 text-center border border-[#E3E3E3] rounded py-1 font-mono font-bold">
                 {frequency}x
              </div>
           </div>
           <p className="text-xs text-gray-400 mt-2">Combien de fois faites-vous ce trajet par mois ?</p>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 bg-[#0066DA] hover:bg-[#0055b5] text-white rounded-lg font-bold text-base transition-colors shadow-lg shadow-blue-100"
        >
          Ajouter ce trajet
        </button>
      </form>
    </div>
  );
};

export default AddTripForm;