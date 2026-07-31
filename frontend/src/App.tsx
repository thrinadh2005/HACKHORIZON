import React, { useState } from 'react';
import { useAuthStore } from './store/useAuthStore';
import { useThemeStore } from './store/useThemeStore';
import { Header } from './components/ui/Header';
import { Sidebar, NavModule } from './components/ui/Sidebar';
import { DashboardPage } from './pages/DashboardPage';
import { GisMapPage } from './pages/GisMapPage';
import { AssetsPage } from './pages/AssetsPage';
import { IncidentsPage } from './pages/IncidentsPage';
import { SheltersPage } from './pages/SheltersPage';
import { AlertsPage } from './pages/AlertsPage';
import { AiCenterPage } from './pages/AiCenterPage';
import { MaintenancePage } from './pages/MaintenancePage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';

export default function App() {
  const { isAuthenticated } = useAuthStore();
  const { effectiveTheme } = useThemeStore();
  const [activeModule, setActiveModule] = useState<NavModule>('dashboard');

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={() => setActiveModule('dashboard')} />;
  }

  const renderModuleContent = () => {
    switch (activeModule) {
      case 'dashboard':
        return <DashboardPage />;
      case 'gis':
        return <GisMapPage />;
      case 'assets':
        return <AssetsPage />;
      case 'incidents':
        return <IncidentsPage />;
      case 'shelters':
        return <SheltersPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'ai-center':
        return <AiCenterPage />;
      case 'maintenance':
        return <MaintenancePage />;
      case 'administration':
        return <AdminPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-200">
      <Header />

      <div className="flex-1 flex overflow-hidden">
        <Sidebar activeModule={activeModule} onSelectModule={setActiveModule} />

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950 transition-colors">
          {renderModuleContent()}
        </main>
      </div>
    </div>
  );
}
