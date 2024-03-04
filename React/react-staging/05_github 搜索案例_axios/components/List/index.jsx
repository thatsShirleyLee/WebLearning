import React, {Component} from 'react';
import './index.css';

export default class List extends Component {
    render() {
        const {isFirst, isLoading, err, users} = this.props;
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入关键词进行搜索</h2> :
                        isLoading ? <h2>Loading...</h2> :
                            err ? <h2 style={{color: 'red'}}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                <img alt="avatar" src={userObj.avatar_url} style={{width: 100}} />
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                    })
                }
            </div>
        );
    }
}