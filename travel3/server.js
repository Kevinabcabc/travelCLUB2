const express = require('express');
const server = express();


server.use(express.urlencoded({urlencoded: false}));
server.use(express.json());


// 响应首页
server.get('/', (req, res)=>{
  res.sendFile(__dirname+'/www/index.html');
})

// 响应静态资源
server.use('/js', express.static('./www/static/js'));
server.use('/css', express.static('./www/static/css'));
server.use('/static', express.static('./www/static'));
server.use('/img', express.static('./www/img'));
server.use('/font', express.static('./www/font'));
server.get('/favicon.ico', (req, res)=>{
  res.sendFile(__dirname+'/www/favicon.ico');
})

server.use((req, res)=>{
  res.sendFile(__dirname+'/www/index.html');
})


server.listen('3000', (error)=>{
  if(!error){
    console.log('服务器启动成功');
  }else{
    console.log('服务器启动失败：');
    console.log(error);
  }
})



