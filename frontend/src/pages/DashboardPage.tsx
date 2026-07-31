import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useThemeStore } from '../store/useThemeStore';
import { StatCard } from '../components/ui/StatCard';
import { Badge } from '../components/ui/Badge';
import { StatusIndicator } from '../components/ui/StatusIndicator';
import {
  Wind, AlertTriangle, Building2, Users, CheckCircle, TrendingUp,
  Shield, Wrench, Siren, Radio, MapPin, Cpu, ArrowUpRight, Zap,
  FileText, Activity, AlertCircle, Clock, ShieldCheck, UserCheck, Search, Filter
} from 'lucide-react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const readinessData = [
  { month: 'Feb', score: 72, target: 85 },
  { month: 'Mar', score: 75, target: 85 },
  { month: 'Apr', score: 78, target: 85 },
  { month: 'May', score: 74, target: 85 },
  { month: 'Jun', score: 80, target: 85 },
  { month: 'Jul', score: 88, target: 85 },
];

const zoneData = [
  { zone: 'Zone 1', readiness: 91, assets: 142, alerts: 2 },
  { zone: 'Zone 2', readiness: 74, assets: 98, alerts: 8 },
  { zone: 'Zone 3', readiness: 88, assets: 115, alerts: 3 },
  { zone: 'Zone 4', readiness: 62, assets: 87, alerts: 14 },
  { zone: 'Zone 5', readiness: 95, assets: 203, alerts: 1 },
  { zone: 'Zone 6', readiness: 79, assets: 134, alerts: 6 },
];

import { useEocDashboard } from '../hooks/useEoc';

