# ES介绍
- ES全称
  - EcmaScript
- 脚本语言的规范
- 平时经常辨别的Javascript是EcmaScript的一种实现,所以ES新特性其实指的就是Javascript的新特性
# 为什么要学习ES新特性
1. 语法简洁,功能丰富
2. 框架开发应用
3. 前端开发职位要求
# 前置知识
1. Javascript基本语法
2. AJAX与NodeJS
# Babel
> JavaScript 编译器
> 可以将 ES 比较新的 语法 转为 ES5 能识别的语法
```shell
npm init --yes
npm i babel-cli babel-preset-env
```
```shell
#使用babel命令
npx babel js -d dist/js --presets=babel-preset-env # 局部安装
# babel # 全局安装

#js\app.js -> dist\js\app.js
#js\m1.js -> dist\js\m1.js
#js\m2.js -> dist\js\m2.js
#js\m3.js -> dist\js\m3.js
```
```shell
npx browserify dist/js/app.js -o dist/bundle.js # 打包
```
> 修改 js里的 app.js 然后重新执行命令 生成 bundle.js (home.html 始终引入的是 bundle.js (CommonJS) )  
# ECMAScript 7 新特性
## Array.prototype.includes
> Includes 方法用来检测数组中是否包含某个元素, 返回布尔类型值
## 指数操作符
> 在 ES7 中引入指数运算符 [**] ,用来实现幂运算, 功能与 Math.pow 结果相同
# ECMAScript 8 新特性
## async 和 await
> async 和 await 语法结合可以让异步代码像同步代码一样
### async 函数
1. async 函数的返回值为 promise 对象
2. promise 对象的结果由 async 函数执行的返回值决定
### await 表达式
1. await 必须写在 async 函数中
2. await 右侧的表达式一般为 promise 对象
3. await 返回的是 promise 成功的值
4. await 的 promise 失败了, 就会抛出异常, 需要通过 try ... catch 捕获处理
## ES8 对象方法扩展
### Object.values 和 Object.entries
1. Object.values() 方法返回一个给定对象的所有可枚举属性值的数组
2. Object.entries() 方法返回一个给定对象自身可遍历属性 [key, value] 的数组
### Object.getOwnPropertyDescriptors
该方法返回指定对象所有自身属性的描述对象
