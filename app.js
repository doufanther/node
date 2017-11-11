var express=require('express');
var app =express();

//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});

var questions=[
{
data:213,
num:444,
age:12
},
{
data:456,
num:678,
age:13
},
{
data:6666,
num:66666,
age:666666
}
];
var user=[
	{
		name:'隔壁老王',
		phone:'157566666'
	},
	{
		name:'张无忌',
		phone:'15727802745'
	}
]
//写个接口123
app.get('/123',function(req,res){
res.status(200),
res.json(questions)
});

app.get('/user',function(req,res){
res.status(200),
res.json(user)
});

//配置服务端口
var server = app.listen(3000, function () {
var host = server.address().address;
 var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})