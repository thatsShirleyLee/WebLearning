import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Detail from "./Detail";

class Messages extends Component {
    state = {
        messageArr: [
            {id: '01', title: '消息1'},
            {id: '02', title: '消息2'},
            {id: '03', title: '消息3'},
        ]
    };

    // 编程式路由导航，不需要用户自己点击
    replaceShow = (id, title) => {
        // replace跳转 + 携带 params 参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转 + 携带 search 参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // replace跳转 + 携带 state 参数
        this.props.history.replace(`/home/message/detail`, {id, title})
    }

    pushShow = (id, title) => {
        // push跳转 + 携带 params 参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转 + 携带 search 参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // replace跳转 + 携带 state 参数
        this.props.history.push(`/home/message/detail`, {id, title})

    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }
    render() {
        const {messageArr} = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map(msgObj => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link to={{pathname: "/home/message/detail" , state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>

                                    &nbsp;<button onClick={() => {this.pushShow(msgObj.id, msgObj.title)}}>push查看</button>
                                    &nbsp;<button onClick={() => {this.replaceShow(msgObj.id, msgObj.title)}}>replace查看</button>
                                </li>
                            );
                        })
                    }
                </ul>
                <hr/>
                {/* 声明接收 params 参数 */}
                {/*<Route path={"/home/message/detail/:id/:title"} component={Detail}/>*/}

                {/* search 参数无需声明接收，正常注册路由即可*/}
                {/*<Route path={"/home/message/detail"} component={Detail}/>*/}

                {/*state 参数无需声明接收，正常注册路由即可*/}
                <Route path={"/home/message/detail"} component={Detail}/>

                <button onClick={this.back}>后退</button>&nbsp;
                <button onClick={this.forward}>前进</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        );
    }
}

export default Messages;