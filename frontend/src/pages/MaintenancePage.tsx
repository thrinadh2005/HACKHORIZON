import React, { useState } from 'react';
import {
  Wrench, CheckSquare, Clock, Plus, Search, Filter, AlertTriangle,
  CheckCircle, User, Package, ChevronRight, ShieldAlert, WrenchIcon
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { StatusIndicator } from '../components/ui/StatusIndicator';

interface WorkOrder {
  id: string;
  title: string;
  assetId: string;
  assetName: string;
  priority: 'Urgency High' | 'Medium' | 'Routine';
  status: 'Created' | 'Assigned' | 'In Progress' | 'Completed';
  technician: string;
  zone: string;
  createdAt: string;
}

const SAMPLE_WORK_ORDERS: WorkOrder[] = [
  {
    id: 'WO-8042',
    title: 'Emergency Fuel Filter Replacement & Overhaul',
    assetId: 'P-042',
    assetName: 'Coastal Drain Pump Station 14',
    priority: 'Urgency High',
    status: 'In Progress',
    technician: 'Sri V. Kumar (Lead Tech)',
    zone: 'Zone 4',
    createdAt: '30 mins ago'
  },
  {
    id: 'WO-8041',
    title: 'Backup Diesel Generator Battery Bank Replacement',
    assetId: 'G-007',
    assetName: 'Port Auxiliary Generator Alpha',
    priority: 'Urgency High',
    status: 'Assigned',
    technician: 'Sri M. Das',
    zone: 'Zone 1',
    createdAt: '2 hours ago'
  },
  {
    id: 'WO-8038',
    title: 'Shelter Roof Waterproofing Inspection',
    assetId: 'S-018',
    assetName: 'Gajuwaka Relief Shelter Camp',
    priority: 'Medium',
    status: 'Completed',
    technician: 'Sri K. Rao',
    zone: 'Zone 2',
    createdAt: '5 hours ago'
  },
  {
    id: 'WO-8035',
    title: 'Transformer Cooling Oil Top-up & Surge Protection Check',
    assetId: 'X-012',
    assetName: 'Substation Transformer 03',
    priority: 'Routine',
    status: 'Created',
    technician: 'Unassigned',
    zone: 'Zone 5',
    createdAt: '1 day ago'
  }
];

export const MaintenancePage: React.FC = () => {
  const [workOrders, setWorkOrders] = useState<WorkOrder[]>(SAMPLE_WORK_ORDERS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [newTitle, setNewTitle] = useState('');
  const [newAsset, setNewAsset] = useState('Coastal Drain Pump Station 14 (P-042)');
  const [newPriority, setNewPriority] = useState<'Urgency High' | 'Medium' | 'Routine'>('Urgency High');

  const filteredOrders = workOrders.filter((wo) => {
    const matchesSearch = wo.title.toLowerCase().includes(search.toLowerCase()) ||
                          wo.id.toLowerCase().includes(search.toLowerCase()) ||
                          wo.assetName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || wo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateWorkOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newWo: WorkOrder = {
      id: `WO-${Math.floor(8043 + Math.random() * 100)}`,
      title: newTitle,
      assetId: newAsset.includes('P-042') ? 'P-042' : 'G-007',
      assetName: newAsset,
      priority: newPriority,
      status: 'Created',
      technician: 'Unassigned',
      zone: 'Zone 4',
      createdAt: 'Just now'
    };

    setWorkOrders([newWo, ...workOrders]);
    setNewTitle('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-500" />
            Maintenance Work Orders & Inventory Reservations
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Scheduled Inspections, Repair Work Orders & Spare Parts Dispatch for GVMC Assets
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md shadow-blue-600/20 shrink-0"
        >
          <Plus className="w-4 h-4" />
          Create Work Order
        </button>
      </div>

      {/* Quick Summary Pipeline Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Total Orders</div>
          <div className="text-2xl font-black text-slate-900 dark:text-slate-100 mt-1">{workOrders.length}</div>
          <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium mt-1">Active Pipeline</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">In Progress</div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">
            {workOrders.filter(w => w.status === 'In Progress').length}
          </div>
          <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-1">Technicians On Field</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">High Priority</div>
          <div className="text-2xl font-black text-rose-600 dark:text-rose-400 mt-1">
            {workOrders.filter(w => w.priority === 'Urgency High').length}
          </div>
          <div className="text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-1">Pre-Landfall Priority</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">Completed</div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            {workOrders.filter(w => w.status === 'Completed').length}
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1">Verified & Closed</div>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search work orders by ID, asset, or title..."
            className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
          {['All', 'Created', 'Assigned', 'In Progress', 'Completed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                statusFilter === st
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Work Orders List / Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 overflow-hidden shadow-sm dark:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider">
              <tr>
                <th className="p-4">Work Order ID & Title</th>
                <th className="p-4">Target Asset</th>
                <th className="p-4">Priority</th>
                <th className="p-4">Assigned Technician</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
              {filteredOrders.map((wo) => (
                <tr key={wo.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">{wo.title}</div>
                    <div className="text-[11px] font-mono text-slate-400 mt-0.5">{wo.id} · {wo.createdAt}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800 dark:text-slate-200">{wo.assetName}</div>
                    <div className="text-[11px] text-slate-500 font-mono">{wo.assetId} · {wo.zone}</div>
                  </td>
                  <td className="p-4">
                    <Badge variant={wo.priority === 'Urgency High' ? 'danger' : wo.priority === 'Medium' ? 'warning' : 'default'}>
                      {wo.priority}
                    </Badge>
                  </td>
                  <td className="p-4 font-medium text-slate-800 dark:text-slate-200">
                    {wo.technician}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      wo.status === 'In Progress' ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800' :
                      wo.status === 'Completed' ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800' :
                      wo.status === 'Assigned' ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-800' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700'
                    }`}>
                      {wo.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-800 transition-colors">
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Work Order Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Create New Maintenance Work Order</h3>
            <form onSubmit={handleCreateWorkOrder} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Work Order Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Pump 14 Seal Repair & Diesel Filter Change"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Target Asset</label>
                <select
                  value={newAsset}
                  onChange={(e) => setNewAsset(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                >
                  <option value="Coastal Drain Pump Station 14 (P-042)">Coastal Drain Pump Station 14 (P-042)</option>
                  <option value="Port Auxiliary Generator Alpha (G-007)">Port Auxiliary Generator Alpha (G-007)</option>
                  <option value="Gajuwaka Relief Shelter Camp (S-018)">Gajuwaka Relief Shelter Camp (S-018)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">Priority</label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as any)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-slate-900 dark:text-slate-100"
                >
                  <option value="Urgency High">Urgency High (Pre-Landfall Critical)</option>
                  <option value="Medium">Medium</option>
                  <option value="Routine">Routine</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
