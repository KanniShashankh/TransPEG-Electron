const { app, BrowserWindow, ipcMain } = require("electron");
const { join } = require("path");
const ipc = ipcMain;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 700,
    height: 700,
    darkTheme: true,
    center: true,
    fullscreenable: false,
    maximizable: false,
    maxHeight: 700,
    maxWidth: 700,
    webPreferences: {
      nodeIntegration: true,
      preload: join(__dirname, "./src/renderFile.cjs"),
    },
  });
  win.loadFile("./src/index.html");
  win.webContents.openDevTools();
};

ipcMain.on("form-submission", function (event, firstname) {
  console.log("this is the firstname from the form ->", firstname);
});

app.whenReady().then(() => {
  createWindow();
});
