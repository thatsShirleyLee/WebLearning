# [axios](https://github.com/axios/axios)
> * Promise based HTTP client for the browser and node.js
> * 基于Promise的客户端， 可以在浏览器和node.js的环境中运行
## Feature
* Make XMLHttpRequests from the browser
* Make http requests from node.js
*  Supports the Promise API
* Intercept request and response
* Transform request and response data
* Cancel requests
* Automatic transforms for JSON data
* 🆕 Automatic data object serialization to multipart/form-data and x-www-form-urlencoded body encodings
* Client side support for protecting against XSRF
## 安装axios
### 包装管理器
* 项目中

  Using npm:
  `npm install axios`
  
  Using yarn:
  `yarn add axios`

Using bower:
`bower install axios`

Using pnpm:
`pnpm add axios`

### CDN
Using jsDelivr CDN (ES5 UMD browser module):

`<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>`

Using unpkg CDN:

`<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>`

> 自幼加载有时候比较慢, 可以换为国内的 Bootcdn ,然后搜索axios替换链接

## json-server
### 安装
  > 安装 [json-server](https://github.com/typicode/json-server)
  > 在不到30秒的时间里，以零编码的方式获得一个完整的假 REST API 。

* ```
  npm install -g json-server
  ```
* 创建一个带有一些数据的 `db.json` 文件

  ```javascript
    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
    }
  ```
* 开启 json 服务
  `json-server --watch db.json`
* 打开 http://localhost:3000/posts/1, 会得到
  
  ```{ "id": 1, "title": "json-server", "author": "typicode" }```
* 另外，在做请求时，最好了解这一点：
  > * 如果你提出POST、PUT、PATCH或DELETE请求，变化将被自动安全地保存到db.json，使用 [lowdb](https://github.com/typicode/lowdb)
  > * 你的请求体JSON应该是对象封闭的，就像GET的输出一样。(例如 `{"name": "Foobar"}`)
  `id`值是不可变的。你的PUT或PATCH请求正文中的任何ID值都将被忽略。只有在POST请求中设置的值才会被尊重，但前提是没有被占用。
  > * 一个POST、PUT或PATCH请求应该包括一个 `Content-Type: application/json` 头，以使用请求体中的JSON。否则它将返回一个2XX状态代码，但不会对数据进行修改。
      Routes
      Based on the previous db.json file, here are all the default routes. You can also add other routes using --routes.

### Plural routes
```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```