export const DashboardPage: React.FC = () => {
  const { user } = useAuthStore();
  const { effectiveTheme } = useThemeStore();
  const role = user?.role || 'Commissioner';
  const { data: eocData, isLoading: isEocLoading } = useEocDashboard();

  const isDark = effectiveTheme === 'dark';
  const gridColor = isDark ? '#1e293b' : '#e2e8f0';
  const textColor = isDark ? '#94a3b8' : '#64748b';
  const tooltipBg = isDark ? '#0f172a' : '#ffffff';
  const tooltipBorder = isDark ? '#334155' : '#cbd5e1';


  return (
    <div className="space-y-6">
      {/* ── Dynamic Banner Customized per Role ───────────────────────────── */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-3 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 shrink-0">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-base">
                CYCLONE GULAB-II: Deep Depression Approaching Coast
              </span>
              <Badge variant="warning">ALERT LEVEL 2 — WATCH</Badge>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">
              Targeted Console: <strong className="text-slate-900 dark:text-white font-semibold">{user?.full_name}</strong> ({role}) · Expected Landfall: Visakhapatnam Coast within 36 hours.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-all shadow-md shadow-amber-600/20">
            View Live SitRep #04
          </button>
        </div>
      </div>

      {/* ── Role Specific Views ──────────────────────────────────────────── */}

      {/* 1. COMMISSIONER DASHBOARD VIEW */}
      {role === 'Commissioner' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="City Cyclone Readiness"
              value="88%"
              subtext="Target: 85% · Zone 5 Highest (95%)"
              trend="up"
              trendValue="+5% MoM"
              icon={TrendingUp}
              iconColor="text-emerald-500"
            />
            <StatCard
              title="Wind Telemetry (Kailasagiri)"
              value="88 km/h"
              subtext="Gusting to 105 km/h · Warning Active"
              trend="up"
              trendValue="Storm Level"
              icon={Wind}
              iconColor="text-sky-500"
            />
            <StatCard
              title="Evacuation Shelters"
              value="28 / 32"
              subtext="9,420 Citizens Sheltered (88% Cap)"
              trend="neutral"
              trendValue="High Occupancy"
              icon={Building2}
              iconColor="text-purple-500"
            />
            <StatCard
              title="Response Forces Active"
              value="18 Teams"
              subtext="NDRF (4), SDRF (6), GVMC (8)"
              trend="up"
              trendValue="Deployed"
              icon={Users}
              iconColor="text-amber-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Disaster Preparedness Index Trend</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Monthly Index vs 85% Target Baseline</p>
                </div>
                <Badge variant="success">Target Achieved</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={readinessData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="month" stroke={textColor} />
                    <YAxis stroke={textColor} domain={[50, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Zone Readiness Comparison</h3>
                <Badge variant="info">6 Zones</Badge>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={zoneData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                    <XAxis dataKey="zone" stroke={textColor} tick={{ fontSize: 11 }} />
                    <YAxis stroke={textColor} domain={[0, 100]} />
                    <Tooltip contentStyle={{ backgroundColor: tooltipBg, borderColor: tooltipBorder, borderRadius: '12px' }} />
                    <Bar dataKey="readiness" fill="#38BDF8" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 2. DISASTER HEAD DASHBOARD VIEW */}
      {role === 'DisasterHead' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Active Incidents (L1-L5)"
              value="14 Active"
              subtext="2 L3 Critical · 0 L5 Disasters"
              trend="down"
              trendValue="High Alert"
              icon={AlertTriangle}
              iconColor="text-rose-500"
            />
            <StatCard
              title="Rescue Dispatch Rate"
              value="94.2%"
              subtext="Avg response time: 11 mins"
              trend="up"
              trendValue="Optimal"
              icon={Activity}
              iconColor="text-emerald-500"
            />
            <StatCard
              title="NDRF / SDRF Deployments"
              value="10 Battalions"
              subtext="Beach Rd, Gajuwaka, Rushikonda"
              trend="neutral"
              trendValue="Staged"
              icon={ShieldCheck}
              iconColor="text-purple-500"
            />
            <StatCard
              title="Live Flood Telemetry"
              value="0.45 m"
              subtext="Submersion in Low-lying Wards"
              trend="up"
              trendValue="Rising"
              icon={Wind}
              iconColor="text-sky-500"
            />
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-3">Priority Emergency Ingestion Log</h3>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="danger">L3 CRITICAL</Badge>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">Major Storm Drain Submersion - Gajuwaka Ward 22</span>
                </div>
                <button className="px-3 py-1 rounded-lg bg-rose-600 text-white text-xs font-bold">Dispatch SDRF Boat</button>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="warning">L2 HIGH</Badge>
                  <span className="font-bold text-slate-900 dark:text-slate-100 text-xs">Transformer Sparking & High Voltage Outage - Ward 12</span>
                </div>
                <button className="px-3 py-1 rounded-lg bg-amber-600 text-white text-xs font-bold">Assign Power Crew</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 3. ZONE SUPERVISOR DASHBOARD VIEW */}
      {role === 'ZoneSupervisor' && (
        <>
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-200 text-sm">Zone 4 (Gajuwaka Industrial Belt) Command View</h3>
              <p className="text-xs text-blue-700 dark:text-blue-400 mt-0.5">87 Municipal Assets Registered · 14 Active Ward Reports</p>
            </div>
            <Badge variant="warning">Zone Readiness: 62% (Attention Required)</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Zone 4 Drainage Pumps"
              value="8 / 12 Operational"
              subtext="4 Dewatering Pumps undergoing emergency fuel top-up"
              trend="down"
              trendValue="Action Needed"
              icon={Wrench}
              iconColor="text-rose-500"
            />
            <StatCard
              title="Zone 4 Shelters Occupancy"
              value="1,460 / 1,800"
              subtext="81% Occupied · Gajuwaka High School Camp"
              trend="up"
              trendValue="81% Cap"
              icon={Building2}
              iconColor="text-amber-500"
            />
            <StatCard
              title="Field Teams on Duty"
              value="6 Teams Active"
              subtext="Supervised by Officer A. Reddy & Crew"
              trend="neutral"
              trendValue="Active"
              icon={UserCheck}
              iconColor="text-emerald-500"
            />
          </div>
        </>
      )}

      {/* 4. FIELD OFFICER DASHBOARD VIEW */}
      {role === 'FieldOfficer' && (
        <>
          <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900/50">
            <h3 className="font-bold text-sky-900 dark:text-sky-200 text-sm">Field Officer Command Console — Ward 22 Coastal Belt</h3>
            <p className="text-xs text-sky-700 dark:text-sky-400 mt-0.5 font-medium">GPS Location: 17.6950 N, 83.2100 E · Handheld Telemetry Mode</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs uppercase tracking-wider">Assigned Inspection Tasks</h4>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900 dark:text-slate-100">Coastal Drain Pump #14</span>
                  <Badge variant="danger">Critical Fuel Level</Badge>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Perform fuel level verification & submit photo proof.</p>
                <button className="w-full py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold">Start Inspection Form</button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-xs uppercase tracking-wider">Rapid SOS Field Report</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Encountered an unreported tree fall or waterlogging in your ward?</p>
              <button className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-rose-600/20">
                <AlertCircle className="w-4 h-4" />
                Submit GPS Field Emergency Report
              </button>
            </div>
          </div>
        </>
      )}

      {/* 5. EOC OPERATOR DASHBOARD VIEW */}
      {role === 'EOC_Operator' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Broadcast Channels Active"
              value="4 Channels"
              subtext="SMS Gateway, WhatsApp, Coastal Sirens, FM"
              trend="up"
              trendValue="Online"
              icon={Radio}
              iconColor="text-sky-500"
            />
            <StatCard
              title="Public Alerts Sent Today"
              value="128,400 SMS"
              subtext="98.4% Delivery Success Rate"
              trend="neutral"
              trendValue="Delivered"
              icon={Siren}
              iconColor="text-purple-500"
            />
            <StatCard
              title="Citizen Hotline Queue"
              value="3 Waiting"
              subtext="Toll Free 1800-425-0001 · Avg wait: 4s"
              trend="down"
              trendValue="Optimal"
              icon={Users}
              iconColor="text-emerald-500"
            />
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Emergency Multilingual Advisory Creator</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Compose evacuation messages auto-translated into Telugu & Hindi.</p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Compose Alert Broadcast</button>
          </div>
        </>
      )}

      {/* 6. MAINTENANCE TECHNICIAN DASHBOARD VIEW */}
      {role === 'MaintenanceTechnician' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Open Work Orders"
              value="12 Assigned"
              subtext="4 High Priority · Dewatering & Diesel"
              trend="up"
              trendValue="Pending"
              icon={Wrench}
              iconColor="text-amber-500"
            />
            <StatCard
              title="AI Failure Risk Warning"
              value="2 Assets At Risk"
              subtext="Pump 14 & Generator Alpha require filter replacement"
              trend="down"
              trendValue="Urgent"
              icon={Cpu}
              iconColor="text-rose-500"
            />
            <StatCard
              title="Spare Parts Reserved"
              value="18 Items"
              subtext="Fuel filters, oil pumps, gaskets ready"
              trend="neutral"
              trendValue="In Stock"
              icon={CheckCircle}
              iconColor="text-emerald-500"
            />
          </div>
        </>
      )}

      {/* 7. ADMIN DASHBOARD VIEW */}
      {role === 'Admin' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard
              title="Active User Sessions"
              value="42 Active Users"
              subtext="7 RBAC Roles across 6 Zones"
              trend="neutral"
              trendValue="Secure"
              icon={UserCheck}
              iconColor="text-blue-500"
            />
            <StatCard
              title="MongoDB Atlas Status"
              value="Connected"
              subtext="Cloud Database · 14ms latency"
              trend="up"
              trendValue="Healthy"
              icon={CheckCircle}
              iconColor="text-emerald-500"
            />
            <StatCard
              title="FastAPI Server Load"
              value="1.2% CPU"
              subtext="Uvicorn Workers Running"
              trend="neutral"
              trendValue="Optimal"
              icon={Zap}
              iconColor="text-purple-500"
            />
            <StatCard
              title="Audit Logs Today"
              value="1,482 Events"
              subtext="JWT Tokens & API Requests Logged"
              trend="neutral"
              trendValue="Audited"
              icon={FileText}
              iconColor="text-sky-500"
            />
          </div>
        </>
      )}
    </div>
  );
};
