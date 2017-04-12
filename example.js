var logHttp = require('./')
var http = require('http')
var pino = require('pino')

var log = pino('http')

var server = http.createServer(function (req, res) {
  res.end('hello filthy planet')
})

var stats = logHttp(server)
stats.on('data', function (level, data) {
  log[level](data)
})

server.listen(8080)
