import { create } from 'zustand';

export type CycloneAlertLevel = 'NORMAL' | 'WATCH' | 'WARNING' | 'EMERGENCY';

interface EocState {
  alertLevel: CycloneAlertLevel;
  cycloneName: string;
  windSpeedKmH: number;
  activeIncidentsCount: number;
  sheltersOpenCount: number;
  setAlertLevel: (level: CycloneAlertLevel) => void;
  updateTelemetry: (wind: number, incidents: number, shelters: number) => void;
}

export const useEocStore = create<EocState>((set) => ({
  alertLevel: 'WATCH',
  cycloneName: 'Cyclone Gulab-II',
  windSpeedKmH: 88,
  activeIncidentsCount: 14,
  sheltersOpenCount: 28,
  setAlertLevel: (alertLevel) => set({ alertLevel }),
  updateTelemetry: (windSpeedKmH, activeIncidentsCount, sheltersOpenCount) =>
    set({ windSpeedKmH, activeIncidentsCount, sheltersOpenCount }),
}));
