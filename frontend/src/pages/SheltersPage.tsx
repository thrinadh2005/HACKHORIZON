import React, { useState } from 'react';
import { Building2, Users, Package, Phone, CheckCircle, AlertCircle, RefreshCw, Plus, X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { useShelters, useShelterCheckIn } from '../hooks/useShelters';

const SAMPLE_SHELTERS = [
  { id: 'SHL-01', name: 'Gajuwaka Municipal High School Shelter', zone: 'Zone 2', ward: 'Ward 12', capacity: 500, currentOccupancy: 460, foodStockDays: 4, medicalKitCount: 25, status: 'Active' },
  { id: 'SHL-02', name: 'Bheemunipatnam Cyclone Relief Center A', zone: 'Zone 3', ward: 'Ward 17', capacity: 800, currentOccupancy: 610, foodStockDays: 7, medicalKitCount: 40, status: 'Active' },
  { id: 'SHL-03', name: 'Kailasagiri Community Hall Relief Camp', zone: 'Zone 5', ward: 'Ward 31', capacity: 350, currentOccupancy: 120, foodStockDays: 5, medicalKitCount: 15, status: 'Active' },
];

export const SheltersPage: React.FC = () => {
  const { data: apiShelters, isLoading, refetch } = useShelters();
  const checkInMutation = useShelterCheckIn();
  const [selectedShelter, setSelectedShelter] = useState<string | null>(null);
  const [headName, setHeadName] = useState('');
  const [familyMembers, setFamilyMembers] = useState(1);

  const formattedApiShelters = apiShelters?.map((s: any) => ({
    id: s.code || s.id || 'SHL-' + Math.floor(Math.random() * 100),
    name: s.name || 'Emergency Shelter',
    zone: s.zone_id ? `Zone ${s.zone_id.replace('z-', '')}` : 'Zone 2',
    ward: s.ward_id ? `Ward ${s.ward_id.replace('w-', '')}` : 'Ward 12',
    capacity: s.capacity || 500,
    currentOccupancy: s.current_occupancy || 0,
    foodStockDays: s.food_stock_days || 5,
    medicalKitCount: s.medical_kits || 20,
    status: s.status || 'Active',
  })) || [];

  const displayShelters = formattedApiShelters.length > 0 ? formattedApiShelters : SAMPLE_SHELTERS;

  const handleCheckIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShelter || !headName) return;
    try {
      await checkInMutation.mutateAsync({
        shelter_id: selectedShelter,
        family_head_name: headName,
        family_members_count: familyMembers,
      });
      setSelectedShelter(null);
      setHeadName('');
      setFamilyMembers(1);
    } catch (err) {
      console.error('Check-in failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-500" />
            Emergency Relief Shelters & Citizen Occupancy
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Citizen Evacuation Tracking, Rations Stocking & Medical Support Across Visakhapatnam
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Refresh shelters"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <Badge variant="purple" size="md">{displayShelters.length} Active Camps Operating</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayShelters.map((s) => {
          const occupancyRate = Math.round((s.currentOccupancy / s.capacity) * 100);
          return (
            <div key={s.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={occupancyRate > 90 ? 'danger' : 'success'}>
                  {occupancyRate}% OCCUPIED
                </Badge>
                <span className="text-xs text-slate-400 font-mono font-bold">{s.id}</span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{s.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">{s.zone} · {s.ward}</p>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">Occupancy Capacity</span>
                  <span className="text-slate-900 dark:text-slate-200">{s.currentOccupancy} / {s.capacity} Evacuees</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${occupancyRate > 90 ? 'bg-rose-500' : 'bg-blue-500'}`}
                    style={{ width: `${occupancyRate}%` }}
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="text-slate-500 dark:text-slate-400 font-medium">Rations Stock</div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{s.foodStockDays} Days Available</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
                  <div className="text-slate-500 dark:text-slate-400 font-medium">Medical Kits</div>
                  <div className="font-bold text-purple-600 dark:text-purple-400 mt-0.5">{s.medicalKitCount} Kits Ready</div>
                </div>
              </div>

              <button
                onClick={() => setSelectedShelter(s.id)}
                className="w-full py-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" /> Check-in Evacuees
              </button>
            </div>
          );
        })}
      </div>

      {/* Check-In Modal */}
      {selectedShelter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Evacuee Check-In
              </h3>
              <button onClick={() => setSelectedShelter(null)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCheckIn} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Family Head Name</label>
                <input
                  type="text"
                  value={headName}
                  onChange={(e) => setHeadName(e.target.value)}
                  placeholder="e.g. K. V. Satyanarayana"
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Family Members Count</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={familyMembers}
                  onChange={(e) => setFamilyMembers(parseInt(e.target.value) || 1)}
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedShelter(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={checkInMutation.isPending}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20"
                >
                  {checkInMutation.isPending ? 'Processing...' : 'Confirm Check-In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
