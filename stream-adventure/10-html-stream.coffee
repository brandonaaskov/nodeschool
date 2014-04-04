trumpet = require("trumpet")
fs = require("fs")
tr = trumpet()
fs.createReadStream(process.stdin).pipe tr
stream = tr.select(".loud").createStream()