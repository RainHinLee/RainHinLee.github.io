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
			
{
    "姓名":"廖女士",
    "电话":"13541234415",
    "性别":"女",
    "年龄":"8岁",
    "学校":"",
    "年级":"小学二年级",
    "代理":"C"
}
 
 */