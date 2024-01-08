// rcc --> 创建类式组件

// rsf --> 创建函数式组件
import React from 'react';
import {NavLink, Routes, Route, Navigate} from "react-router-dom";
import About from "./page/About";
import Home from './page/Home'


function App(props) {
    function computedClassName({isActive}) {
        return isActive ? 'list-group-item atguigu' : 'list-group-item'
    }
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/*路由链接*/}
                        <NavLink className={computedClassName} to="/about">About</NavLink>
                        <NavLink className={computedClassName} to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/*注册路由*/}
                            <Routes>
                                <Route path="/about" element={<About/>}/>
                                {/*<Route caseSensitive path="/about" element={<About/>}/> caseSensitive: 用于指定是否匹配(规则和路由)时区分大小写*/}
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/" element={<Navigate to="/about"/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;