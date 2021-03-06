// Generated by CoffeeScript 1.7.1
(function() {
  var fs, http, server, through, write;

  through = require("through");

  http = require("http");

  fs = require("fs");

  write = function(buf) {
    return this.queue(buf.toString().toUpperCase());
  };

  server = http.createServer(function(req, res) {
    if (req.method === 'POST') {
      return req.pipe(through(write)).pipe(res);
    }
  });

  server.listen(parseInt(process.argv[2], 10));

}).call(this);

//# sourceMappingURL=7-http-server.map
