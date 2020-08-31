const mongoose = require('mongoose')

let url = 'mongodb://0.0.0.0:27017/dbname';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'Erreur lors de la connexion'));

db.once('open', function (){
  console.log("Connexion à la base OK"); 
});

console.log("toto"); 

/*
var articlesSchema = mongoose.Schema({
  title: String, 
  author: String, 
  content: String,
}); 

var Articles = mongoose.model('articles', articlesSchema);

Articles.find(function(err, res){
  console.log("dfsdgh"); 
  res.forEach(element => console.log(element))
});

mongoose.connection.close();
*/
/*

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
*/