var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vous êtes à l\'accueil')
});

//gestion des routes dynamiques
app.get('/etage/:etagenum/chambre', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
});

//compter avec une boucle
app.get('/compter/:nombre', function(req, res) {
  var noms = ['Robert', 'Jacques', 'David'];
  res.render('page.ejs', {compteur: req.params.nombre, noms: noms})
});

//gestion des erreurs 404 avec express
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.send(404, 'Page introuvable')
});

app.listen(8080);
