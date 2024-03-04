import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
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
                            <NavLink activeClassName="atguigu" className="list-group-item" to={'/about'}>About</NavLink>
                            <NavLink activeClassName="atguigu" className="list-group-item" to={'/home'}>Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由，下面是路由组件，通过<Home/>方式引入的是 一般组件  */}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}