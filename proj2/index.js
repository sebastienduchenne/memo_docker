const express = require('express')
const app = express()
var mongoose = require('mongoose'); 
const port = 3000


var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var urlmongo = "mongodb://userfrugal:passwordfrugal@ds151108.mlab.com:51108/articles"; 

mongoose.connect(urlmongo, options);

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

var Piscine = mongoose.model('Articles', articlesSchema);

Piscine.find(function(err, articles){
  if (err){
    res.send(err); 
  }
  res.json(articles); 
}); 

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
*/