* 准备前端页面 1-GET.html
* 准备服务端代码 server.js
* 运行脚本 `node server.js`
* 在浏览器中查看 `127.0.0.1:8000\server`
* F12查看 响应头, 响应体
## AJAX 操作的基本步骤
```javascript
// 1. 创建对象
const xhr = new XMLHttpRequest();
// 2. 初始化 设置类型与URL
/*
 * 请求行的设置
 */
xhr.open('POST', 'http://127.0.0.1:8000/server');

/*
 * 请求头的设置
 * 两个参数
 *  1. 头的名字
 *  2. 头的值
 */
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Content-Type: 设置请求体内容的类型

// 3. 发送
/*
 * 请求体的设置
 */
xhr.send('a=100&b=200&c=300'); // POST请求的参数设置

// 4. 事件绑定
xhr.onreadystatechange = () => {
// 对状态进行判断
    if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
            // 处理服务端返回的结果
            result.innerHTML = xhr.response;
        }
    }
};
```
* **GET请求的参数设置**
    ```javascript
        // 2. 初始化 设置类型与URL
        xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300'); // 在 AJAX 中传递参数
    ```
    
    * **在`Payload`查看 参数**
* **POST请求的参数设置**
    ```javascript
        // POST请求的参数设置
    
        // 3. 发送
        xhr.send('a=100&b=200&c=300'); // 在发送时设置
    ```
    * **`send()`发送请求体**
## 在 AJAX 中设置请求头信息
```javascript
    /*
     * 请求头的设置
     * 两个参数
     *  1. 头的名字
     *  2. 头的值
    */
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Content-Type: 设置请求体内容的类型
```
## AJAX请求服务端响应Json的操作
```javascript
    // 向服务端发送请求
    const xhr = new XMLHttpRequest();
    // 设置响应体数据类型
    xhr.responseType = 'json';
    // 初始化
    xhr.open('GET', 'http://127.0.0.1:8000/json-server');
    // 发送
    xhr.send();
    // 事件绑定
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            // //
            // console.log(xhr.response);
            // result.innerHTML = xhr.response;
            // 手动对字符串进行转换
            // let data = JSON.parse(xhr.response);
            // console.log(data);
            // 自动转换
            console.log(xhr.response);
            result.innerHTML = xhr.response.name;
          }
      }
    };
```
> * 重点是 网页端`xhr.responseType = 'json';` & 服务端`JSON.stringify()`
```javascript
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
```