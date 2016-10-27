var http = require('http');
var url = require("url");
var querystring = require("querystring");


var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    res.writeHead(200, {"Content-Type": "text/html"});

    if ('prenom' in params && 'nom' in params) {
      res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    }
    else {
      res.write('Vous devez bien avoir un prénom et un nom ?')
    }

// NOTE: Tests des redirections de pages
/*
    if (page == '/') {
      res.write('Bienvenue, que puis je pour vous ?')
    }
    else if (page == '/soussol') {
      res.write('Bienvenue dans la cave à vin !')
    }
    else if (page == '/etage/1') {
      res.write('Vous êtes au premier étage')
    }
    else {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.write("Error 404, page inexistante");
    }*/
    
    res.end();
});
server.listen(8080);
