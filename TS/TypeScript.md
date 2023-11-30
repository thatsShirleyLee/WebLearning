# TypeScript 是什么 ?

* 解决 JavaScript 的一些问题
* 以 JavaScript 为基础构建的语言
* 一个 JavaScript 的超集
* 扩展了 JavaScript, 并添加了类型
* 可以在任何支持 JavaScript 的平台中执行
* TS 不能被 JS 解析器直接执行
* TS -> 编译 -> JS -> 执行
* TS 易于维护

## TS 编译器

# TypeScript 增加了什么 ?

* 类型
* 支持 ES 的新特性
* 添加 ES 不具备的新特性
* 丰富的配置选项: 可以编译成任意版本的 JS
* 强大的开发工具

# TypeScript 开发环境搭建

1. 下载 Node.js
2. 安装 Node.js
3. 使用 npm 全局安装 TypeScript
    * 进入命令行
    * 输入: `npm i -g typescript`
4. 创建一个 ts 文件
5. 使用 tsc 对 ts 文件进行编译
    * 进入命令行
    * 进入 ts 文件所在目录
    * 执行命令: `tsc XX.ts`

# 基本类型

## 类型声明

* 类型声明是 TS 非常重要的一个特点
* 通过类型声明可以指定 TS 中变量 (参数、形参) 的类型
* 指定类型后, 当为变量赋值时, TS 编译器会自动检查值是否符合类型声明, 符合则赋值, 否则报错
* 简而言之, 类型声明给变量设置了类型, 使得变量只能存储某种类型的值
* 语法:
  ```typescript
   let 变量: 类型;
   let 变量: 类型 = 值;

   function fn (参数: 类型, 参数: 类型): {
      ...
   }
   ```

## 自动类型判断

* TS 拥有自动的类型判断机制
* 当对变量的声明和赋值是同时进行的, TS 编译器会自动判断变量的类型
* 所以如果你的变量的声明和赋值是同时进行的, 可以**省略掉类型声明**

## 类型

| 类型      | 例子             | 描述                  |
|---------|----------------|---------------------|
| number  | 1, -33, 2.5    | 任意数字                |
| string  | 'hi', "hi", hi | 任意字符串               |
| boolean | true、false     | 布尔值 true 或 false    |
| 字面量     | 其本身            | 限制变量的值就是该字面量的值      |
| any     | *              | 任意类型                |
| unknown | *              | 类型安全的 any           |
| void    | 空值 (undefined) | 没有值 (或 undefined)   |
| never   | 没有值            | 不能是任何值　             |
| object  | {name：”孙悟空“}   | 任意的 JS 对象           |
| array   | [1, 2, 3]      | 任意的 JS 数组           |
| tuple   | [4, 5]         | 元素, TS 新增类型, 固定长度数组 |
| 　enum   | enum{A, B}     | 枚举, TS中新增类型         |

### number

```typescript
let demical: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: number = 100n;
```

# 编译选项

## 自动编译文件

* 编译文件时, 使用 `-w` 指令后, TS 编译器会自动监视文件的变化, 并在文件发生变化时对文件进行重新编译
  > w: watch , 监视
* 示例:
   ```
  tsc xxx.ts -w
  ```

## 自动编译整个项目

* 如果直接使用 `tsc` 指令, 则可以自动将当前项目下的所有 ts 文件编译为 js 文件
* 但是能直接使用 `tsc` 命令的前提是, 要先在项目根目录下创建一个 ts 的配置文件 `tsconfig.json`
    * `tsc --init` 可以自动生成[有注释]的`tsconfig.json`
