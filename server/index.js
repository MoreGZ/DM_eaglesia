var express = require('express');
var app = express();

app.use(express.static(__dirname+'public'));

// 获取时间具体信息
var event = require('./data/event.json');
event = JSON.stringify(event);
app.get('/event', function (req, res) {
   console.log("请求具体事件页面信息");
   res.send(event);
})

var server = app.listen(8081,'localhost',function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("http://%s:%s",host,port);
})