import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import TravelInfo from '../../common/TravelInfo/TravelInfo'
import  Scroll from '../../common/Scroll/Scroll'
const NewTravel =()=>(
    <Link to="/releaseTravel/newTravel">
        <div className="newTravel">
            <p className="iconfont icon-fabu1"></p>
            <p className="newTravelText">发布一条旅行</p> 
        </div>
    </Link>
); 

export class ReleaseTravel extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="page releaseTravel"> 
            <Scroll className="scroll">
                 {
                     this.props.userInfo.userTravels.map(item=>{
                         console.log(item);
                         return <TravelInfo share={true} {...item} key={item.id}/>
                        })
                    }
                    
                        <NewTravel/>
                    

            </Scroll>
            </div>
        );
    }
}


const mapStateToPrpps = (state)=>{
    return{
        userInfo:state.user,
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
    }
  }

export default connect(mapStateToPrpps,mapDispatchToProps)(ReleaseTravel);


