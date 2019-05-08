var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
app.use('/static',express.static('static'));
app.use('/model',express.static('model'));

app.get('/',function(req,res){
	var file = path.resolve(__dirname,'./index.html');
	res.sendFile(file);
});
	
app.listen(38080);

/* 
			


 
 */