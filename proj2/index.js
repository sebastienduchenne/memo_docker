const mongoose = require('mongoose')

var urlmongo = "mongodb://localhost/db"; 

mongoose.connect(urlmongo);

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
db.once('open', function (){
  console.log("Connexion à la base OK"); 
}); 

var articlesSchema = mongoose.Schema({
  title: String, 
  author: String, 
  content: String,
}); 

var Articles = mongoose.model('articles', articlesSchema);

Articles.find(function(err, res){
  res.forEach(element => console.log(element))
}); 
