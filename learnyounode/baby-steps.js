var _ = require('lodash');

var onlyNumbers = function (arg) {
  var num = parseInt(arg, 10);
  return !_.isNaN(num);
};

var sum = function (sum, num) {
  sum = parseInt(sum, 10);
  num = parseInt(num, 10);

  if(_.isNaN(sum) || _.isNaN(num)) return false;

  return sum + num;
};

var sum = _(process.argv).filter(onlyNumbers).reduce(sum);

console.log(sum);