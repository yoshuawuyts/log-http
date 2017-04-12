# log-http [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Log HTTP requests. Works well with [pino][pino] and [pino-colada][pino-colada].

## Usage
```js
var logHttp = require('log-http')
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
```

## Output
```txt
{"pid":42140,"hostname":"anons-MacBook.local","level":30,"time":1492003344167,"url":"/","method":"GET","message":"request","contentLength":89,"v":1}
{"pid":42140,"hostname":"anons-MacBook.local","level":30,"time":1492003344170,"url":"/","method":"GET","statusCode":200,"message":"response","elapsed":4,"contentLength":119,"v":1}
{"pid":42140,"hostname":"anons-MacBook.local","level":30,"time":1492003352734,"url":"/","method":"GET","message":"request","contentLength":89,"v":1}
{"pid":42140,"hostname":"anons-MacBook.local","level":30,"time":1492003352734,"url":"/","method":"GET","statusCode":200,"message":"response","elapsed":1,"contentLength":119,"v":1}
```

## API
### stats = logHttp(server)
Create a new stats emitter from a server instance.

### stats.on('data', function(level, data))
Listen to a new incoming or outgoing request. Logs out the expected log level
and corresponding data. Should be passed to a logger.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/log-http.svg?style=flat-square
[3]: https://npmjs.org/package/log-http
[4]: https://img.shields.io/travis/yoshuawuyts/log-http/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/log-http
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/log-http/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/log-http
[8]: http://img.shields.io/npm/dm/log-http.svg?style=flat-square
[9]: https://npmjs.org/package/log-http
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
[pino-colada]: https://github.com/lrlna/pino-colada
[pino]: https://github.com/pinojs/pino
