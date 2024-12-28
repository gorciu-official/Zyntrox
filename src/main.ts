import { app, BrowserWindow, session } from 'electron';
import * as path from 'path';

let current_bw : BrowserWindow = null;

function makeElectronWindow() {
    if (current_bw) return false;
    current_bw = new BrowserWindow({
        minWidth: 1500,
        minHeight: 750,
        webPreferences: {
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    current_bw.loadURL('https://zyntra.xyz/home');
    current_bw.menuBarVisible = true;
}

app.on('activate', makeElectronWindow); // macOS shit
app.whenReady().then(() => {
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        callback(false);
    });

    makeElectronWindow();
});