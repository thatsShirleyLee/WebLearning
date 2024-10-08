import React, {Component} from 'react';
import Count from './containers/Count'
import store from "./redux/store";
class App extends Component {
    render() {
        return (
            <div>
                {/* 给 Count 容器组件传递 store*/}
                <Count store={store}/>
            </div>
        );
    }
}

export default App;
