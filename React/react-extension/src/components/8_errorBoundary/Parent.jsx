import React, {Component} from 'react';
import Child from "./Child";

// 错误边界只适用于生产环境，在开发环境中，只会闪一下依然报错
class Parent extends Component {
    state = {
        hasError: '' /* 用于标识子组件是否产生错误 */
    }
    /* 当 Parent 的子组件出现报错的时候，会触发调用，并携带错误信息 */
    static getDerivedStateFromError(error){
        console.log(error)
        return {hasError: error}
    }
    componentDidCatch() {
        console.log('渲染组件时出错！')
    }

    render() {
        return (
            <h1>
                我是 Parent 组件
                {this.state.hasError ? <h4>服务繁忙，请稍后再试！</h4> : <Child/>}
            </h1>
        );
    }
}

export default Parent;