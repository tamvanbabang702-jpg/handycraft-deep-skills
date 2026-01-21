import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.9c6f5b2b20764f469eec40bdef1735f4',
  appName: 'HandyCraft',
  webDir: 'dist',
  server: {
    // For development: connects to Lovable preview for hot reload
    // Comment out this section for production builds
    url: 'https://9c6f5b2b-2076-4f46-9eec-40bdef1735f4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    backgroundColor: '#000000',
    allowMixedContent: true
  },
  ios: {
    backgroundColor: '#000000',
    contentInset: 'automatic'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#000000',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#000000'
    }
  }
};

export default config;
