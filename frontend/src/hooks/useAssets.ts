import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { assetService } from '../api/services';
import type { FilterOptions } from '../types';

export const useAssets = (filters?: FilterOptions) => {
  return useQuery({
    queryKey: ['assets', filters],
    queryFn: () => assetService.getAssets(filters),
  });
};

export const useAssetCategories = () => {
  return useQuery({
    queryKey: ['asset-categories'],
    queryFn: () => assetService.getCategories(),
  });
};

export const useAssetById = (id: string) => {
  return useQuery({
    queryKey: ['asset', id],
    queryFn: () => assetService.getAssetById(id),
    enabled: !!id,
  });
};

export const useDigitalTwin = (id: string) => {
  return useQuery({
    queryKey: ['digital-twin', id],
    queryFn: () => assetService.getDigitalTwin(id),
    enabled: !!id,
    refetchInterval: 5000,
  });
};

export const useRegisterAsset = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => assetService.registerAsset(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
    },
  });
};

export const useUpdateAsset = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => assetService.updateAsset(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['assets'] });
      queryClient.invalidateQueries({ queryKey: ['asset', variables.id] });
    },
  });
};
