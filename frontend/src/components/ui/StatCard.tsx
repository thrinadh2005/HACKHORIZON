import React from 'react';
import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface StatCardProps {
  title: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtext,
  trend,
  trendValue,
  icon: Icon,
  iconColor = 'text-blue-500',
  className,
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          'p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-sm dark:shadow-lg backdrop-blur-md transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md dark:hover:shadow-slate-900/50',
          className
        )
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">{title}</span>
        {Icon && (
          <div className={clsx('p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/50 shadow-xs', iconColor)}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">{value}</span>
        {trendValue && (
          <span
            className={clsx(
              'text-xs font-bold px-2 py-0.5 rounded-md',
              trend === 'up' && 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/40',
              trend === 'down' && 'text-rose-700 dark:text-rose-400 bg-rose-100 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/40',
              trend === 'neutral' && 'text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
            )}
          >
            {trendValue}
          </span>
        )}
      </div>

      {subtext && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">{subtext}</p>}
    </div>
  );
};
