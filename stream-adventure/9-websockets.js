// Generated by CoffeeScript 1.7.1
(function() {
  var stream, ws;

  ws = require('websocket-stream');

  stream = ws('ws://localhost:8000');

  stream.end("hello\n");

}).call(this);

//# sourceMappingURL=9-websockets.map
