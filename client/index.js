var fs = require('fs');
const file = './client/index.html';
exports.get = function(req, res, next){
	fs.readFile(file, function(err, data){
		if(err){
			console.log("Cannot read file index.html: "+ err);
			res.send(404);
		}
		else{
			var body = data.toString();
			res.writeHead(200, {
					'Content-Length': Buffer.byteLength(body),
					'Content-Type': 'text/html'
			});
			res.write(body);
			res.end();
		}
	});
	return next();
}