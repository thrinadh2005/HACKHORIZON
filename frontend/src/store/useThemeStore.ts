import { create } from 'zustand';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  effectiveTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem('cycloneguard_theme') as Theme;
  if (saved && ['light', 'dark', 'system'].includes(saved)) {
    return saved;
  }
  return 'dark'; // Default to dark for emergency command look
};

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

const applyThemeToDocument = (effectiveTheme: 'light' | 'dark') => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  if (effectiveTheme === 'dark') {
    root.classList.add('dark');
    body?.classList.add('dark');
  } else {
    root.classList.remove('dark');
    body?.classList.remove('dark');
  }
};

const initialTheme = getInitialTheme();
const initialEffective = initialTheme === 'system' ? getSystemTheme() : initialTheme;

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: initialTheme,
  effectiveTheme: initialEffective,
  setTheme: (theme: Theme) => {
    localStorage.setItem('cycloneguard_theme', theme);
    const effectiveTheme = theme === 'system' ? getSystemTheme() : theme;
    applyThemeToDocument(effectiveTheme);
    set({ theme, effectiveTheme });
  },
  toggleTheme: () => {
    const current = get().effectiveTheme;
    const nextTheme: Theme = current === 'dark' ? 'light' : 'dark';
    get().setTheme(nextTheme);
  },
}));

// Apply initial theme on load
if (typeof window !== 'undefined') {
  applyThemeToDocument(initialEffective);
}

// Listen for system theme changes
if (typeof window !== 'undefined' && window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const { theme, setTheme } = useThemeStore.getState();
    if (theme === 'system') {
      setTheme('system');
    }
  });
}
