'use strict';

// index.js (main process)
// - GUI (renderer process)
// - GUI (renderer process)
// - GUI (renderer process)

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

// メインウィンドウを作成
function createMainWindow() {
    mainWindow = new BrowserWindow({ width: 600, height: 400});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.openDevTools();  // debug用
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

// アプリの初期化が終わった時に呼ばれるイベント
app.on('ready', function() {
    // create window
    createMainWindow();
});

// 全てのウィンドウが閉じられた時の処理
app.on('window-all-closed', function() {
    // Macの場合はウィンドウが閉じられてもアプリは終了しない
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// 閉じたウィンドウを再度表示する処理
app.on('activate', function() {
    if (mainWindow === null) {
        createMainWindow();
    }
});
