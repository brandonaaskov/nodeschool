// Generated by CoffeeScript 1.7.1
(function() {
  var concat, reverse;

  concat = require('concat-stream');

  reverse = function(input) {
    var reversed;
    reversed = input.toString().split("").reverse().join("");
    return console.log(reversed);
  };

  process.stdin.pipe(concat(reverse));

}).call(this);

//# sourceMappingURL=6-concat.map