const redis = require("redis");

const client = redis.createClient({
  port: 6379, 
  host: 'redis'
});

client.on("error", function(error) {
  console.error(error);
});

client.on('connect', function() {
  console.log('connected');
});
 
client.set("key1", "titi", redis.print);
client.set("key2", "toto", redis.print);
client.get("key1", redis.print);

client.set('framework', 'AngularJS', function(err, reply) {
  console.log(reply);
});

client.get('framework', function(err, reply) {
  console.log(reply);
});