// In the main process.
const { app, BrowserWindow, Menu } = require('electron')
const {shell} = require('electron');
var path = require('path')

let win
let child


function createWindow () {

  // Create the browser window.
  win = new BrowserWindow({width: 1200, height: 900, show: false});
  var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
            submenu: [
            // {label:'Adjust Notification Value'},
            // {label:'CoinMarketCap'},
             {
                label:'Send Diagnostics',
                 click() {
         win.loadURL(`file://${__dirname}/assets/pages/send.html`)
                 }
             },
            {
                label:'Exit',
                click() {
                    app.quit()
                }
            }
        ]
    }
  ])

Menu.setApplicationMenu(menu);
       win = new BrowserWindow({titleBarStyle: 'hidden',
       width: 1200,
       height: 900,
       minWidth: 1200,
       minHeight: 900,
      //  backgroundColor: '#131313',
       show: true,
    // ADD CUSTOM ICON BELOW (see https://gist.github.com/Mtechnik/24fbc139cb3742aedfa5f362eb83c4db)
       icon: path.join(__dirname, 'assets/icons/win/favicon.ico')
   })

    // and load the index.html of the app.
    // Load a remote URL

  win.loadURL('https://vpscraft.com/panel/index.php?r=server/view&id=8649')
 // and load the index.html of the app.
 // win.loadFile('index.html')
 // mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow)
