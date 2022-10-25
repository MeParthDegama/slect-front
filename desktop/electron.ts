import { app, BrowserWindow } from "electron"
import * as path from "path"

let mainWindow: Electron.BrowserWindow | null;
let dev = true;

function createWindow() {
    mainWindow = new BrowserWindow({
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        },
        width: 800,
        frame: true,
        x: 150,
        y: 5,
    })

    mainWindow.removeMenu()

    if (dev) {
        mainWindow.loadURL("http://localhost:3000/")
    } else {
        mainWindow.loadFile(path.join(__dirname, "../build/index.html"))
    }



    mainWindow.webContents.openDevTools();

    mainWindow.on("closed", () => {
        mainWindow = null
    })

}

app.on("ready", createWindow)

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
})

