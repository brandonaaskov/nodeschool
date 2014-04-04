concat = require 'concat-stream'

reverse = (input) ->
  reversed = input.toString().split("").reverse().join("")
  console.log reversed

process.stdin
  .pipe concat(reverse)
