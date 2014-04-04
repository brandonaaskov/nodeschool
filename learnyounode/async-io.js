var fs = require('fs');

var input = process.argv[2];
var total = 0;

fs.readFile(input, function (err, data) {
  if (err) {
    // eat it
    return false;
  }

  var newlines = data.toString().split('\n');
  total += newlines.length - 1;
  console.log(total);
});
