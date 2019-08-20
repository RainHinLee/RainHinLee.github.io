
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
	
app.get('/short',function(req,res){
	var file = path.resolve(__dirname,'./short.html');
	res.sendFile(file);
});	

app.get('/mobile',function(req,res){
	var file = path.resolve(__dirname,'./mobile.html');
	res.sendFile(file);
});	

app.get('/mshort',function(req,res){
	var file = path.resolve(__dirname,'./mshort.html');
	res.sendFile(file);
});	

app.get('/editor',function(req,res){
	var file = path.resolve(__dirname,'./editor.html');
	res.sendFile(file);
});	

app.listen(38080);

/* 
			
{
    "姓名":"廖女士",
    "电话":"13541234415",
    "性别":"女",
    "年龄":"8岁",
    "学校":"",
    "年级":"小学二年级",
    "代理":"C"
}

字体： simsun
 
 */