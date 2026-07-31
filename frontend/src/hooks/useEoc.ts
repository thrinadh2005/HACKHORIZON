import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { eocService } from '../api/services';

export const useEocDashboard = () => {
  return useQuery({
    queryKey: ['eoc-dashboard'],
    queryFn: () => eocService.getDashboard(),
    refetchInterval: 15000, // Refetch every 15s for live dashboard
  });
};

export const usePublishSitRep = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => eocService.publishSITREP(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['eoc-dashboard'] });
    },
  });
};

export const useAllocateResource = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => eocService.allocate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['eoc-dashboard'] });
    },
  });
};
