const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    frame: false,
    icon:"assets/app_icon.ico",
    webPreferences: {
      /*preload: path.join(__dirname, 'preload.js')*/
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

  // 最小化窗口
    const minimizeButton = document.getElementById('minimize-button')
    minimizeButton.addEventListener('click', () => {
      mainWindow.minimize()
    })
}

app.on('ready', () => {
  createWindow()
  // 隐藏菜单栏
  const { Menu } = require('electron');
  Menu.setApplicationMenu(null);

  
})
