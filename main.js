const { app, BrowserWindow } = require('electron');
let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 400,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');
});
