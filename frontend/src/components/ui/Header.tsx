import React from 'react';
import { Wind, Bell, Sun, Moon, LogOut, ShieldAlert, Sparkles, UserCircle } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { useEocStore } from '../../store/useEocStore';
import { useThemeStore } from '../../store/useThemeStore';
import { Badge } from './Badge';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { user, logout } = useAuthStore();
  const { alertLevel, cycloneName } = useEocStore();
  const { effectiveTheme, toggleTheme } = useThemeStore();

  const getRoleBadgeVariant = (role?: string) => {
    switch (role) {
      case 'Commissioner': return 'purple';
      case 'DisasterHead': return 'danger';
      case 'ZoneSupervisor': return 'warning';
      case 'FieldOfficer': return 'info';
      case 'EOC_Operator': return 'success';
      case 'MaintenanceTechnician': return 'warning';
      case 'Admin': return 'default';
      default: return 'info';
    }
  };

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 transition-colors">
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shadow-sm">
            <Wind className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 dark:text-slate-100 text-sm tracking-tight flex items-center gap-2">
              CycloneGuard GVMC
              <span className="hidden lg:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-semibold border border-blue-200 dark:border-blue-800">
                v1.0 EOC
              </span>
            </h1>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-none">
              Greater Visakhapatnam Municipal Corporation
            </p>
          </div>
        </div>

        {/* Live Situation Badge */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-800">
          <Badge variant={alertLevel === 'EMERGENCY' ? 'danger' : 'warning'}>
            <ShieldAlert className="w-3 h-3 mr-1 inline" />
            {cycloneName} · {alertLevel}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Theme Switcher Button */}
        <button
          onClick={toggleTheme}
          title={`Switch to ${effectiveTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
          className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-all shadow-sm flex items-center justify-center"
        >
          {effectiveTheme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700 hover:-rotate-12 transition-transform" />
          )}
        </button>

        {/* Notification Bell */}
        <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 transition-all relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        </button>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 pl-3 sm:pl-4 border-l border-slate-200 dark:border-slate-800">
          <div className="text-right hidden sm:block">
            <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 flex items-center justify-end gap-1.5">
              {user?.full_name || 'Dr. S. Kumar, IAS'}
            </div>
            <div className="flex items-center justify-end gap-1.5 mt-0.5">
              <Badge variant={getRoleBadgeVariant(user?.role)} size="sm">
                {user?.role || 'Commissioner'}
              </Badge>
            </div>
          </div>

          <button
            onClick={logout}
            title="Sign Out"
            className="p-2.5 rounded-xl text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-slate-800 transition-all"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
