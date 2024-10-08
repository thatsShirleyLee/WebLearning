// 1. 引入express
const express = require('express');
// 2. 创建应用对象
const app = express();
// 3. 创建路由规则
    // request 对请求报文的封装
    // response 对响应报文的封装
app.get('/', (request, response)=>{
    // 设置响应
    response.send('HELLO EXPRESS'); // 响应体
});

// 4. 监听端口启动服务
app.listen(8001, ()=>{
    console.log("服务已经启动, 8001端口监听中...");
});