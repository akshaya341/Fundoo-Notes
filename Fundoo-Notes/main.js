//const { app, BrowserWindow } = require('electron')
var { app, BrowserWindow, ipcMain } = require('electron');
var url = require('url');
var path = require('path');
function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  //win.loadFile('index.html')
  win.webContents.openDevTools();
  win.loadURL(`file://${__dirname}/dist/Fundoo-Notes/index.html`);
  //win.loadURL('http://localhost:4200');
  /*
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/Fundoo-Notes/index.html'),
    protocol: 'file:',
    slashes: true
  }));
  */
}

app.on('ready', createWindow)