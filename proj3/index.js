const mongoose = require('mongoose')
const express = require('express')
const app = express()


mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)