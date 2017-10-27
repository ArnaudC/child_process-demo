const electron = require('electron')

const {app, BrowserWindow} = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 200,
        width: 400
    })

    mainWindow.loadURL(`file://${__dirname}/status.html`)    
})

app.on('close', _ => {
    mainWindow = null
})

