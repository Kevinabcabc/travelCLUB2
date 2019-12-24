import React, { Component } from 'react';
import './style.scss'
import HeaderBack from '../../common/HeaderBack/HeaderBack'
import TravelInfo from '../../common/TravelInfo/TravelInfo'
import Scroll from '../../common/Scroll/Scroll'
import {connect} from 'react-redux'

export class hot100 extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="page subpage hot100">
                <HeaderBack {...this.props}/>
                <Scroll className="scroll">
                    <div className="hot-content">
                        {
                            this.props.travelList.list.map(item=>{
                                return <TravelInfo  history = {this.props.history} {...item} key={item.id}/>
                            })
                        }
                    </div>
                    <div className="whiteSpace"></div>
                </Scroll>
            </div>
        );
    }
    componentDidMount(){
    }
}
const mapStateToPrpps = (state)=>{
    return{
        travelList:state.travels
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
    }
  }

export default connect(mapStateToPrpps,mapDispatchToProps)(hot100);

