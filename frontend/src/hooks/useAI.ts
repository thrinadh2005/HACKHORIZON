import { useQuery, useMutation } from '@tanstack/react-query';
import { aiService } from '../api/services';

export const usePredictFailure = (params?: any) => {
  return useQuery({
    queryKey: ['ai-predict-failure', params],
    queryFn: () => aiService.predictFailure(params),
  });
};

export const useAiAnalytics = () => {
  return useQuery({
    queryKey: ['ai-analytics'],
    queryFn: () => aiService.getAnalytics(),
  });
};

export const useDetectDefects = () => {
  return useMutation({
    mutationFn: (data: any) => aiService.detectDefects(data),
  });
};

export const useAiTriage = () => {
  return useMutation({
    mutationFn: (data: any) => aiService.triageIncident(data),
  });
};
