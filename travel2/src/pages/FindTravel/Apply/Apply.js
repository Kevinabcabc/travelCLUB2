import React, { Component } from 'react';
import './style.scss'
import HeaderBack from '../../common/HeaderBack/HeaderBack'
import {connect} from 'react-redux'
import { TextareaItem ,Modal } from 'antd-mobile';

const alert = Modal.alert;
const showAlert = (title,content) => {
    const alertInstance = alert(title, content, [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '好的', onPress: () => console.log('ok') },
    ]);
  };

export class Apply extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            id:'',
            reason:'',
        }
        this.travelInfo  = props.travelList.list.filter(item=>{
            return item.id === Number(props.match.params.id);
            ;
        })[0];
        this.imgUrl = this.travelInfo.img; 
    }

    applySmtAction(){

        if(!this.customFocusInst.state.value){
            showAlert('申请理由','请填写申请的理由');
            return
        }

        this.setState({
            ...this.state,
            id:this.props.userinfo.id,
            reason:this.customFocusInst.state.value,
        },function(){
            // console.log(this.travelInfo);
            
            this.props.applyOneTravel(this.travelInfo);
            this.props.history.push('/myTravel');
            let joinerInfo = {
                id:new Date().getTime(),
                user:this.props.userinfo,
                travel:this.travelInfo,
                reason:this.state.reason
            }
            this.props.addTravelJoiner(joinerInfo)

            
        })  
    }
    render() {
        return (
            <div className = 'page subpage apply'>
                <HeaderBack {...this.props}/>
                <div className="applyWrapper">

                    <div className="imgBox">
                        <img src={this.imgUrl} alt=""/>
                    </div>

                    <div className="userInfo">
                        <div className="imgbox">
                            <img src={this.travelInfo.userImg} alt=""/>
                            <p className="name">
                                {this.travelInfo.username}
                            </p>
                        </div>
                        <span>
                            nothing
                        </span>
                    </div>
                    
                    <div className="intro">
                    <TextareaItem
                        title="地点"
                        value={this.travelInfo.title}
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                        rows={1}
                        editable={false}
                        count={15}
                    />
                    <hr/>
                    <TextareaItem
                        title="时间"
                        value={this.travelInfo.releaseTime}
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                        rows={1}
                        editable={false}
                        count={15}
                    />
                    <hr/>
                    <TextareaItem
                        title="申请"
                        placeholder="去旅行的感想和相对大家说的话"
                        data-seed="logId"
                        autoHeight
                        rows={4}
                        // count={60}
                        ref={el => this.customFocusInst = el}
                    />
                    </div>

                    <div className="applyBtn" onClick = {this.applySmtAction.bind(this)}>
                        发送申请
                    </div>
                    
                </div>


            </div>
        );
    }
}

const mapStateToPrpps = (state)=>{
    return{
        travelList:state.travels,
        userinfo:state.user
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
        applyOneTravel(data){
            dispatch({
                type:'applyOneTravel',
                val:data
            });
        },
        addTravelJoiner(data){
            dispatch({
                type:'addTravelJoiner',
                val:data
            })
        }
    }
  }

export default connect(mapStateToPrpps,mapDispatchToProps)(Apply);


