// /In the main process.
const { app, BrowserWindow, Menu } = require('electron')
const {shell} = require('electron');
var path = require('path')

let win




function createWindow () {

  // Create the browser window.
  app.on
  win = new BrowserWindow({width: 1200, height: 900, show: false});
  var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
            submenu: [
            // {label:'Adjust Notification Value'},
            // {label:'CoinMarketCap'},
             {
              label:'Send Bug Report',
              click() {
                  win.loadURL("https://github.com/stwentynine/launcher/issues/new")
              }
          },
          {
            label:'View Latest Bug Report',
            click() {
                  win.loadURL("https://github.com/stwentynine/launcher/issues")
            }
        },
        {
          label:'Send Diagnostics',
           click() {
                  win.loadURL(`file://${__dirname}/assets/pages/send.html`)
           }
       },
       // ToDO: Need to work on a back button
    //    {
    //     label:'⬅️  Go Back',
    //      click() {
    //       history.back()
    //      }
    //  },
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

  win.loadURL('https://vpscraft.com/panel/index.php?r=site/login')
 // and load the index.html of the app.
 // win.loadFile('index.html')
 // mainWindow.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', createWindow)
