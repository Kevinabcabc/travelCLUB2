import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'

export class Header extends Component {

    render() {
        return (
            <div className="header">
                {this.props.headerTitle}
            </div>
        );
    }

}

const mapStateToPrpps = (state)=>{
    return{
        headerTitle:state.home.headerTitle,
        headerIsBack:state.home.headerIsBack,
    }
  }
  
const mapDispatchToProps = (dispatch)=>{
    return{

    }
}
  
  export default connect(mapStateToPrpps,mapDispatchToProps)(Header);
  