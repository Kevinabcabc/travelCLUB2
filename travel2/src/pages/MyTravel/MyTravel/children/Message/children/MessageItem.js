import React, { Component } from 'react';
import './style.scss'
export class MessageItem extends Component {
    seeMoreAction(){
        console.log(this.props);
        this.props.showProup(this.props.reason);
    }
    rejectAction(){
        this.props.showProup('申请已拒绝',this.props.id);
    }
    render() {
        
        return (
            <div className="messageItem">
                <div className="imgbox">
                    <img src={this.props.travel.img} alt=""/>
                </div>
                <div className="info">
                    <div className="userInfo">
                        <div className="imgBoxWraper">
                            <div className="imgBox">
                                <img src={this.props.user.img} alt=""/>
                            </div>
                            <h3>{this.props.user.name}</h3>
                        </div>
                        <span>申请加入您的旅行</span>
                    </div>

                    <p onClick={this.seeMoreAction.bind(this)}>查看验证信息</p>

                    <span className="action">同意</span><span className="action reject" onClick={this.rejectAction.bind(this)}>拒绝</span>
                </div>
            </div>  
        );
    }
}

export default MessageItem;
