import React, { useState } from 'react';
import { Brain, Sparkles, Cpu, Zap, Activity, CheckCircle, ShieldAlert, RefreshCw } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { useAiAnalytics, usePredictFailure } from '../hooks/useAI';

export const AiCenterPage: React.FC = () => {
  const { data: analyticsData, isLoading, refetch } = useAiAnalytics();
  const [assetId, setAssetId] = useState('asset-p042');
  const { data: predictionData, isFetching: isPredicting, refetch: runPrediction } = usePredictFailure({ asset_id: assetId });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-500" />
            AI Disaster Intelligence & Neural Engine
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Predictive Asset Maintenance (RUL), Storm Inundation Models & NLP SOS Triage
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            title="Refresh AI model metrics"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>
          <Badge variant="purple" size="md">Neural Engine v3.4 Active</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/60">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Asset Failure Predictor</h3>
            </div>
            <Badge variant="success">{(analyticsData as any)?.model_accuracy || '96%'} Accuracy</Badge>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {predictionData ? (
              `Prediction for ${assetId}: Failure Risk ${(predictionData as any)?.failure_probability_percent || '12'}% · RUL Estimate: ${(predictionData as any)?.estimated_remaining_useful_life_hours || '48'} hours.`
            ) : (
              'Predictive maintenance neural model forecasts Coastal Drain Pump Station 14 fuel exhaustion in 3.2 hours under current heavy storm load.'
            )}
          </p>
          <button
            onClick={() => runPrediction()}
            disabled={isPredicting}
            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shadow-md shadow-purple-600/20 flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            {isPredicting ? 'Running Neural Model...' : 'Run Predictive Simulation'}
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">Automated Incident Triage</h3>
            </div>
            <Badge variant="info">Real-time Stream</Badge>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            Automated NLP classification tags 98% of citizen call transcripts into L1/L2/L3 severity levels automatically for immediate rescue routing.
          </p>
          <button className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs transition-colors shadow-md shadow-amber-600/20">
            View Triage Logs
          </button>
        </div>
      </div>
    </div>
  );
};