* `tsconfig.json` 是一个 JSON 文件, 添加配置文件后, **只需 `tsc` 命令即可完成对整个项目的编译**
    * 配置选项:
        * `include`
            * 定义希望被编译文件所在的目录
            * 默认值: ["**/*"]
            * 示例:
                * `"include": ["src/**/*", "tests/**/*"]`
                * 上述示例中, 所有 src 目录和 tests 目录下的文件都会被编译
        * `exclude`
            * 定义需要排除在外的目录
            * 默认值: `["node_module", "bower_components", "jspm_packages"]`
            * 示例:
                * `"exclude": ["./src/hello/**/*]"`
        * `extends`
            * 定义被继承的配置文件
            * 示例:
                * `"extends": "./confiigs/base"`
                * 上述示例中, 当前配置文件中会自动包含 configs 目录下 base.json 中的所有配置信息
        * `file`
            * 指定被编译文件的列表, 只有需要编译的文件少时才会用到
            * 示例:
                * ```typescript
                  "files": [
                    "core.ts",
                    "sys.ts",
                    "types.ts",
                    "scanner.ts",
                    "parser.ts",
                    "utilities.ts",
                    "binder.ts",
                    "checker.ts",
                    "tsc.ts"
                  ]
                  ```
        * `compilerOptions`
            * 编译选项时配置文件中非常重要也比较复杂的配置选项
            * 在 `compilerOptions` 中包含多个子选项, 用来完成对编译的配置
                * 项目选项
                    * `target`
                        * 设置 ts 代码编译的目标版本
                        * 可选值
                            * ES3 (默认) \ ES5 \ ES6/ES2015 \ ES7/ES2016 \ ES2017 \ ES2018 \ ES2019 \ ES2020 \ ESNext
                        * 示例:
                            * ```json
                              "compilerOptions": {
                                "target": "ES6"
                              }
                              ```
                            * 如上设置, 编写的 ts 代码将会被编译为 ES6 版本的 js 代码
                    * `lib`
                        * 指定代码运行时所包含的库 (宿主环境)
                        * 可选值:
                            * ES5 \ ES6/ES2015 \ ES7/ES2016 \ ES2017 \ ES2018 \ ES2019 \ ES2020 \ ESNext \ DOM \
                              WebWorker \ ScriptHost ...
                            * 示例:
                                * ```json
                                  "compilerOptions": {
                                    "target": "ES6",
                                    "lib": ["ES6"]
                                    "outDir": "dist",
                                    "outFile": "dist/aa.js"
                                  }
                                  ```
                    * `module`
                        * 设置编译后代码使用的模块化系统
                        * 可选值:
                            * CommonJS \ UMD \ AMD \ System \ ES2020 \ ESNext \ None
                            * 示例:
                                * ```json
                                  "compilerOptions": {
                                    "module": "CommonJS",
                                  }
                                  ```
                    * `outFile`
                        * 指定代码运行时所包含的库 (宿主环境)
                        * 可选值:
                            * ES5 \ ES6/ES2015 \ ES7/ES2016 \ ES2017 \ ES2018 \ ES2019 \ ES2020 \ ESNext \ DOM \
                              WebWorker \ ScriptHost ...
                            * 示例:
                                * ```json
                                  "compilerOptions": {
                                    "target": "ES6",
                                    "lib": ["ES6"]
                                    "outDir": "dist",
                                    "outFile": "dist/aa.js"
                                  }
                                  ```
                    * `rootFile`
                        * 指定代码的根目录, 默认情况下编译后的文件的目录结构会以最长的公共目录为根目录, 通过 `rootDir`
                          可以手动指定根目录
                        * 示例:
                            * ```json
                              "compilerOptions": {
                                "rootDir": "./src"
                              }
                              ```
                    * `allowjs`
                        * 是否对 js 文件编译
                    * `checkjs`
                        * 是否对 js 文件进行检查
                        * 示例
                            * ```json
                              "compilerOptions": {
                                "allowjs": true,
                                "checkjs": true
                              }
                              ```
                    * `removeComments`
                        * 是否删除注释
                        * 默认值: `false`
                    * `noEmit`
                        * 不生成编译后的文件
                            * > 适用于仅需要检查 ts 文件的语法错误
                        * 默认值: `false`
                    * `noEmitOnError`
                        * 当有错误时不生成编译后的文件
                        * > 有错误的时候就不会编译, 避免生成有安全隐患的代码
                        * 默认值: `false`
                    * `sourceMap`
                        * 是否生成 `sourceMap`
                        * 默认值: `false`
                * 严格检查
                    * `stric`
                        * 启用所有的严格检查, 默认值为 `true`, 设置后相当于开启了所有的严格检查
                    * `alwaysStrict`
                        * 用来设置编译后的文件是否使用严格模式 (`true`)
                        * 默认值 `false`
                    * `noImplicitAny`
                        * 不允许隐式的 any 类型 (`true`)
                        * 默认值 `false`
                    * `noImplicitThis`
                        * 不允许隐式的 this 类型 (`true`)
                        * 默认值 `false`
                        * 示例:
                            * ```typescript
                              function fn(this: Window){
                                  alert(this);
                              }
                              ```
                    * `strictNullChecks`
                        * 严格的检查空值 (`true`)
                        * 默认值 `false`

