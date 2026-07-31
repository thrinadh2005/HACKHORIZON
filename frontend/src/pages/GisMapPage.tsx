import React, { useState } from 'react';
import { MapPin, Navigation, Layers, Filter, Eye, AlertTriangle, Shield, Radio, Crosshair } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { StatusIndicator } from '../components/ui/StatusIndicator';

interface MapMarker {
  id: string;
  name: string;
  type: 'pump' | 'shelter' | 'generator' | 'incident';
  zone: string;
  lat: number;
  lng: number;
  status: 'operational' | 'critical' | 'maintenance';
}

const SAMPLE_MARKERS: MapMarker[] = [
  { id: 'm1', name: 'Coastal Drain Pump 14', type: 'pump', zone: 'Zone 4', lat: 17.6868, lng: 83.2185, status: 'critical' },
  { id: 'm2', name: 'Gajuwaka Relief Shelter', type: 'shelter', zone: 'Zone 2', lat: 17.6950, lng: 83.2100, status: 'operational' },
  { id: 'm3', name: 'Port Generator Alpha', type: 'generator', zone: 'Zone 1', lat: 17.7010, lng: 83.2250, status: 'operational' },
  { id: 'm4', name: 'Tree Outage Block - Beach Rd', type: 'incident', zone: 'Zone 5', lat: 17.7120, lng: 83.3200, status: 'critical' },
];

export const GisMapPage: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(SAMPLE_MARKERS[0]);
  const [filterType, setFilterType] = useState<string>('all');

  const filteredMarkers = SAMPLE_MARKERS.filter(
    (m) => filterType === 'all' || m.type === filterType
  );

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col gap-4">
      {/* Control Bar */}
      <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 dark:text-slate-100 text-sm">GVMC Spatial Command GIS Grid</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Visakhapatnam Metropolitan Spatial Layers · GR84 WGS Coordinate Grid</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
            {['all', 'pump', 'shelter', 'generator', 'incident'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition-all ${
                  filterType === t
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Split Screen */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-0">
        {/* Interactive Map View simulation */}
        <div className="lg:col-span-3 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 relative overflow-hidden flex flex-col justify-center items-center p-8 shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

          {/* Map Grid Watermark */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <Crosshair className="w-3.5 h-3.5 text-blue-500" />
            17.6868° N, 83.2185° E · Visakhapatnam Bay Sector
          </div>

          {/* Markers */}
          <div className="relative w-full h-full flex items-center justify-center">
            {filteredMarkers.map((m, idx) => (
              <div
                key={m.id}
                onClick={() => setSelectedMarker(m)}
                style={{ top: `${25 + idx * 18}%`, left: `${20 + idx * 20}%` }}
                className={`absolute cursor-pointer transition-all hover:scale-125 p-2 rounded-full border shadow-xl flex items-center gap-2 ${
                  m.status === 'critical'
                    ? 'bg-rose-100 dark:bg-rose-950/90 border-rose-500 text-rose-700 dark:text-rose-300 font-bold'
                    : 'bg-blue-100 dark:bg-blue-950/90 border-blue-500 text-blue-700 dark:text-blue-300 font-bold'
                }`}
              >
                <MapPin className="w-5 h-5 animate-bounce" />
                <span className="text-xs font-bold pr-1">{m.name}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1 shadow-md">
            <div className="font-bold text-slate-900 dark:text-slate-100">Live GIS Spatial Layers:</div>
            <div>• Bay Wave Height Buoy Telemetry: Active (3.8m)</div>
            <div>• GVMC Storm Drain Sensors: 142 Stations Online</div>
          </div>
        </div>

        {/* Sidebar Info Panel */}
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-4 overflow-y-auto shadow-sm">
          {selectedMarker ? (
            <div>
              <div className="flex items-center justify-between">
                <Badge variant={selectedMarker.status === 'critical' ? 'danger' : 'success'}>
                  {selectedMarker.status.toUpperCase()}
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">{selectedMarker.zone}</span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg mt-2">{selectedMarker.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">Coordinates: {selectedMarker.lat}, {selectedMarker.lng}</p>

              <div className="mt-6 space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Category Type</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100 capitalize">{selectedMarker.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Telemetry Status</span>
                    <StatusIndicator status={selectedMarker.status} label={selectedMarker.status} />
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-md shadow-blue-600/20">
                  Dispatch Field Officer to Location
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-10">Select a marker on the map to inspect telemetry details.</p>
          )}
        </div>
      </div>
    </div>
  );
};
