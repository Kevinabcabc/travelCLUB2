import React, { Component } from 'react';
import './style.scss'
export class MytravelItem extends Component {
    render() {
        console.log(this.props.info);
        
        return (
            <div className="mytravelItem">
                <div className="imgbox">
                    <img src={this.props.info.img} alt=""/>
                </div>
                <div className="info">
                    <h3>{this.props.info.title}</h3>
                    <p>{this.props.info.releaseTime}</p>
                    <span>参与人数：{this.props.info.numOfJoin}人</span>
                </div>
            </div>
        );
    }
}

export default MytravelItem;
