import React, { Component } from 'react';
import './style.scss'
import Joiners from './children/Joiners'
export class TravelInfo extends Component {
    constructor(props){
        super(props);
        console.log(props);
        
    }
    applyAction(){
        console.log(this.props);
        this.props.history.push(`/findTravel/apply/${this.props.id}`);
    }
    render() {
        
        return (
            <div className="travelInfo">
                <div className="userInfoBox">
                    <div className="imgBox">
                        <img src={this.props.userImg} alt=""/>
                    </div>

                    <div className="userNameAndOther">
                        <p className="userName">{this.props.username}</p>
                        <p className="someuserTravelInfo"> <span>时间：{this.props.releaseTime}</span><span className="iconfont icon-dot1"></span><span>{this.props.views}次浏览</span><span className="iconfont icon-dot1"></span><span className="iconfont icon-icon-test15"></span></p>

                    </div>

                    <span className="iconfont icon-dot"></span>
                </div>
                <p className="tracelTitle">{this.props.title}</p>

                <img src={this.props.img} alt=""/>

                <div className="joinAndComment">
                    <p className="numberOfJoin">
                        <span className="iconfont icon-renshu1"></span>
                        <span>{this.props.numOfJoin}人</span>
                    </p>
                    <p className="numberOfComment">
                        {this.props.commentNum}条评论
                    </p>
                </div>
                <hr/>

                <div className="joiner">
                    <p className="joiner-title">
                        <span>参与者</span>
                        <span className="iconfont icon-jiantou1"> 查看所有人</span>
                    </p>

                    <Joiners joiner={this.props.joiner}/>
                    
                </div>
                <hr/>
                {
                    
                    
                    this.props.share? "": <div className="infoTabs">
                        <span onClick = {this.applyAction.bind(this)} className="iconfont icon-add">&nbsp;申请</span>
                        <span className="iconfont icon-comment">&nbsp;评论</span>
                        <span className="iconfont icon-share">&nbsp;分享</span>
                    </div>
                }
            
                {

                  
                }
            </div>
        );
    }
}

export default TravelInfo;
