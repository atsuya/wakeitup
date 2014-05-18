var http = require('http')
  , url = require('url');

function Heartbeater(selfUrl) {
  this.selfUrl = selfUrl;
}

Heartbeater.prototype.run = function () {
  console.log(this.createRequestOptions());
  var req = http.request(this.createRequestOptions(), function(response) {});
  req.end();
};

Heartbeater.prototype.createRequestOptions = function () {
  var parsed = url.parse(this.selfUrl);
  return { hostname: parsed.hostname, port: parsed.port || 80, path: parsed.path, method: 'GET' };
};

module.exports = Heartbeater;
