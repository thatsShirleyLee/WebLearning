import React, {Component} from 'react';

export default class Demo extends Component {
    state = {count: 0}
    add = () => {
        // 对象式的 setState
        // const {count} = this.state
        // // this.setState({count: count+1})
        // // console.log(this.state.count)
        // this.setState({count: count+1}, () => {
        //     console.log(this.state.count)
        // })
        // 函数式的 setState
        // this.setState((state, props) => {
        //     console.log(state, props)
        //     return {count: state.count+1} // stateChange对象
        // }, () => {
        //     console.log(this.state.count, this.props.x)
        // })
        this.setState(state => ({count: state.count+1}))
        /*
            1.对象式的setState是函数式的setState的简写方式(语法糖)
            2.使用原则：
                (1).如果新状态不依赖于原状态 ===> 使用对象方式
                (2).如果新状态依赖于原状态 ===> 使用函数方式
                (3).如果需要在setState()执行后获取最新的状态数据,
                    要在第二个callback函数中读取
         */
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点击+1</button>
            </div>
        );
    }
}