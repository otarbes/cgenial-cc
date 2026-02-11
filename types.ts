export interface Trip {
  id: string;
  name: string;
  durationHours: number;
  distanceKm: number;
  frequencyPerMonth: number;
}

export interface PlanResult {
  name: string;
  monthlyCost: number;
  yearlyCost: number;
  isBest: boolean;
  color: string;
  details?: string;
}

export interface ComparisonResult {
  plans: PlanResult[];
  competitorLeoYearly: number;
  personalCarYearly: number;
  flexPassSavingsYearly: number;
}

export enum PlanType {
  Liberte = 'Liberté',
  LibertePlus = 'Liberté Plus',
  Economique = 'Économique',
  EconomiquePlus = 'Économique Plus',
  EcoExtra = 'Eco Extra'
}