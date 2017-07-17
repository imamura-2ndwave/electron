'use strict';

// index.js (main process)
// - GUI (renderer process)
// - GUI (renderer process)
// - GUI (renderer process)

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

// アプリの初期化が終わった時に呼ばれるイベント
app.on('ready', function() {
    // create window
    mainWindow = new BrowserWindow({ width: 600, height: 400});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.openDevTools();  // debug用
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
