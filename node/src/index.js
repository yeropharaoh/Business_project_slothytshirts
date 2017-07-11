var express = require('express');
var app = express();

app.use('/', express.static('../public')); // Current directory is root

app.listen(3000, function(req,res){
	console.log('Listening on port 3000');
});