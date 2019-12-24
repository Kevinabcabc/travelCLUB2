import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import MessageItem from './children/MessageItem'
import { Modal } from 'antd-mobile';
export class Message extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            modal1: false,
            content:'asdf'
          };
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }
    showProup(info,id){
        if(id){
            
            this.props.deleteTravelJoiner(id);
            setTimeout(() => {
                console.log(this.props.userinfo.joiner.length);
                this.props.handlemyMessage(this.props.userinfo.joiner.length);
            });
            return;
        }
        this.setState({
            ...this.state,
            modal1:true,
            content:info
        })
        // console.log(this.showModal);
        
    }
    render() {
        // console.log(this.props);
        // console.log(this.props.userinfo.joiner);
        return (
            <div  className="messages">
                {
                    this.props.userinfo.joiner.map((item,index)=>{
                        return <MessageItem showProup={this.showProup.bind(this)} key={index} {...item}/>
                    })
                }

                <Modal
                    visible={this.state.modal1}
                    transparent
                    maskClosable={false}
                    onClose={this.onClose('modal1')}
                    title="验证信息"
                    footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    // afterClose={() => { alert('afterClose'); }}
                    >
                    <div style={{ height: 100, overflow: 'scroll' }}>
                        {this.state.content}
                    </div>
                </Modal>
            </div>
        );
    }
}
const mapStateToPrpps = (state)=>{
    return{
            // myApplyTravels:state.findTravel,
            userinfo:state.user
        }
}
  
const mapDispatchToProps = (dispatch)=>{
    return{
        deleteTravelJoiner(data){
            dispatch({
                type:'deleteTravelJoiner',
                val:data
            })
        }
    }
}

export default connect(mapStateToPrpps,mapDispatchToProps)(Message);



