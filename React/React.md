# React 入门
## React 全家桶
> * React 基础
> * React-Router: 管理路由的库
> * PubSub: 消息管理的库
> * Redux+: 集中式状态管理的库
> * Ant-Design: 精美的 UI 组件库
## React 是什么
用于构建用户**界面**的 JavaScript 库
* React 实现
  > 数据 -> 虚拟 DOM -> 真实 DOM
## JSX
* 全称: Javascript XML
* react定义的一种类似于XML的JS扩展语法: JS + XML本质是 `React.createElement(component, props, ...children)` 方法的语法糖
* 作用: 用来简化创建虚拟DOM
## 模块&组件
### 模块
* 理解：向外提供特定功能的js程序, 一般就是一个js文件
* 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
* 作用：复用js, 简化js的编写, 提高js运行效率
### 组件
* 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
* 为什么要用组件： 一个界面的功能更复杂
* 作用：复用编码, 简化项目编码, 提高运行效率
### 模块化
> 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
### 组件化
> 当应用是以多组件的方式实现, 这个应用就是一个组件化的应用
# React 面向组件编程
* 函数式组件: 适合简单组件
* 类式组件: 适合复杂组件
## 组件三大核心属性
### state
1. 理解
   * state 是组件对象最重要的属性, 值是对象(可以包含多个 key-value 的组合)
   * 组件被称为"状态机", 通过更新组件的 state 来更新对应的页面显示(重新渲染组件)
2. 注意
   * 组件中 render 方法中的 this 为组件实例对象
   * 组件自定义的方法中 this 为 undefined ，如何解决？
     * 强制绑定 this : 通过函数对象的 bind()
     * 箭头函数
   * 状态数据，不能直接修改或更新
### props
1. 理解
   * 每个组件对象都会有 props ( properties 的简写)属性
   * 组件标签的所有属性都保存在 props 中
2. 作用
   * 通过标签属性从组件外 向 组件内 传递变化的数据
   * 注意: 组件内部不要修改 props 数据
### refs
1. 理解
    * 组件内的标签可以定义 ref 属性来标识自己 (类似于 id)
2. 编码
   * 字符串形式的 ref: `<input ref="input1"/>`
   * 回调形式的 ref: `<input ref={(c)=>{this.input1 = c}}/>`
   * creatRef 创建的 ref 容器: `myRef = React.creatRef()` `<input ref={this.myRef}/>`
### 事件处理