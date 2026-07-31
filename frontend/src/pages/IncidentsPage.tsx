import React, { useState } from 'react';
import { AlertTriangle, Plus, Search, Filter, Shield, Clock, MapPin, Radio, Send, RefreshCw, X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { StatusIndicator } from '../components/ui/StatusIndicator';
import { useIncidents, useIngestIncident, useTriageIncident } from '../hooks/useIncidents';

const SAMPLE_INCIDENTS = [
  { id: 'INC-1049', title: 'Major Drain Overflow & Road Submersion', severity: 'L3' as const, zone: 'Zone 4', ward: 'Ward 22', status: 'active' as const, reportedAt: '10 mins ago', aiPriorityScore: 94 },
  { id: 'INC-1048', title: 'High Voltage Transformer Sparking', severity: 'L2' as const, zone: 'Zone 2', ward: 'Ward 12', status: 'active' as const, reportedAt: '25 mins ago', aiPriorityScore: 82 },
  { id: 'INC-1045', title: 'Uprooted Banyan Tree Blocking Hospital Route', severity: 'L3' as const, zone: 'Zone 5', ward: 'Ward 31', status: 'resolved' as const, reportedAt: '2 hours ago', aiPriorityScore: 98 },
];

export const IncidentsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'L1' | 'L2' | 'L3'>('L2');

  const { data: apiIncidents, isLoading, refetch } = useIncidents();
  const ingestMutation = useIngestIncident();
  const triageMutation = useTriageIncident();

  const formattedApiIncidents = apiIncidents?.map((i: any) => ({
    id: i.incident_code || i.id || 'INC-' + Math.floor(Math.random() * 1000),
    title: i.title || i.description || 'Emergency Incident',
    severity: i.severity || 'L2',
    zone: i.zone_id ? `Zone ${i.zone_id.replace('z-', '')}` : 'Zone 4',
    ward: i.ward_id ? `Ward ${i.ward_id.replace('w-', '')}` : 'Ward 22',
    status: (i.status?.toLowerCase() === 'resolved' ? 'resolved' : 'active') as any,
    reportedAt: i.created_at ? new Date(i.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
    aiPriorityScore: Math.round(i.ai_triage_score || 85),
  })) || [];

  const displayIncidents = formattedApiIncidents.length > 0 ? formattedApiIncidents : SAMPLE_INCIDENTS;

  const handleIngest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    try {
      await ingestMutation.mutateAsync({
        title,
        description: description || title,
        severity,
        category: 'infrastructure',
        location: { latitude: 17.6868, longitude: 83.2185 },
      });
      setIsModalOpen(false);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Ingest failed:', err);
    }
  };

  const handleTriage = async (id: string) => {
    try {
      await triageMutation.mutateAsync(id);
    } catch (err) {
      console.error('Triage failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            Emergency Incident Ingestion & AI Triage
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Citizen SOS Calls, Automated Sensor Alarms & NDRF Rapid Field Dispatch
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Refresh incidents"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-all shadow-md shadow-rose-600/20 shrink-0"
          >
            <Plus className="w-4 h-4" />
            Ingest Emergency Incident
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayIncidents.map((inc) => (
          <div key={inc.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant={inc.severity === 'L3' ? 'danger' : 'warning'}>
                SEVERITY {inc.severity}
              </Badge>
              <span className="text-[11px] font-mono text-slate-400">{inc.id}</span>
            </div>

            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm leading-snug">{inc.title}</h3>

            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">{inc.zone} · {inc.ward}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{inc.reportedAt}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between text-xs">
              <span className="text-slate-600 dark:text-slate-400 font-semibold">AI Triage Priority Score:</span>
              <span className="font-black text-rose-600 dark:text-rose-400 text-sm">{inc.aiPriorityScore} / 100</span>
            </div>

            <button
              onClick={() => handleTriage(inc.id)}
              disabled={triageMutation.isPending}
              className="w-full py-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Dispatch Response Team
            </button>
          </div>
        ))}
      </div>

      {/* Ingest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                Ingest Emergency Incident
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleIngest} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Incident Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Tree fallen blocking arterial road"
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="Detailed situation assessment..."
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Severity Level</label>
                <select
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as any)}
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="L1">L1 - Moderate Alert</option>
                  <option value="L2">L2 - High Priority</option>
                  <option value="L3">L3 - Critical Emergency</option>
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
                  disabled={ingestMutation.isPending}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20"
                >
                  {ingestMutation.isPending ? 'Ingesting...' : 'Ingest & Triage'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
