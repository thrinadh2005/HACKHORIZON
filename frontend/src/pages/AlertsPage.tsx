import React, { useState } from 'react';
import { Bell, Siren, ShieldAlert, Radio, CheckCircle2, RefreshCw, X } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { useAlerts, useComposeAlert } from '../hooks/useAlerts';

const SAMPLE_ALERTS = [
  { id: 'ALT-901', title: 'Evacuation Advisory — Ward 31 & Coastal Fishing Villages', level: 'EMERGENCY', issuedAt: '08:30 AM', channel: 'SMS, WhatsApp, Siren Network' },
  { id: 'ALT-900', title: 'Port Operations Suspension & Crane Locking Order', level: 'WARNING', issuedAt: '07:15 AM', channel: 'Port Authority Feed' },
  { id: 'ALT-899', title: 'High Surge Wave Alert (3.5m to 4.2m along Rushikonda)', level: 'WATCH', issuedAt: '06:00 AM', channel: 'Public Broadcast' },
];

export const AlertsPage: React.FC = () => {
  const { data: apiAlerts, isLoading, refetch } = useAlerts();
  const composeMutation = useComposeAlert();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [headline, setHeadline] = useState('');
  const [severityLevel, setSeverityLevel] = useState<'WARNING' | 'EMERGENCY' | 'WATCH'>('EMERGENCY');

  const formattedApiAlerts = apiAlerts?.map((a: any) => ({
    id: a.alert_code || a.id || 'ALT-' + Math.floor(Math.random() * 1000),
    title: a.headline || a.title || 'Public Safety Alert',
    level: a.urgency || a.level || 'WARNING',
    issuedAt: a.sent_at ? new Date(a.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
    channel: a.channels ? a.channels.join(', ') : 'Multi-Channel Siren Network',
  })) || [];

  const displayAlerts = formattedApiAlerts.length > 0 ? formattedApiAlerts : SAMPLE_ALERTS;

  const handleCompose = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!headline) return;
    try {
      await composeMutation.mutateAsync({
        headline,
        urgency: severityLevel,
        description: headline,
        channels: ['SMS', 'WhatsApp', 'Public Broadcast'],
      });
      setIsModalOpen(false);
      setHeadline('');
    } catch (err) {
      console.error('Broadcast failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Bell className="w-5 h-5 text-amber-500" />
            Public Advisory & Alert Broadcast Network
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Multi-Channel Citizen Emergency Warning Network (CAP Format)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Refresh alerts"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-rose-600/20 shrink-0"
          >
            <Siren className="w-4 h-4" />
            Broadcast Emergency Warning
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {displayAlerts.map((a) => (
          <div key={a.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-start sm:items-center gap-4">
              <div className={`p-3.5 rounded-2xl shrink-0 ${
                a.level === 'EMERGENCY'
                  ? 'bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
              }`}>
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">{a.title}</span>
                  <Badge variant={a.level === 'EMERGENCY' ? 'danger' : 'warning'}>{a.level}</Badge>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Broadcast Channels: {a.channel} · Issued at {a.issuedAt}</p>
              </div>
            </div>

            <button className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors shrink-0">
              View Log & Delivery
            </button>
          </div>
        ))}
      </div>

      {/* Compose Alert Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Siren className="w-5 h-5 text-rose-500" />
                Compose Broadcast Warning
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCompose} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Warning Headline</label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. Immediate Coastal Evacuation Order Ward 22"
                  required
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Urgency Level</label>
                <select
                  value={severityLevel}
                  onChange={(e) => setSeverityLevel(e.target.value as any)}
                  className="w-full mt-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="WATCH">WATCH</option>
                  <option value="WARNING">WARNING</option>
                  <option value="EMERGENCY">EMERGENCY</option>
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
                  disabled={composeMutation.isPending}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20"
                >
                  {composeMutation.isPending ? 'Broadcasting...' : 'Broadcast Now'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
