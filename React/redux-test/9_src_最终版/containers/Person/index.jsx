import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj = {id: nanoid(), name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div>
                <h1>我是 Person 组件, 上方组件总和为 {this.props.count}</h1>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>&nbsp;
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>ADD</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>名字：{p.name} 年龄：{p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }), // 映射状态
    {
        addPerson
    }
)(Person)