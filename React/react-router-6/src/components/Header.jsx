import React from 'react';
import {useNavigate} from "react-router-dom";


function Header(props) {
    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }function forward() {
        navigate(1)
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Route Demo</h2></div>
            <button onClick={back}>⬅️后退</button>&nbsp;&nbsp;
            <button onClick={forward}>前进➡️</button>
        </div>
    );
}

export default Header;