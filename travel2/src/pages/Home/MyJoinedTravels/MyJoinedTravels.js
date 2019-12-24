import React, { Component } from 'react';
import './style.scss'
import HeaderBack from '../../common/HeaderBack/HeaderBack';
import {connect} from 'react-redux'
import Scroll from '../../common/Scroll/Scroll'
import MytravelItem from './MytravelItem/MytravelItem'
export class MyJoinedTravels extends Component {
    render() {
        return (
            <div className="page subpage myJoinedTravels">
                <HeaderBack history={this.props.history}></HeaderBack>
                <div className="scrollBox">
                    <Scroll>
                      {
                          this.props.travelsList.list.map(item=>{
                            return  <MytravelItem key={item.id} info={item}/>
                          })

                      }  
                    </Scroll>
                </div>

            </div>
        );
    }
}

const mapStateToPrpps = (state)=>{
    return{
        travelsList:state.travels,
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
  
  export default connect(mapStateToPrpps,mapDispatchToProps)(MyJoinedTravels);
  
  