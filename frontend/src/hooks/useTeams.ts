import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamService } from '../api/services';

export const useTeams = () => {
  return useQuery({
    queryKey: ['dispatch-teams'],
    queryFn: () => teamService.getTeams(),
  });
};

export const useMissions = () => {
  return useQuery({
    queryKey: ['dispatch-missions'],
    queryFn: () => teamService.getMissions(),
  });
};

export const useExecuteDispatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => teamService.executeDispatch(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dispatch-teams'] });
      queryClient.invalidateQueries({ queryKey: ['dispatch-missions'] });
    },
  });
};
