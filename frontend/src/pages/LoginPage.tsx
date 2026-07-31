import React, { useState, useEffect } from 'react';
import { Wind, Lock, Mail, ArrowRight, ChevronDown, Shield, Sun, Moon } from 'lucide-react';
import { useAuthStore, UserProfile } from '../store/useAuthStore';
import { useThemeStore } from '../store/useThemeStore';
import { api } from '../api';

// ── All 7 RBAC demo roles ─────────────────────────────────────────────────────
const DEMO_ACCOUNTS = [
  {
    role: 'Commissioner',
    email: 'commissioner@gvmc.gov.in',
    password: 'password123',
    name: 'Dr. S. Kumar, IAS',
    badge: 'bg-purple-600',
    description: 'Full platform access · Executive EOC command',
  },
  {
    role: 'DisasterHead',
    email: 'disasterhead@gvmc.gov.in',
    password: 'disaster123',
    name: 'Sri R. Naidu',
    badge: 'bg-rose-600',
    description: 'EOC Incident Command & Force Dispatch',
  },
  {
    role: 'ZoneSupervisor',
    email: 'zonesupervisor@gvmc.gov.in',
    password: 'zone123',
    name: 'Sri P. Rao',
    badge: 'bg-amber-600',
    description: 'Zone 4 Gajuwaka Supervision & Pumps',
  },
  {
    role: 'FieldOfficer',
    email: 'fieldofficer@gvmc.gov.in',
    password: 'field123',
    name: 'Sri A. Reddy',
    badge: 'bg-sky-600',
    description: 'Ward 22 Coastal Belt Field Operations',
  },
  {
    role: 'EOC_Operator',
    email: 'eoc@gvmc.gov.in',
    password: 'eoc123',
    name: 'Sri M. Das',
    badge: 'bg-teal-600',
    description: 'Public Alerts & CAP Communication Console',
  },
  {
    role: 'MaintenanceTechnician',
    email: 'technician@gvmc.gov.in',
    password: 'tech123',
    name: 'Sri V. Kumar',
    badge: 'bg-amber-600',
    description: 'Work orders & Asset Predictive Overhaul',
  },
  {
    role: 'Admin',
    email: 'admin@gvmc.gov.in',
    password: 'admin123',
    name: 'Sri L. Rao',
    badge: 'bg-slate-600',
    description: 'System Administration & RBAC Governance',
  },
];

const BACKEND_URL = import.meta.env.VITE_API_BASE_URL?.replace('/api/v1', '') || 'http://localhost:8000';

export const LoginPage: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('commissioner@gvmc.gov.in');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [showDemoPanel, setShowDemoPanel] = useState(true);

  const login = useAuthStore((state) => state.login);
  const { effectiveTheme, toggleTheme } = useThemeStore();

  // ── Handle Google OAuth redirect-back token ─────────────────────────────────
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const userEmail = params.get('email');
    const role = params.get('role');
    const name = params.get('name');

    if (token && userEmail && role) {
      const user: UserProfile = {
        id: 'google-' + userEmail,
        email: userEmail,
        full_name: name || userEmail,
        role: role as UserProfile['role'],
      };
      login(token, user);
      // Clean URL
      window.history.replaceState({}, '', '/');
      onLoginSuccess();
    }
  }, []);

  // ── Prefill demo account ────────────────────────────────────────────────────
  const selectDemo = (account: typeof DEMO_ACCOUNTS[0]) => {
    setEmail(account.email);
    setPassword(account.password);
    setError('');
  };

  // ── Email / Password login ──────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await api.login({ email, password }).catch(() => {
        // Offline fallback: match demo accounts locally
        const demo = DEMO_ACCOUNTS.find((a) => a.email === email && a.password === password);
        if (demo) {
          return {
            access_token: 'offline-mock-' + Date.now(),
            user_info: {
              id: 'usr-' + demo.role.toLowerCase(),
              email: demo.email,
              full_name: demo.name,
              role: demo.role as UserProfile['role'],
            },
          };
        }
        throw new Error('Invalid credentials');
      });

      login(data.access_token, data.user_info);
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message || 'Login failed. Check credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Google OAuth ────────────────────────────────────────────────────────────
  const handleGoogleLogin = () => {
    setGoogleLoading(true);
    window.location.href = `${BACKEND_URL}/api/v1/auth/google`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden transition-colors">
      {/* Theme Toggle in Top Right */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
        title="Toggle Theme"
      >
        {effectiveTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
      </button>

      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-md space-y-4 my-8">
        {/* Logo & Title */}
        <div className="text-center space-y-2 mb-4">
          <div className="inline-flex p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shadow-md">
            <Wind className="w-8 h-8 animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">CycloneGuard GVMC</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Enterprise Disaster Management · Visakhapatnam Municipal Corporation</p>
          </div>
        </div>

        {/* Main Login Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-xs font-semibold text-rose-700 dark:text-rose-300 text-center">
              {error}
            </div>
          )}

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading}
            className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-3 transition-all shadow-xs disabled:opacity-60"
          >
            <svg className="w-4 h-4" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            {googleLoading ? 'Redirecting to Google...' : 'Continue with Google Single Sign-On'}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
            <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">or sign in with role credentials</span>
            <div className="flex-1 border-t border-slate-200 dark:border-slate-800" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Official Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-medium transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-blue-500 font-medium transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 disabled:opacity-60"
            >
              {loading ? 'Authenticating Role Access...' : 'Access EOC Platform Console'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Demo Accounts Panel */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md">
          <button
            onClick={() => setShowDemoPanel(!showDemoPanel)}
            className="w-full flex items-center justify-between px-4 py-3 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>Select Demo Role Account (All 7 RBAC Roles)</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showDemoPanel ? 'rotate-180' : ''}`} />
          </button>

          {showDemoPanel && (
            <div className="grid grid-cols-1 gap-1.5 p-2.5 border-t border-slate-100 dark:border-slate-800">
              {DEMO_ACCOUNTS.map((acc) => (
                <button
                  key={acc.email}
                  onClick={() => selectDemo(acc)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-left group ${
                    email === acc.email
                      ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-6 h-6 rounded-lg text-[11px] font-bold text-white shrink-0 ${acc.badge}`}>
                    {acc.role.charAt(0)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">{acc.role}</span>
                      <span className="text-[10px] font-mono text-slate-400">{acc.password}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-medium">{acc.description}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
