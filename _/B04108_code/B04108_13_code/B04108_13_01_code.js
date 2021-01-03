var fs = require('fs');
var contents = fs.readFileSync('/etc/passwd');
console.log(contents);