> 实际在项目开发时, 需要使用打包工具 `webpack` (package.json) ; 而不会直接使用 tsc 编译项目

# TS + 打包工具

> 使用 webpack 对代码进行编译

## Steps

* 生成 `package.json`
    * > 要使用 `webpack`, 很明显需要使用 `npm` 包管理器去管理包
    * `npm init -y`
        * > 对项目进行初始化, 主要作用就是在项目下 生成 `package.json`
    * `package.json`: 管理项目, 有哪些依赖 \ 哪些命令
        ```json
        {
          "name": "part3",
          "version": "1.0.0",
          "description": "",
          "main": "index.jsx",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "keywords": [],
          "author": "",
          "license": "ISC"
        }
        ```
* 安装一下使用 `webpack` 需要依赖
  * `cnpm` or `npm`
  * `cnpm i -D webpack webpack-cli typescript ts-loader`
    * `-D`就是开发依赖 (devDependencies)
    * `ts-loader` 整合 webpack 和 ts
* 编写 `webpack` 配置文件
  * `webpack.config.js`
    ```javascript
    // 引入一个包
    const path = require("path");
        
    // webpack 中的所有配置信息都应该写在 module.export 中
    module.exports = {
    
        mode: "development",
    
        // 指定入口文件
        entry: "./src/index.ts",
    
        // 指定打包文件所在目录
        output: {
            path: path.resolve(__dirname, "dist"),
            // 打包后文件的名字
            filename: "bundle.js"
        },
    
        // 指定 webpack 打包时所使用的模块
        module: {
            // 指定要加载的规则
            rules: [
                {
                    // test 指定的是规则生效的文件
                    test: /\.ts$/,
                    // 要使用的 loader, 用 ts-loader 去处理 以 .ts 结尾的文件
                    use: "ts-loader",
                    // 要排除的文件夹
                    exclude: /node-modules/
                }
            ]
        }
    }
    ```
* 编写 ts 文件编译规则
  * `tsconfig.json`
    ``` json
    {
    "compilerOptions": {
      "module": "es5",
      "target": "es5",
      "strict": true
      },
    }
    ```
* 在 `package.json` 中加一个命令
  * ```json
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack" // 就是这个命令
    }
    ```
* 打包项目
  * `npm run build`
  * 打包后出现 `dist` 文件夹, 即**打包成功**
    * `dist` 文件夹下 会有 `bundle.js` 文件
## 安装 `webpack` 插件
> 手动创建 html 文件, 需要一个个 引入 js 文件, 太麻烦.
> 希望通过 `webpack` 自动创建 html 文件; 自动引入 我们所有的 js 文件
* 安装
  * `npm i -D html-webpack-plugin`
  > 安装的依赖都可以再 `package.json` 的 "devDependencies" 看到
* 在 `webpack.config.js` 中引入 html 插件
  * `const HTMLWebpackPlugin = require('html-webpack-plugin');`
* 配置 `webpack` 插件
    ```json
      plugins: [
       new HTMLWebpackPlugin(), // 帮助我们自动创建 html 文件, 引入相关资源
      ]
    ```
  * `new HTMLWebpackPlugin()` 里可以传 对象
  * 示例:
    * ```json
      new HTMLWebpackPlugin({
        title: "这是一个自定义的 title"
      }),
      ```
    * 以上表示自动创建的 `html` 文件的 title
* 可以在 `dist` 目录下看到生成的 `index.html`
  * `index.html` 的 `script` 标签的属性 `src` 引入了 `bundle.js`
* 使用网页模板更方便
    * 示例:
      * ```json
        new HTMLWebpackPlugin({
         template: "./src/index.html"
        }),
      ```
## 实现 浏览器与项目的关联
> 项目文件更改后, 浏览器看到的能自动刷新
* 安装 `webpack-dev-server`
  * `npm i -D webpack-dev-server`
  * 相当于装了一个内置的服务器, 可以让项目在这个服务器上运行. 这个服务器和 webpack 是关联的, 可以根据项目的改变自动去刷新
* 在 `package.json` 设置命令
  * ```json
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "start": "webpack server --open chrome.exe"
    ```
  * `"start": "webpack server --open chrome.exe"` 启动 webpack 服务器 并打开 chrome
