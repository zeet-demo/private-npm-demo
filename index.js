const http = require('http');
const private = require('@zeet-demo/private-npm')

const message = `@zeet-demo/private-npm: ${private}`

console.log(message)

http.createServer(function (req, res) {
  res.write(message);
  res.end();
}).listen(2337);
