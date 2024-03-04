import React, {PureComponent} from 'react';
import './index.css'

/*
    Component的2个问题
        1.只要执行setState(),即使不改变状态数据, 组件也会重新render()
        2.只当前组件重新render(), 就会自动重新render子组件 ==> 效率低

    办法1:
        重写shouldComponentUpdate()方法
        比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
    办法2:
        使用PureComponent
        PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
    注意:
        只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false
        不要直接修改state数据, 而是要产生新数据
    项目中一般使用PureComponent来优化
*/


export default class Parent extends PureComponent {
    state = {carName: '奔驰', stus: ['小李', '小张', '小胡']}
    addStu = () => {
        const {stus} = this.state
        // stus.unshift('小刘')
        // this.setState({stus})
        this.setState({stus: ['小刘', ...stus]})  // 以字面量的方式重新赋值
    }
    changeCar = () => {
        /*const obj = this.state
        obj.carName = '迈巴赫'
        this.setState(obj)*/  // obj 和 this.state 地址一样, PureComponent认为状态并没有发生改变，因此不更新
        this.setState({carName: '迈巴赫'}) // 需要使用字面量的方式重新创建一个地址不一样的 state
    }
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        // console.log(this.props, this.state);    // 目前的 props 和 state
        // console.log(nextProps, nextState);  // 接下来要变化的目标 props 和 state
        return this.state.carName !== nextState.carName;
    }*/

    render() {
        const {carName} = this.state
        console.log('Parent---render');
        return (
            <div className='parent'>
                <h3>我是Parent</h3>
                <span>我的车的牌子是：{carName}</span><br/>
                {this.state.stus}&nbsp;
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addStu}>添加小刘</button>
                <Child carName='奥拓'/>
            </div>
        );
    }
}

class Child extends PureComponent {
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(this.props, this.state);    // 目前的 props 和 state
        console.log(nextProps, nextState);  // 接下来要变化的目标 props 和 state
        return this.props.carName !== nextProps.carName;
    }*/
    render() {
        console.log('Child---render');
        return (
            <div className='child'>
                <h3>我是Child</h3>
                <span>我接收到的车的牌子是：{this.props.carName}</span>
            </div>
        );
    }
}