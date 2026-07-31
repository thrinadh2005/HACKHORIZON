import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { incidentService } from '../api/services';
import type { FilterOptions } from '../types';

export const useIncidents = (filters?: FilterOptions) => {
  return useQuery({
    queryKey: ['incidents', filters],
    queryFn: () => incidentService.getIncidents(filters),
  });
};

export const useIncidentById = (id: string) => {
  return useQuery({
    queryKey: ['incident', id],
    queryFn: () => incidentService.getIncidentById(id),
    enabled: !!id,
  });
};

export const useIngestIncident = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => incidentService.ingestIncident(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['incidents'] });
    },
  });
};

export const useTriageIncident = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => incidentService.triageIncident(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['incidents'] });
      queryClient.invalidateQueries({ queryKey: ['incident', id] });
    },
  });
};
