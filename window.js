var remote = require('remote')
var browserWindow = remote.getCurrentWindow();
console.log('Window loaded')

browserWindow.setBounds({
  width: 500,
  height: 500,
  x: 300,
  y: 300
})

browserWindow.show()
