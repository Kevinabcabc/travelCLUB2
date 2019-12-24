import React ,{Component}from 'react';
import {NavLink} from 'react-router-dom'
import './style.scss'
import {connect} from 'react-redux'
const tabsData = [
    {id:1,title:'发现旅行',tab:'发现',icon:'iconfont icon-tianjiajiaose',path:'/findTravel'},
    {id:2,title:'发布旅行',tab:'发布',icon:'iconfont icon-jingdianxinxi',path:'/releaseTravel'},
    {id:3,title:'我的旅行',tab:'消息',icon:'iconfont icon-xiaoxi4',path:'/myTravel'},
    {id:4,title:'个人中心',tab:'我的',icon:'iconfont icon-iconfontgerenzhongxin',path:'/home'},
];
export class Tabs extends Component{

    changeAction(title){
        this.props.setHeaderTitle(title);
    }

    render (){
        return( <nav className="tabs">
            {
                tabsData.map(item=>(
                    <NavLink className="tab" key={item.id} onClick={this.changeAction.bind(this,item.title)} to={item.path}>
                        <span className={item.icon}></span>
                        <span className="text">{item.tab}</span>
                    </NavLink>
                ))
            }
        </nav>
    )}
}


const mapStateToPrpps = (state)=>{
    return{
    }
  }
  
const mapDispatchToProps = (dispatch)=>{
    return{
        setHeaderTitle(val){
        dispatch({
            type:'setHeaderTitle',
            val:val
        })
        },
        setHeaderBack(val){
            
        dispatch({
            type:'setHeaderBack',
            val:val
        })
        }
    }
}
  
export default connect(mapStateToPrpps,mapDispatchToProps)(Tabs);
  