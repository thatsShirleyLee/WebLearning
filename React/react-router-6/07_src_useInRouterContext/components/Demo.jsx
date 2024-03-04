import React from 'react';
import {useInRouterContext} from "react-router-dom";

function Demo(props) {
    // 作用：如果组件在 `<Router>` 的上下文中呈现，则 `useInRouterContext` 钩子返回 true，否则返回 false。
    console.log('Demo: ',useInRouterContext()) /* ?做第三方库时，需要知道别人是否在路由里使用 */
    return (
        <div></div>
    );
}

export default Demo;