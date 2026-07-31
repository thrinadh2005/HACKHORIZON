import React from 'react';
import { clsx } from 'clsx';

interface StatusIndicatorProps {
  status: 'operational' | 'maintenance' | 'critical' | 'offline' | 'active' | 'resolved';
  label?: string;
  pulse?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  label,
  pulse = true,
}) => {
  const colorMap = {
    operational: 'bg-emerald-500 text-emerald-400',
    active: 'bg-emerald-500 text-emerald-400',
    maintenance: 'bg-amber-500 text-amber-400',
    critical: 'bg-rose-500 text-rose-400',
    offline: 'bg-slate-500 text-slate-400',
    resolved: 'bg-sky-500 text-sky-400',
  };

  const bgPulseMap = {
    operational: 'bg-emerald-400',
    active: 'bg-emerald-400',
    maintenance: 'bg-amber-400',
    critical: 'bg-rose-400',
    offline: 'bg-slate-400',
    resolved: 'bg-sky-400',
  };

  return (
    <div className="inline-flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        {pulse && (
          <span
            className={clsx(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              bgPulseMap[status]
            )}
          />
        )}
        <span className={clsx('relative inline-flex rounded-full h-2.5 w-2.5', colorMap[status].split(' ')[0])} />
      </span>
      {label && <span className={clsx('text-xs font-medium capitalize', colorMap[status].split(' ')[1])}>{label}</span>}
    </div>
  );
};
