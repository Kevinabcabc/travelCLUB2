import React, { Component } from 'react';
import './style.scss'
import { Tabs, Badge } from 'antd-mobile';
import Message from './children/Message/Message'
import MyApply from './children/MyApply/MyApply'
import {connect} from 'react-redux'
export class MyTravel extends Component {
    constructor(props){
        super(props);
        console.log(this.props.userinfo.joiner);
        let a = this.props.userinfo.joiner.length;
        let b = this.props.myApplyTravels.myApplyTravels.length;
        this.state = {
            myMessage:a,
            myApply:b,
        }
      
    }

    handlemyMessage(n){
        console.log(n);
        
        this.setState({
            myMessage:n
        })
    }
    
    handlemyApply(n){
        this.setState({
            myApply:n
        })
    }
    render() {
        let tabs = [
            { title: <Badge text={this.state.myMessage}>收到来信</Badge> },
            { title: <Badge text={this.state.myApply}>我的申请</Badge> },
          ];
        return (
            <div className="page myTravel">
                
                <Tabs tabs={tabs}
                tabBarActiveTextColor ='#4b166c'
                tabBarInactiveTextColor="#333"
                tabBarUnderlineStyle={{border:'none',height:'1px',backgroundImage: 'linear-gradient(90deg,#62238a, #b61588)', transform: 'scale(0.5)'}}
                initialPage={1}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', tabBarActiveTextColor :'#999', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>

                        <Message handlemyMessage={this.handlemyMessage.bind(this)}/>

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <MyApply handlemyApply={this.handlemyApply.bind(this)}/>
                    </div>
                </Tabs>
            </div>
        );
    }
}

const mapStateToPrpps = (state)=>{
    return{
            myApplyTravels:state.findTravel,
            userinfo:state.user
        }
}
  
const mapDispatchToProps = (dispatch)=>{
    return{
    }
}

export default connect(mapStateToPrpps,mapDispatchToProps)(MyTravel);


