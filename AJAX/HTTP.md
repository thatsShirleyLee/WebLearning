# HTTP

HTTP (Hypertext Transport Protocol) 超文本传输协议, 规定了浏览器和万维网服务器之间互相通信的规则.

## 请求报文

重点是格式与参数
- Get
  - 请求体是空的
- Post
  - 请求体可以不为空
```
请求行   GET(POST) / url HTTP/1.1(HTTP协议版本)
请求头   Host: atguigu.com
        Cookie: name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
请求体   username=admin&password=admin
```

## 响应报文
```
响应行 HTTP/1.1(HTTP协议版本) 200(响应状态) OK(响应状态字符串)
响应头 Content-Type: text/html;charser=utf-8
      Content-length: 2048
      Content-encoding: gzi[
空行
响应体 <html>
        <head>
          <body>
              <h1>Hello!</h1>
          </body>
        </head>
      </html>
```
### 响应状态
* 404
* 403
* 401
* 500
* 200

## 浏览器中查看
> F2->Network

  | Headers                                  | Preview      | Response |
  |------------------------------------------|--------------|----------|
  | General                                  | 对响应体做解析 (页面) | 响应体      |
  | Response Headers (响应头)                   |              |          |
  | Request Headers (请求行+请求头)                |              |          |
  | [POST] From Data  (请求体)                  |              |          |
  | [GET] Query String Parameters (对url做个解析) |              |          |