import React, {Component} from 'react';

class About extends Component {
    render() {
        console.log('About组件接受到props', this.props)
        return (
            <div>
                我是About的内容
            </div>
        );
    }
}

export default About;