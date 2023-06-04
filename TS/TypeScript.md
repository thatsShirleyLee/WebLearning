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
* `tsconfig.json` 是一个 JSON 文件, 添加配置文件后, 只需 `tsc` 命令即可完成对整个项目的编译
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
      * 