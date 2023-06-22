import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.junaid.buslinker',
  appName: 'BusLinker',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
