import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, Module, Toast } from '../types'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

interface AppState {
  currentModule: Module
  sidebarCollapsed: boolean
  theme: 'light' | 'dark'
  toasts: Toast[]
  setCurrentModule: (module: Module) => void
  toggleSidebar: () => void
  setTheme: (theme: 'light' | 'dark') => void
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      updateUser: (userData) => set((state) => ({ 
        user: state.user ? { ...state.user, ...userData } : null 
      })),
    }),
    {
      name: 'cycloneguard-auth',
    }
  )
)

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentModule: 'dashboard',
      sidebarCollapsed: false,
      theme: 'dark',
      toasts: [],
      setCurrentModule: (module) => set({ currentModule: module }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setTheme: (theme) => set({ theme }),
      addToast: (toast) => set((state) => ({
        toasts: [...state.toasts, { ...toast, id: Date.now().toString() }]
      })),
      removeToast: (id) => set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id)
      })),
    }),
    {
      name: 'cycloneguard-app',
    }
  )
)
