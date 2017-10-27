const electron = require('electron')

const {app, BrowserWindow} = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        heigth: 400,
        width: 400
    })
})

app.on('close', _ => {
    mainWindow = null
})

