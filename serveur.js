var http = require('http');
var url = require("url");

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    if (page == null) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("Error 404, page inexistante");
    }
    else {
      res.writeHead(200, {"Content-Type": "text/html"});
      if (page == '/') {
        res.write('Bienvenue, que puis je pour vous ?')
      }
      else if (page == '/soussol') {
        res.write('Bienvenue dans la cave à vin !')
      }
      else if (page == '/etage/1') {
        res.write('Vous êtes au premier étage')
      }
    }


    res.end();
});
server.listen(8080);
