import React, { Component } from 'react';
import  './style.scss'
export class MyApplyItem extends Component {
    render() {
        return (
            <div className="myApplyItem">
                <div className="imgbox">
                    <img src={this.props.img} alt=""/>
                </div>
                <div className="info">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.releaseTime}</h4>
                    <p>人数：{this.props.numOfJoin}人</p>
                    <span>审核中</span>
                </div>
            </div>
        );
    }
}

export default MyApplyItem;
