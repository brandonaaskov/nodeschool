request = require 'request'
stream = request.post 'http://localhost:8000'

process.stdin.pipe(stream).pipe(process.stdout)