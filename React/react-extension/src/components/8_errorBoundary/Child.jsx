import React, {Component} from 'react';

class Child extends Component {
    state = {
        users: 'abc',
        // users: [
        //     {id: '001', name: 'tom', age: 19},
        //     {id: '002', name: 'jack', age: 20},
        //     {id: '003', name: 'siri', age: 18},
        // ]
    }
    render() {
        return (
            <div>
                <h2>
                    我是 Child 组件
                </h2>
                <ul>
                    {
                        this.state.users.map((userObj) => {
                            return <h4 key={userObj.id}>{userObj.name}---{userObj.age}</h4>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Child;