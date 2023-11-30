import React, {Component} from 'react';
import {Button, DatePicker} from 'antd';
import {WechatOutlined, SearchOutlined} from '@ant-design/icons'
import 'antd/dist/antd.less'


const { RangePicker } = DatePicker;
class App extends Component {
    render() {
        return (
            <div>
                App...
                <Button type='primary'>点我</Button>
                <Button>点我</Button>
                <WechatOutlined />
                <Button type='primary' icon={<SearchOutlined/>}>
                    Search
                </Button>
                <DatePicker/>
                <RangePicker/>
            </div>
        );
    }
}

export default App;