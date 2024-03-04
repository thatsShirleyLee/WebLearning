# 1. 原生 AJAX
## 1.1 AJAX 简介
Asynchronous Javascript And XML, 异步的JS和XML
- 通过 AJAX 可以在浏览器中向服务器发送异步请求,最大的优势:无刷新获取数据
-  AJAX 不是新的编程语言,而是一种将现有的标准组合在一起使用的新方式
## 1.2 XML 简介
Extensible Markup Language, 可扩展标记语言.
- XML被设计出用来传输和存储数据.
- XML和HTML类似, 不同的是HTML中都是预定义标签, 而XML中没有预定义标签,全都是自定义标签,用来表示一些数据
```html
<!-- 比如一个学生数据: -->
name = "孙悟空"; age = 18; gender = "男";

<!--用XML表示:-->
<student>
    <name>孙悟空</name>
    <age>18</age>
    <gender>男</gender>
</student>
```
- HTML 用于呈现数据
- XML 用于存储和传输数据
## 1.3 AJAX 的特点
### 1.3.1 AJAX 的优点
1. 可以无需刷新页面而与服务器端进行通信
2. 允许你根据用户事件来更新部分页面内容
### 1.3.2 AJAX 的缺点
1. 没有浏览历史,不能回退
2. 存在跨域问题 (同源) 
3. SEO (Search Engining Optimizationz) 不友好
## 1.4 AJAX的使用
### 1.4.1 核心对象

## 1.5 jQuery 中的 AJAX
### 1.5.1 get 请求
```javascript
$.get(url, [data], [callback], [type])
    url: 请求的URL地址
    data: 请求携带的参数
    callback: 载入成功时回调函数
    type: 设置返回内容格式, xml, html, script, json, text, _default
```
### 1.5.2 post 请求
```javascript
$.post(url, [data], [callback], [type])
url: 请求的URL地址
data: 请求携带的参数
callback: 载入成功时回调函数
type: 设置返回内容格式, xml, html, script, json, text, _default
```

## 1.6 axios
> 前端最热门的AJAX工具库
> Vue 和 React 推荐的 AJAX 工具包
> [https://github.com/axios/axios](https://github.com/axios/axios)
### 1.6.1 Installing
* Package manager
  * Using npm: `npm install axios`
* CDN
  * Using jsDelivr CDN (ES5 UMD browser module): `<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>`
  * Using unpkg CDN: `<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>`
  * BootCDN 加速
    * [https://www.bootcdn.cn/](https://www.bootcdn.cn/)
    * 然后搜索 axios
## 1.7 fetch
> [https://developer.mozilla.org/en-US/docs/Web/API/Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
> 使用 fetch 来发送 AJAX 请求
```javascript
  fetch('http:/127.0.0.1:8000/fetch-server?vip=10', {
      // 请求方法
      method : 'POST',
      // 请求头
      headers: {
          name: 'atguigu'
      },
      // 请求体
      body : 'username=admin&password=admin'
  }).then(response => {
      // return response.text();
      return response.json();
  }).then(response => {
      console.log(response);
  });
```
# 3 跨域
## 3.1 同源策略
同源策略( Same-Origin Policy )最早由Netscape公司提出, 是浏览器的一种安全策略.
同源: 协议 \ 域名 \ 端口号 必须完全相同
违背同源策略就是跨域

## 3.2 如何解决跨域
### 3.2.1 JSONP
1. JSONP 是什么
   JSONP (JSON with Padding), 是一个非官方的跨域解决方案, 纯粹凭借程序员的聪明才智开发出来的, 只支出 get 请求
2. JSONP 怎么工作的?
   在网页有一些标签天生具有跨域能力, 比如: img link iframe script
   JSONP 就是利用 script 标签的跨域能力来发送请求的
3. JSONP 的使用
   1. 动态的创建一个 script 标签
      `var script = document.creatElement("script);`
   2. 设置 script 的 src, 设置回调函数
### 3.2.2 CORS
> 跨域请求的另一种解决方案
1. CORS 是什么?
   CORS ( Cross-Origin Resource Sharing ), 跨域资源共享. CORS 是官方的跨域解决方案, 它的特点是不需要客户端任何特殊的操作, 完全在服务器中进行处理, 支出 get 和 post 请求. 跨域资源共享标准新增了一组 HTTP 首部字段, 允许服务器声明哪些源站通过浏览器有权限访问哪些资源
2. CORS 怎么工作的?
   CORS 是通过设置一个响应头来告诉浏览器, 该请求允许跨域, 浏览器收到该响应以后就会对响应放行
3. CORS 的使用
   主要是服务器端的设置:
   ```
      router.get("/testAJAX", function(req, res){ 
      });
   ```