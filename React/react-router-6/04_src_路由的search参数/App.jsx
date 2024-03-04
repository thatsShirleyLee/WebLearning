// rcc --> 创建类式组件

// rsf --> 创建函数式组件
import React from 'react';
import {NavLink, useRoutes} from "react-router-dom";
import routes from "./routes";


function App(props) {
    /*根据路由表生成对应的路由规则*/
    const element = useRoutes(routes)
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
                        <NavLink className='list-group-item' to="/about">About</NavLink>
                        <NavLink className='list-group-item' end to="/home">Home</NavLink> {/*end: 子级路由匹配上，自己会失去高亮效果*/}
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/*注册路由*/}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;