import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

function Home(props) {
    const [sum, setSum] = useState(1);
    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum === 2 ? <Navigate to="/about" replace={true}/> : <h4>当前 sum 的值: {sum}</h4>} {/* replace用于控制跳转模式： replace={false}或不写，默认为push模式，留下访问记录； replace={true}不会留下记录*/}
            <button onClick={() => {setSum(2)}}>点我将 sum 变成2</button>
        </div>
    );
}

export default Home;