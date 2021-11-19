const {app, BrowserWindow,Menu,} = require('electron');
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 330,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    backgroundColor: '#dfe4f7'
  })
  // and load the index.html of the app.
  
  mainWindow.loadFile('index.html');  
  mainWindow.resizable=false
  //mainWindow.webContents.openDevTools()
  return mainWindow;
}


app.on('ready',async function(){
  const mainWindow=await createWindow();console.log(4)
  Menu.setApplicationMenu(null)
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


