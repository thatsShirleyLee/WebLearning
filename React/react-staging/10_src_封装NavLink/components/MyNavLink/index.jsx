import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName="atguigu" className="list-group-item"  {...this.props}/>
        );
    }
}

export default MyNavLink;