const express = require("express");
const app = express();

// GET 请求
app.get('/server', (request, response) => {
    // 设置响应头 (特殊响应头)
    response.setHeader('Access-Control-Allow-Origin', '*'); // 所有类型的头信息都可以接受
    // 设置响应体
    response.send('HELLO AJAX');
});

/* // POST 请求
app.post('/server', (request, response)=>{
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*'); // 还会发OPTIONS请求
    // 设置响应体
    response.send('Index Ajax POST');
}); */

// 可以接受任意类型的请求 (GET POST OPTIONS TOUCH ...)
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Index AJAX POST');
});

// JSON 响应
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
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
    response.send('HELLO IE -2');
});

// 延时响应
app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应');
    }, 3000);
});

// jQuery 服务
app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data));
});

// axios 服务
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data));
});

// fetch 服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置运行接受特殊请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name: '尚硅谷'};
    response.send(JSON.stringify(data));
});

// jsonp 服务
app.all('/jsonp-server', (request, response) => {
    // response.send("console.log('Index jsonp-server')");
    const data = {
        name: "尚硅谷"
    };
    // 将数字转化为字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`); // end()不会加特殊响应头
});

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将数据转换为字符串
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

// jQuery-jsonp 服务
app.all('/jquery-jsonp-server', (request, response) => {
    // response.send("console.log('Index jsonp-server')");
    const data = {
        name: "尚硅谷",
        city: ["北京", "上海", "深圳"]
    };
    // 将数字转化为字符串
    let str = JSON.stringify(data);
    // 接受 callback 参数
    let cb = request.query.callback;
    response.end(`${cb}(${str})`); // end()不会加特殊响应头
});

// cors 服务
app.all('/cors-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*');  // 指定允许访问资源的外部域名。'*' 表示允许任何域访问（即跨域请求不受限制）
    response.setHeader('Access-Control-Allow-Header', '*');  // 指定允许的自定义请求头。'*' 表示允许所有类型的请求头 
    response.setHeader('Access-Control-Allow-Method', '*');  // 指定允许的 HTTP 方法。'*' 代表允许任何请求方法
    response.send("Index CORS");
});


app.listen(8001, () => {
    console.log("服务已经启动, 8001端口监听中...");
});