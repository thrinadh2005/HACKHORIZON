import { apiClient } from './client'
import type { 
  User, 
  Asset, 
  Incident, 
  Shelter, 
  TeamMember, 
  Alert, 
  FilterOptions,
  PaginatedResponse 
} from '../types'

// Auth Services
export const authService = {
  async login(email: string, password: string) {
    return apiClient.post<{ access_token: string; user_info: User }>('/auth/login', {
      email,
      password,
    })
  },

  async validateToken() {
    return apiClient.post('/auth/validate-token')
  },

  async keepAlive() {
    return apiClient.post('/auth/session/keep-alive')
  },
}

// Asset Services
export const assetService = {
  async getAssets(filters?: FilterOptions) {
    return apiClient.get<Asset[]>('/assets', filters)
  },

  async getAssetById(id: string) {
    return apiClient.get<Asset>(`/assets/${id}`)
  },

  async getDigitalTwin(id: string) {
    return apiClient.get(`/assets/${id}/digital-twin`)
  },

  async registerAsset(data: any) {
    return apiClient.post('/assets/register', data)
  },

  async updateAsset(id: string, data: any) {
    return apiClient.put(`/assets/${id}`, data)
  },

  async deleteAsset(id: string) {
    return apiClient.delete(`/assets/${id}`)
  },

  async getCategories() {
    return apiClient.get('/assets/categories')
  },
}

// Incident Services
export const incidentService = {
  async getIncidents(filters?: FilterOptions) {
    return apiClient.get<Incident[]>('/incidents', filters)
  },

  async getIncidentById(id: string) {
    return apiClient.get<Incident>(`/incidents/${id}`)
  },

  async ingestIncident(data: any) {
    return apiClient.post('/incidents/ingest', data)
  },

  async updateIncident(id: string, data: any) {
    return apiClient.put(`/incidents/${id}`, data)
  },

  async triageIncident(id: string) {
    return apiClient.post(`/incidents/${id}/triage`)
  },
}

// Shelter Services
export const shelterService = {
  async getOccupancy() {
    return apiClient.get<Shelter[]>('/shelters/occupancy')
  },

  async getShelterById(id: string) {
    return apiClient.get<Shelter>(`/shelters/${id}`)
  },

  async checkIn(data: any) {
    return apiClient.post('/shelters/check-in', data)
  },

  async checkOut(data: any) {
    return apiClient.post('/shelters/check-out', data)
  },

  async getResourceStatus(id: string) {
    return apiClient.get(`/shelters/${id}/resources`)
  },
}

// Team Services
export const teamService = {
  async getTeams() {
    return apiClient.get<TeamMember[]>('/dispatch/teams')
  },

  async getTeamById(id: string) {
    return apiClient.get<TeamMember>(`/dispatch/teams/${id}`)
  },

  async executeDispatch(data: any) {
    return apiClient.post('/dispatch/execute', data)
  },

  async submitTelemetry(data: any) {
    return apiClient.post('/dispatch/telemetry', data)
  },

  async getMissions() {
    return apiClient.get('/dispatch/missions')
  },
}

// Alert Services
export const alertService = {
  async getAlerts() {
    return apiClient.get<Alert[]>('/alerts')
  },

  async composeAlert(data: any) {
    return apiClient.post('/alerts/compose', data)
  },

  async getAlertById(id: string) {
    return apiClient.get<Alert>(`/alerts/${id}`)
  },

  async translateAlert(id: string) {
    return apiClient.post(`/alerts/${id}/translate`)
  },
}

// EOC Services
export const eocService = {
  async getDashboard() {
    return apiClient.get('/eoc/dashboard')
  },

  async publishSITREP(data: any) {
    return apiClient.post('/eoc/sitrep', data)
  },

  async getResources() {
    return apiClient.get('/eoc/resources')
  },

  async allocate(data: any) {
    return apiClient.post('/eoc/allocate', data)
  },
}

// GIS Services
export const gisService = {
  async optimizeRoute(data: any) {
    return apiClient.post('/gis/route/optimize', data)
  },

  async getNearbyAssets(params: any) {
    return apiClient.get('/gis/assets/nearby', params)
  },

  async getIncidentsInZone(params: any) {
    return apiClient.get('/gis/incidents/zone', params)
  },

  async checkGeofence(data: any) {
    return apiClient.post('/gis/geofence/check', data)
  },
}

// AI Services
export const aiService = {
  async predictFailure(params: any) {
    return apiClient.get('/ai/predict-failure', params)
  },

  async triageIncident(data: any) {
    return apiClient.post('/ai/triage-incident', data)
  },

  async detectDefects(data: any) {
    return apiClient.post('/ai/detect-defects', data)
  },

  async getAnalytics() {
    return apiClient.get('/ai/analytics')
  },
}
