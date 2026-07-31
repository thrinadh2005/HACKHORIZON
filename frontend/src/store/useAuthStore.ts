import { create } from 'zustand';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'Commissioner' | 'DisasterHead' | 'ZoneSupervisor' | 'FieldOfficer' | 'EOC_Operator' | 'MaintenanceTechnician' | 'Admin';
  department_id?: string;
  assigned_zone_id?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: UserProfile | null;
  login: (userOrToken: any, tokenOrUser: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem('cycloneguard_token'),
  token: localStorage.getItem('cycloneguard_token'),
  user: localStorage.getItem('cycloneguard_user') 
    ? JSON.parse(localStorage.getItem('cycloneguard_user')!) 
    : {
        id: 'usr-admin-01',
        email: 'commissioner@gvmc.gov.in',
        full_name: 'Dr. S. Kumar, IAS',
        role: 'Commissioner',
      },
  login: (userOrToken: any, tokenOrUser: any) => {
    let token: string;
    let user: UserProfile;
    if (typeof userOrToken === 'string') {
      token = userOrToken;
      user = tokenOrUser;
    } else {
      user = userOrToken;
      token = tokenOrUser;
    }
    localStorage.setItem('cycloneguard_token', token);
    localStorage.setItem('cycloneguard_user', JSON.stringify(user));
    set({ isAuthenticated: true, token, user });
  },
  logout: () => {
    localStorage.removeItem('cycloneguard_token');
    localStorage.removeItem('cycloneguard_user');
    set({ isAuthenticated: false, token: null, user: null });
  },
}));
