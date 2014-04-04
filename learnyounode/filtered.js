var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];
console.log(extension);

fs.readdir(directory, function (err, data) {
  console.log(path.extname(data))
  if (path.extname(data) === extension) {
    console.log(data);
  }
});
