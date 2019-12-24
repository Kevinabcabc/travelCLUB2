import React, { Component } from 'react';
import './style.scss'
import 'whatwg-fetch'
import {connect} from 'react-redux'
// import Scroll from '../../common/Scroll/Scroll'
export class Home extends Component {
    toMyTravels(){
      console.log(this.props);
      this.props.history.push('/home/myJoinedTravels');
    }
    render(){
      console.log(this.props);
        return (
            <div className="page home">
                <div className="ImgandName">
                  <div className="imgbox">
                    <img src={this.props.userinfo.img} alt=""/>
                  </div>
                  <div className="name">
                    <h3>{this.props.userinfo.name}</h3>
                    <input type="text" placeholder='编辑个性签名'/>
                  </div>
                </div>

                <div onClick={this.toMyTravels.bind(this)} className="myTravelBox">
                      <p className="iconfont icon-icon-test15"></p>
                      <span>查看我的旅行</span>
                </div>

            </div>
        );
    }

}

const mapStateToPrpps = (state)=>{
  return{
      userinfo:state.user,
      // headerIsBack:state.home.headerIsBack,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    // setHeaderTitle(val){
    //   dispatch({
    //     type:'setHeaderTitle',
    //     value:val
    //   })
    // },
    // setHeaderBack(val){
    //   dispatch({
    //     type:'setHeaderBack',
    //     value:val
    //   })
    // }
  }
}

export default connect(mapStateToPrpps,mapDispatchToProps)(Home);



