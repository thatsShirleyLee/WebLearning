import React, {Component} from 'react';
import Count from './containers/Count' // 引入 Count 容器组件
import Person from "./containers/Person";  // 引入 Person 容器组件
class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <hr/>
                <Person/>
            </div>
        );
    }
}

export default App;
