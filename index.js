'use strict';

// index.js (main process)
// - GUI (renderer process)
// - GUI (renderer process)
// - GUI (renderer process)

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;

let mainWindow;
let settingsWindow;

let menuTemplate = [{
    label: 'MyApp',
    submenu: [
        { label: 'About', accelerator: 'CmdOrCtrl+A', click: function() { showAboutDialog(); } },
        { type: 'separator' },
        { label: 'Settings', accelerator: 'CmdOrCtrl+,', click: function() { showSettingsWindow(); } },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: function() { app.quit(); } },
    ]
}];

let menu = Menu.buildFromTemplate(menuTemplate);

// アバウトメニューダイアログ
function showAboutDialog() {
    dialog.showMessageBox({
        type: 'info',
        buttons: ['OK'],
        message: 'About This App',
        detail: 'This ap was created by imamura.'
    });
}

// 設定メニューウィンドウ
function showSettingsWindow() {
    settingsWindow = new BrowserWindow({ width: 600, height: 400});
    settingsWindow.loadURL('file://' + __dirname + '/settings.html');

    settingsWindow.webContents.openDevTools();  // debug用
    settingsWindow.show();
    settingsWindow.on('closed', function() {
        settingsWindow = null;
    });
}

// メインウィンドウを作成
function createMainWindow() {
    Menu.setApplicationMenu(menu);
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
