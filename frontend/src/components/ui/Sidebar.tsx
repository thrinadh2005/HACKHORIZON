import React from 'react';
import {
  LayoutDashboard, Map, Package, AlertTriangle, Building2,
  Bell, Brain, Wrench, Shield, Compass, UserCheck
} from 'lucide-react';
import { clsx } from 'clsx';
import { useAuthStore } from '../../store/useAuthStore';

export type NavModule =
  | 'dashboard' | 'gis' | 'assets' | 'incidents' | 'shelters'
  | 'alerts' | 'ai-center' | 'maintenance' | 'administration';

interface SidebarProps {
  activeModule: NavModule;
  onSelectModule: (module: NavModule) => void;
}

interface NavItem {
  id: NavModule;
  label: string;
  icon: React.ElementType;
  badge?: string;
  roles?: string[]; // Allowed roles (if omitted, available to all)
}

const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'EOC Overview', icon: LayoutDashboard },
  { id: 'gis', label: 'GIS Spatial Command', icon: Map },
  { id: 'assets', label: 'Asset Digital Twins', icon: Package, badge: 'Live' },
  { id: 'incidents', label: 'Incident Triage & SOS', icon: AlertTriangle, badge: 'AI' },
  { id: 'shelters', label: 'Relief Shelters & Food', icon: Building2 },
  { id: 'alerts', label: 'Public Alert Broadcast', icon: Bell },
  { id: 'ai-center', label: 'AI Intelligence Center', icon: Brain, badge: 'v3.4' },
  { id: 'maintenance', label: 'Work Orders & Field', icon: Wrench },
  { id: 'administration', label: 'System Administration', icon: Shield, roles: ['Admin', 'Commissioner'] },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeModule, onSelectModule }) => {
  const { user } = useAuthStore();
  const role = user?.role || 'Commissioner';

  // Filter items based on role, but keep main items visible
  const navItems = NAV_ITEMS.filter((item) => !item.roles || item.roles.includes(role));

  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-4 flex flex-col justify-between shrink-0 backdrop-blur-md transition-colors">
      <div className="space-y-1.5">
        <div className="px-3 py-2 text-[10px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase flex items-center justify-between">
          <span>Command Modules</span>
          <span className="font-mono text-[9px] text-blue-600 dark:text-blue-400 font-semibold">{role}</span>
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className={clsx(
                'w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left group',
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              )}
            >
              <div className="flex items-center gap-3">
                <Icon className={clsx('w-4 h-4 transition-transform group-hover:scale-110', isActive ? 'text-white' : 'text-slate-400 dark:text-slate-500 group-hover:text-blue-500')} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={clsx(
                    'text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono',
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60'
                  )}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Role Context & Emergency Helpline Footer */}
      <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800">
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-[11px]">
            <Compass className="w-3.5 h-3.5 text-blue-500" />
            <span>Assigned Jurisdiction</span>
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-medium">
            {role === 'ZoneSupervisor' ? 'Zone 4 (Gajuwaka Industrial)' :
             role === 'FieldOfficer' ? 'Ward 22 (Coastal Belt)' :
             role === 'MaintenanceTechnician' ? 'All Municipal Mechanical Assets' :
             'GVMC All 6 Zones (Visakhapatnam HQ)'}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-[11px] text-blue-800 dark:text-blue-300 font-semibold flex items-center justify-between">
          <span>EOC Helpline</span>
          <span className="font-mono font-bold">1800-425-0001</span>
        </div>
      </div>
    </aside>
  );
};
