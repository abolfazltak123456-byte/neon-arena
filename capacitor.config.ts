import type { CapacitorConfig } from '@capacitor/cli';

// آدرس آنلاین بازی — اگر اسم جنریتور را در Perchance عوض کردی، این خط را هم عوض کن
const GAME_URL = 'https://perchance.org/minimal';

const config: CapacitorConfig = {
  appId: 'com.arenaneon.game',
  appName: 'آرنای نئون',
  webDir: 'www',
  server: {
    url: GAME_URL,
    cleartext: false
  },
  android: {
    allowMixedContent: false
  }
};

export default config;
