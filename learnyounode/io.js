var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var bufferString = buffer.toString();
var newlines = buffer.toString().split('\n');
console.log(newlines.length - 1);
