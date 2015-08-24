
this.interval = setInterval(function(){
  var screen = require('screen');
  var point = screen.getCursorScreenPoint();
  console.log(point.x, point.y);
}, 10);