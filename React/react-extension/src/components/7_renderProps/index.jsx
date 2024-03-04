import React, {Component} from 'react';
import './index.css'
import C from '../1_setState'

class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是 Parent 组件</h3>
                <A render={(name) => <C name={name}/>}/>
            </div>
        );
    }
}

class A extends Component {
    state = {name: 'Tom'}
    render() {
        const {name} = this.state
        return (
            <div className='a'>
                <h3>我是 A 组件</h3>
                {this.props.render(name)} {/*类似vue 的插槽技术， 预留一个位置，给传过来的组件*/}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h3>我是 B 组件, {this.props.name}</h3>
            </div>
        );
    }
}

export default Parent;