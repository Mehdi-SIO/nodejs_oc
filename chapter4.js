var http = require("http");

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});

//event on server closing, on écoute l'évènement close
server.on('close', function() {
  console.log('Bye bye');
})

server.listen(8080); //Démarre le server

server.close(); //Arrête le server et déclenche l'évènement close