* `npm start`
## 清空 `dist` 目录的插件
> 正常编译, 会用新文件替换 `dist` 下的同名旧文件
> 但是这个插件可以在编译之前, 清空 `dist` 目录下的所有文件, 保证了 `dist` 目录下永远都是最新的文件
* `npm i -D clean-webpack-plugin`
* 在 `webpack.config.json` 文件中 引入
  * const { CleanWebpackPlugin } = require('clean-webpack-plugin');`
  * `new CleanWebpackPlugin(),`
## 告诉 webpack 哪些文件可以作为模块被引入 
> webpack 不知道哪些文件可以作为模块引入
* 配置
  * ```js
    resolve: {
      extensions: ['.ts', '.js']
    }
    ```
# 兼容多版本
* 安装 `npm i -D @babel/core @babel/preset-env babel-loader core-js`
  * `@babel/core` babel 的核心组件
  * `@babel/preset-env` 预先设置环境 (各种不同环境)
  * `babel-loader` babel 和 webpack 结合的一个工具
  * `core-js` 模拟 js 运行环境, 可以使老版本浏览器 能够使用新版本的语法
* 可以在 `package.json` 查看是否下载成功
* 修改 `webpack.config.js` 配置
  * `module` 项 => `use: ["babel-loader", "ts-loader"],`
  * **use 使从后往前执行, 后面的先使用**
  * 先用 ts-loader 将 ts 文件转为 js 文件; 再用 babel-loader 将 新 js 文件 转为 旧版本 js 文件
  * 复杂配置
  * ```js
    use: [
      {
        loader: "babel-loader",
        options: {
            // 设置预定义环境 (代码要在哪些浏览器下运行)
            presets: [
                [
                    // 指定环境的插件
                    "@babel/preset-env",
                    // 配置信息
                    {
                        // 要兼容的目标浏览器
                        targets: {
                            "chrome": "88",
                            "ie": "11"
                        },
                        // 指定 corejs 的版本
                        "corejs": "3",
                        // 使用 corejs 的方法 "usage" 表示按需加载
                        "useBuiltIns": "usage"
                    }
                ]
            ]
        }
      },
      "ts-loader"
    ]
    ```
* 兼容 ie 11 时, 不使用箭头函数
  * ```js        
    // 告诉 webpack 不使用箭头函数
    environment: {
        arrowFunction: false
    }
    ```
# 面向对象
> 面向对象是程序中一个非常重要的思想, 就是程序之中所有的操作都需要通过对象来完成
* 举例来说:
  * 操作浏览器需要使用 `window` 对象
  * 操作网页需要使用 `document` 对象
  * 操作控制台需要使用 `console` 对象

一切操作都要通过对象, 也就是所谓的面向对象.
计算机程序的本质就是对现实事物的抽象, 抽象的反义词是具体, 比如: 照片是对一个具体的人的抽象, 汽车模型是对具体汽车的抽象等等.
程序也是对事物的抽象, 在程序中我们可以表示一个人\一条狗\一把枪\一颗子弹等等所有的事物.  一个事物到了程序中就编程了一个对象

在程序中所有的对象都被分成了两个部分, 数据和功能, 以人为例, 人的姓名\性别\年龄\身高\体重等属于数据, 人可以说话\走路\吃饭\睡觉这些属于人的功能.
* 数据在对象中被称为属性
* 功能被称为方法
简而言之, 在程序中一切皆是对象
## 类 (class)
要想面向对象, 操作对象, 首先便要拥有对象, 那么下一个问题就是如何创建对象.
要创建对象, 必须要先定义类, 所谓的**类可以理解为 对象的模型**, 程序中可以根据类创建指定类型的对象, 举例来说: 可以通过 Person 类来创建人的对象, 通过 Dog 类创建狗的对象, 通过 Car 类来创建汽车的对象.
不同的类可以用来创建不同的对象
* 定义类:
  * ```typescript
    class 类名 {
        属性名: 类型;
        
        constructor(参数: 类型) {
            this.属性名 = 参数;
        }
        
        方法名(){
            ...
        }
    }
    ```
* 示例:
    * ```typescript
      class Person {
            name: string;
            age: number;
        
            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }
        
            sayHello(){
                console.log("Index");
            }
      }
      ```
