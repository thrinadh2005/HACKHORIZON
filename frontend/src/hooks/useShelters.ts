import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { shelterService } from '../api/services';

export const useShelters = () => {
  return useQuery({
    queryKey: ['shelters'],
    queryFn: () => shelterService.getOccupancy(),
  });
};

export const useShelterById = (id: string) => {
  return useQuery({
    queryKey: ['shelter', id],
    queryFn: () => shelterService.getShelterById(id),
    enabled: !!id,
  });
};

export const useShelterCheckIn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => shelterService.checkIn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shelters'] });
    },
  });
};

export const useShelterCheckOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => shelterService.checkOut(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['shelters'] });
    },
  });
};
