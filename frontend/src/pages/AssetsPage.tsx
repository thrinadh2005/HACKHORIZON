import React, { useState } from 'react';
import { Package, Search, Plus, Filter, RefreshCw, CheckCircle, AlertTriangle, Cpu, X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { StatusIndicator } from '../components/ui/StatusIndicator';
import { useAssets, useRegisterAsset } from '../hooks/useAssets';

const SAMPLE_ASSETS = [
  { id: 'P-042', name: 'Coastal Drain Pump Station 14', type: 'Water Pump', zone: 'Zone 4', ward: 'Ward 22', status: 'critical' as const, officer: 'Sri A. Reddy', readiness: 34 },
  { id: 'G-007', name: 'Port Auxiliary Generator Alpha', type: 'Generator', zone: 'Zone 1', ward: 'Ward 5', status: 'operational' as const, officer: 'Sri R. Naidu', readiness: 98 },
  { id: 'S-018', name: 'Gajuwaka Relief Shelter Camp', type: 'Shelter', zone: 'Zone 2', ward: 'Ward 12', status: 'maintenance' as const, officer: 'Sri P. Rao', readiness: 71 },
  { id: 'V-031', name: 'Heavy Amphibious Rescue Vehicle', type: 'Vehicle', zone: 'Zone 3', ward: 'Ward 9', status: 'operational' as const, officer: 'Sri M. Das', readiness: 94 },
  { id: 'P-067', name: 'Rushikonda Coastal Pump Array', type: 'Water Pump', zone: 'Zone 5', ward: 'Ward 31', status: 'offline' as const, officer: 'Sri S. Babu', readiness: 0 },
];

export const AssetsPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assetName, setAssetName] = useState('');
  const [assetCode, setAssetCode] = useState('');
  const [category, setCategory] = useState('GEN');

  const { data: apiAssets, isLoading, refetch } = useAssets();
  const registerMutation = useRegisterAsset();

  const formattedApiAssets = apiAssets?.map((a: any) => ({
    id: a.asset_code || a.id || 'A-' + Math.floor(Math.random() * 1000),
    name: a.name || 'Unnamed Asset',
    type: a.category_id === 'cat-1' ? 'Generator' : a.category_id === 'cat-2' ? 'Water Pump' : a.category_id === 'cat-3' ? 'Shelter' : 'Equipment',
    zone: a.zone_id ? `Zone ${a.zone_id.replace('z-', '')}` : 'Zone 1',
    ward: a.ward_id ? `Ward ${a.ward_id.replace('w-', '')}` : 'Ward 1',
    status: (a.operational_status?.toLowerCase() === 'operational' ? 'operational' : a.operational_status?.toLowerCase() === 'critical' ? 'critical' : 'maintenance') as any,
    officer: 'Field Team',
    readiness: Math.round(a.health_score || 85),
  })) || [];

  const displayAssets = formattedApiAssets.length > 0 ? formattedApiAssets : SAMPLE_ASSETS;

  const filteredAssets = displayAssets.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!assetName || !assetCode) return;
    try {
      await registerMutation.mutateAsync({
        name: assetName,
        asset_code: assetCode,
        category_id: category === 'GEN' ? 'cat-1' : category === 'PUMP' ? 'cat-2' : 'cat-3',
        operational_status: 'Operational',
        health_score: 100.0,
      });
      setIsModalOpen(false);
      setAssetName('');
      setAssetCode('');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-500" />
            Critical Infrastructure Assets & Digital Twins
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Telemetry, RUL Forecasts & Health Index across Visakhapatnam Municipal Wards
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Refresh list"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/20"
          >
            <Plus className="w-4 h-4" />
            Register Digital Twin
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by asset code, name, or category..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="info">{filteredAssets.length} Digital Twins Active</Badge>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm dark:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-4">Asset Code & Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Location</th>
                <th className="p-4">Operational Health</th>
                <th className="p-4">Assigned Officer</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">{asset.name}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{asset.id}</div>
                  </td>
                  <td className="p-4 font-semibold text-slate-800 dark:text-slate-200">{asset.type}</td>
                  <td className="p-4">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{asset.zone}</span> · <span className="text-slate-500 dark:text-slate-400">{asset.ward}</span>
                  </td>
                  <td className="p-4">
                    <div className="w-32 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden mb-1">
                      <div
                        className={`h-full ${asset.readiness > 70 ? 'bg-emerald-500' : asset.readiness > 40 ? 'bg-amber-500' : 'bg-rose-500'}`}
                        style={{ width: `${asset.readiness}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{asset.readiness}% Health Index</span>
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{asset.officer}</td>
                  <td className="p-4">
                    <StatusIndicator status={asset.status} label={asset.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-500" />
                Register Digital Twin Asset
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Asset Name</label>
                <input
                  type="text"
                  value={assetName}
                  onChange={(e) => setAssetName(e.target.value)}
                  placeholder="e.g. Pump Station 21 Alpha"
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Asset Code</label>
                <input
                  type="text"
                  value={assetCode}
                  onChange={(e) => setAssetCode(e.target.value)}
                  placeholder="e.g. P-099"
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500"
                >
                  <option value="GEN">Generator</option>
                  <option value="PUMP">Water Pump</option>
                  <option value="SHLTR">Shelter</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={registerMutation.isPending}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20"
                >
                  {registerMutation.isPending ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
