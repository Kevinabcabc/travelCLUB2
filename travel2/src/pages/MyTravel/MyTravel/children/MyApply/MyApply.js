import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import MyApplyItem from './children/MyApplyItem'

export class MyApply extends Component {
    render() {
        let myApplyTravels = this.props.myApplyTravels.myApplyTravels;
        // console.log(myApplyTravels);
        
        return (
            <div className="myapply">
                <div className="box">
                    {
                       myApplyTravels.map((item,index)=>{
                           return  <MyApplyItem key={index} {...item} />
                       }) 
                    }
                </div>
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

export default connect(mapStateToPrpps,mapDispatchToProps)(MyApply);


