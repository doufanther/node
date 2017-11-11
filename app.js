//首先，得安装mysql,express,body-parser，path这些依赖
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 主要的路由用来返回　HTML file
app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});
//初始化数据库配置
const connection = mysql.createConnection({
  host     : '192.168.2.199',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'test', 
});
//连接数据库
connection.connect(function (err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("connection id" + connection.threadId);
});
//增加一个user
app.post('/insert-user', function (req, res) {
  connection.query('insert into `user` set ?',req.body,
      function (err, result) {
        if (err) throw err;
        res.send('User added to database with ID: ' + result.insertId);
      }
  );
});
//监听3000端口号
app.listen(3000, function () {
  console.log("app is listening");
});