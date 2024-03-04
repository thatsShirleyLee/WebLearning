const {createProxyMiddleware} = require('http-proxy-middleware');
// 需要额外下载一个三方包http-proxy-middleware，在编辑器终端直接执行npm install http-proxy-middleware --save进行安装。安装完毕后，在src目录下新建文件setupProxy.js

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', { // 遇见/api1前缀的请求就会出发该代理配置
            target: 'http://localhost:5000', // 请求转发给谁
            changeOrigin: true, // 控制服务器收到的请求头中 Host 字段的值
            pathRewrite: {'^/api1': ''} // 重写请求路径
        }),

        createProxyMiddleware('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}