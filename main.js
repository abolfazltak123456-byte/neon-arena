const { app, BrowserWindow } = require('electron');

// آدرس آنلاین بازی — اگر اسم جنریتور را در Perchance عوض کردی، این خط را هم عوض کن
const GAME_URL = 'https://perchance.org/minimal';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true,
    backgroundColor: '#070a16',
    icon: __dirname + '/icon-256.png',
    webPreferences: { contextIsolation: true }
  });
  win.loadURL(GAME_URL);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
