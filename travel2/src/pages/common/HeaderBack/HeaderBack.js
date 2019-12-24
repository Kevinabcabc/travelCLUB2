import React, { Component } from 'react';
import './style.scss'
export class HeaderBack extends Component {
    
    render() {
        return (
            <div className="headerBack" >
                <span className="iconfont icon-Left" onClick={this.props.history.goBack}></span>
                <img src="/img/logo.png" alt=""/>
            </div>
        );
    }
}

export default HeaderBack;
