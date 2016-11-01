var direBonjour = function () {
  console.log("Bonjour !!!");
}

vatr direByeBye = function () {
  console.log("Bye bye !!!");
}

//Il faut exporter les fonctions pour les utiliser ailleurs
exports.direBonjour = direBonjour;
exports.direByeBye = direByeBye;
