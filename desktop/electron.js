"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var mainWindow;
var dev = true;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 800,
        frame: true,
        x: 150,
        y: 5
    });
    mainWindow.removeMenu();
    if (dev) {
        mainWindow.loadURL("http://localhost:3000/");
    }
    else {
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
    }
    mainWindow.webContents.openDevTools();
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
