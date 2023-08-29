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
  * 使用类去创建组件时, 类中所有自定义方法都要写成：赋值语句+箭头函数 的形式
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
   * **状态数据，不能直接修改或更新**
#### 严格模式
* 类中函数自动开启严格模式
* 严格模式的 this, 不指向 window, 而是 undefined
```javascript
   const p1 = new Person('小红', 20)
   const x = p1.study()
   x()
```
> * Person类的实例是 p1, p1.study()方法中的 this 就是 p1这个实例对象
> * study()方法放在了类的原型对象上, 所有实例都是通过原型对象找到这个方法来调用
> * 而 x 是通过实例p1.study, 找到了这个方法， 将方法拷贝了一份, 当 x() 调用时就是直接调用方法, 所以会丢失 this
```javascript
   function demo() {
      console.log(this)
   }
   demo() // 这个this就是window

   function demo1() {
      'use strict'
      console.log(this)
   }
   demo1() // 这个this为undefined
```
#### 实例自身的方法
```javascript
   function demo() {
      console.log(this)
   }
   demo() // 输出 window
   demo.bind({a: 1, b: 2}) // bind 返回一个新的函数, 什么也不输出
   const x = demo.bind({a: 1, b: 2})
   x() // 输出 {a: 1, b: 2}
```
#### state 简写方式
```javascript
   class Weather extends React.Component {
      state = {isHot: true} // 这会直接将属性挂到实例上
      changeWeather = function () {
         console.log(this) // 
      }
   }
   // 在 onClick = this.changeWeather 上, this.changeWeather 函数只是 onClick 的回调
   // 与之前的区别在于，现在的赋值语句，将changeWeather方法放到了实例自身
   class Weather extends React.Component {
      state = {isHot: true} // 这会直接将属性挂到实例上
      changeWeather(){ // 这种方法是挂在原型对象上，调用时要向外找一层
         console.log(this) // 
      }
   }
   // 但是箭头函数没有自己的 this，会找其外层函数的 this
   class Weather extends React.Component {
      state = {isHot: true}
      changeWeather = () => { 
         console.log(this) // 箭头函数的 this 是外层函数的 this
      }
   }
```
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
     * createRef 调用后可以返回一个容器，该容器可以存储被 ref 所标识的节点
       * `<input ref={this.myRef}/>` 会 将`<input/>`这个节点放到当前实例对象this的属性myRef容器里
       * 使用`this.myRef.current`就可以找到这个节点
       * 专人专用， 只能存一个节点，后来者居上
### 事件处理
1. 通过onXxx属性指定事件处理函数(注意大小写)
   - React使用的是自定义(合成)事件, 而不是使用的原生DOM事件
   - React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过event.target得到发生事件的DOM元素对象
## 组件的生命周期
### 理解
1. 组件从创建到死亡它会经历一些特定的阶段
2. React 组件中包含一系列钩子函数(生命周期回调函数), 会在特定的时刻调用
3. 我们在定义组件时， 会在特定的生命周期回调函数中，做特定的工作
### 生命周期流程图(旧)
![img_1.png](12_组件的生命周期/02_react生命周期(旧).png)
#### 生命周期的三个阶段(旧)
1. 初始化阶段：由 ReactDOM.render()触发——初次渲染
   - constructor()
   - componentWillMount()
   - render()
   - componentDidMount()
2. 更新阶段：由组件内部 this.setState()或父组件重新 render 触发
   - shouldComponentUpdate()
   - componentWillUpdate()
   - render()
   - componentDidUpdate()
3. 卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
    - componentWillUnmount()
### 生命周期流程图(新)
![img_2.png](12_组件的生命周期/03_react生命周期(新).png)
#### 生命周期的三个阶段(新)
1. 初始化阶段：由 ReactDOM.render()触发——初次渲染
    - constructor()
    - **getDerivedStateFromProps**()
    - render()
    - componentDidMount()
2. 更新阶段：由组件内部 this.setState()或父组件重新 render 触发
    - **getDerivedStateFromProps**()
    - componentWillUpdate()
    - render()
    - **getSnapshotBeforeUpdate**()
3. 卸载组件：由 ReactDOM.unmountComponentAtNode() 触发
    - componentWillUnmount()
### 重要的钩子
1. render(): 初始化渲染或更新渲染调用
2. componentDidMount(): 开启监听， 发送 ajax 请求
3. componentWillUnmount(): 做一些收尾工作, 如: 清理定时器
### 即将废弃的钩子
1. componentWillMount()
2. componentWillReceiveProps()
3. componentWillUpdate()
