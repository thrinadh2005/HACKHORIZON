// Service Worker Registration for PWA

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('Service Worker registered with scope:', registration.scope);
      
      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              // New version available
              if (confirm('A new version is available. Reload to update?')) {
                newWorker.postMessage('SKIP_WAITING');
                window.location.reload();
              }
            }
          });
        }
      });
      
      // Periodic cache update (every 30 minutes)
      setInterval(() => {
        if (registration.active) {
          registration.active.postMessage('CACHE_UPDATE');
        }
      }, 30 * 60 * 1000);
      
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return null;
    }
  }
  return null;
};

// Request notification permission
const requestNotificationPermission = async () => {
  if ('Notification' in window) {
    try {
      const permission = await Notification.requestPermission();
      console.log('Notification permission:', permission);
      return permission;
    } catch (error) {
      console.error('Notification permission request failed:', error);
      return 'denied';
    }
  }
  return 'denied';
};

// Check if app is installed
const isAppInstalled = () => {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
};

// Handle beforeinstallprompt event
let deferredPrompt: any = null;

const handleInstallPrompt = () => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button in UI
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          console.log(`Install prompt ${outcome}`);
          deferredPrompt = null;
          installButton.style.display = 'none';
        }
      });
    }
  });
  
  // Handle app install
  window.addEventListener('appinstalled', () => {
    console.log('PWA installed successfully');
    deferredPrompt = null;
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'none';
    }
  });
};

// Initialize PWA
export const initPWA = async () => {
  console.log('Initializing PWA...');
  
  // Register service worker
  await registerServiceWorker();
  
  // Request notification permission
  await requestNotificationPermission();
  
  // Handle install prompt
  handleInstallPrompt();
  
  // Log installation status
  console.log('App installed:', isAppInstalled());
  
  return {
    isInstalled: isAppInstalled(),
    serviceWorkerRegistered: !!navigator.serviceWorker.controller,
    notificationPermission: Notification.permission
  };
};

// Export functions for use in components
export { requestNotificationPermission, isAppInstalled };
