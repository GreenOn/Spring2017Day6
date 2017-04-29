var restify = require('restify');
var mongoose = require('mongoose');
var tasks = require('./routes/tasks');
var client = require('./client');

var server = restify.createServer();
const port = 8080;
const dbserver = 'mongodb://localhost/todo';


mongoose.connect(dbserver);
var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose bit the dust ,LOL..' + msg);
});

db.once('open', function(){
	console.log("Mongoose connection established.");
});

server.get('/', function(req, res,next){
	res.send("Success");
});
server.get('/tasks', tasks.read);
server.get('/client', client.get);
server.post('/tasks/:task', tasks.create);

server.listen(port, function(){
	console.log("%s listeneing on %s ", server.name, port);
})
