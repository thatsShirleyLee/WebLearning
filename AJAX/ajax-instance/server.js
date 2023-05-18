const express = require("express");
const app = express();

// GET 请求
app.get('/server', (request, response)=>{
    // 设置响应头 (特殊响应头)
    response.setHeader('Access-Control-Allow-Origin', '*'); // 所有类型的头信息都可以接受
    // 设置响应体
    response.send('HELLO AJAX - 2');
});

// POST 请求
// app.post('/server', (request, response)=>{
//     // 设置响应头 设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     // 设置运行接受特殊请求头
//     response.setHeader('Access-Control-Allow-Headers', '*'); // 还会发OPTIONS请求
//     // 设置响应体
//     response.send('Hello Ajax POST');
// });

// 可以接受任意类型的请求 (GET POST OPTIONS TOUCH ...)
app.all('/server', (request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello AJAX POST');
});

// JSON 响应
app.all('/json-server', (request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data ={
        name: 'atguigu',
    };
    // 对 对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// 针对 IE 缓存
app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('HELLO IE -2zzzzzzzzzzzzz');
});

// 延时响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout( () => {
        // 设置响应体
        response.send('延时响应');
    }, 3000);
});

app.listen(8000, ()=>{
    console.log("服务已经启动, 8000端口监听中...");
});