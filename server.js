
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

			









 
 http://123.57.162.196:38080/timetable/mupdate/class_timelen/100/course_way/1/course_type/2/class_limit/1/lesson_num/2/teacher_uid/10008540/class_datetime/2019-05-21%2019:30/course_level/1/timetable_state/1class_timelen/100/course_way/1/course_type/1/class_limit/1/lesson_num/2/teacher_uid/10008540/class_datetime/2019-05-21%2019:30/course_level/1/timetable_state/1class_timelen/100/course_way/1/course_type/2/class_limit/1/lesson_num/2/teacher_uid/10008540/class_datetime/2019-05-21%2019:30/course_level/1/timetable_state/1
 
 
 */