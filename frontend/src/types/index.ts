/* ─────────────────────── TYPES ─────────────────────── */

export type Module =
  | 'dashboard' | 'gis' | 'assets' | 'incidents' | 'shelters'
  | 'preparedness' | 'alerts' | 'resources' | 'teams'
  | 'analytics' | 'reports' | 'ai-center' | 'maintenance'
  | 'administration' | 'settings' | 'profile' | 'login'

export type AlertSeverity = 'critical' | 'warning' | 'info' | 'success'
export type AssetStatus = 'operational' | 'maintenance' | 'critical' | 'offline'
export type UserRole = 'Commissioner' | 'Field Officer' | 'Technical Officer' | 'Admin' | 'Zonal Supervisor' | 'Coastal Monitor'
export type UserStatus = 'online' | 'offline' | 'field'

export interface Toast {
  id: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
}

export interface User {
  id: string
  email: string
  full_name: string
  role: UserRole
  zone_id?: string
  ward_id?: string
  department_id?: string
  phone?: string
  status?: UserStatus
  last_active?: string
}

export interface Asset {
  id: string
  name: string
  type: string
  zone: string
  ward: string
  status: AssetStatus
  last_inspection: string
  officer: string
  readiness: number
  category_id?: string
  criticality?: string
  location?: {
    latitude: number
    longitude: number
    address: string
  }
}

export interface Incident {
  id: string
  title: string
  description: string
  severity: AlertSeverity
  zone: string
  time: string
  acknowledged: boolean
  action?: string
  assignee?: string
  category?: string
  location?: {
    latitude: number
    longitude: number
  }
}

export interface Shelter {
  id: string
  name: string
  zone: string
  ward: string
  capacity: number
  current_occupancy: number
  status: AssetStatus
  resources: {
    food: 'sufficient' | 'low' | 'critical'
    water: 'sufficient' | 'low' | 'critical'
    medical: 'sufficient' | 'low' | 'critical'
  }
}

export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  zone: string
  status: UserStatus
  phone: string
  last_active: string
}

export interface Alert {
  id: string
  title: string
  body: string
  severity: AlertSeverity
  time: string
  read: boolean
  zone?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  has_more: boolean
}

export interface FilterOptions {
  zone_id?: string
  ward_id?: string
  category_id?: string
  status?: string
  search?: string
  date_from?: string
  date_to?: string
}

export interface ChartData {
  label: string
  value: number | string
  color?: string
}

export interface MetricCard {
  label: string
  value: string
  sub: string
  trend?: string
  trendUp?: boolean
  positive?: boolean
}
