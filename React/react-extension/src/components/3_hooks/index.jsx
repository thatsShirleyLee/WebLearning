import React, {Component} from 'react';
import ReactDOM from "react-dom";

// 类式组件
/*class Demo extends Component {
    state = {count: 0}
    myRef = React.createRef()
    show = () => {
        alert(this.myRef.current.value)
    }
    add = () => {
        this.setState(state => ({count: state.count+1}))
    }
    unmount = () => {
        this.props.root.unmount()
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(state => ({count: state.count+1}))
        },1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.myRef}/>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>点击提示数据</button>
            </div>
        );
    }
}*/

// 函数式组件
function Demo() {
    /*
        (1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
        (2). 语法: const [xxx, setXxx] = React.useState(initValue)
        (3). useState()说明:
            参数: 第一次初始化指定的值在内部作缓存
            返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
        (4). setXxx()2种写法:
            setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
            setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
    */
    const [count, setCount] = React.useState(0) // useState返回的值，解包后第一个值为状态，第二个值为更新状态的函数
    const myRef = React.useRef()
    /*
        (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
        (2). React中的副作用操作:
            发ajax请求数据获取
            设置订阅 / 启动定时器
            手动更改真实DOM
        (3). 语法和说明:
            useEffect(() => {
                // 在此可以执行任何带副作用操作
                return () => { // 在组件卸载前执行
                    // 在此做一些收尾工作, 比如清除定时器/取消订阅等
                }
            }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行

        (4). 可以把 useEffect Hook 看做如下三个函数的组合
            componentDidMount()
            componentDidUpdate()
            componentWillUnmount()
    */
    // console.log(count, setCount);
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count+1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }  // React.useEffect 返回的函数就相当于 ComponentWillUnmount
    }, [])
    function add() {
        setCount(count+1)
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))  // react 18弃用
    }
    function show() {
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type='text' ref={myRef}/>
            <h1>当前求和为：{count}</h1>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示数据</button>
        </div>
    );
}

export default Demo;