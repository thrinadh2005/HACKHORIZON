import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { alertService } from '../api/services';

export const useAlerts = () => {
  return useQuery({
    queryKey: ['alerts'],
    queryFn: () => alertService.getAlerts(),
  });
};

export const useComposeAlert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => alertService.composeAlert(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] });
    },
  });
};

export const useTranslateAlert = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => alertService.translateAlert(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] });
    },
  });
};
