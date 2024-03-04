import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import MyNavLink from "./components/MyNavLink";
import About from "./pages/About";  // 路由组件 --> pages, 由<Route>包裹
import Home from "./pages/Home";  // 路由组件 --> pages
import Header from "./components/Header";  // 一般组件 --> components

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生 html 中， 靠<a>跳转不同页面 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/* 在 React 中靠路由链接实现切换组建 -- 便携路由链接 */}
                            {/* 标签体会作为 props 的 children 属性直接传过去 */}
                            <MyNavLink to={"/about"}>About</MyNavLink>
                            <MyNavLink to={"/home"}>Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由，下面是路由组件，通过<Home/>方式引入的是 一般组件  */}
                                {/* 包裹 Switch 组件 当匹配到路由就不会继续向下匹配，效率比较高*/}
                                <Switch>
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    {/* 路由匹配不上时，默认重定向打开 /about */}
                                    <Redirect to={"/about"}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}