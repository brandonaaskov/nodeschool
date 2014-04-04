through = require("through")
http = require("http")
fs = require("fs")

write = (buf) -> @queue buf.toString().toUpperCase()

server = http.createServer (req, res) ->
  if req.method is 'POST'
    req.pipe(through(write)).pipe(res)

server.listen parseInt(process.argv[2], 10)