import React ,{Component}from 'react';
import {NavLink} from 'react-router-dom'
import './style.scss'
import store from '../../store'

const tabsData = [
    {id:1,title:'发现旅行',icom:'',path:'/findTravel'},
    {id:2,title:'发布旅行',icom:'',path:'/releaseTravel'},
    {id:3,title:'我的旅行',icom:'',path:'/myTravel'},
    {id:4,title:'个人中心',icom:'',path:'/home'},
];
export default class Tabs extends Component{

    changeAction(title){
        store.dispatch({type:'setHeaderTitle',title})
    }

    render (){
        return( <nav className="tabs">
            {
                tabsData.map(item=>(
                    <NavLink className="tab" key={item.id} onClick={this.changeAction.bind(this,item.title)} to={item.path}>
                        <span className="text">{item.title}</span>
                    </NavLink>
                ))
            }
        </nav>
    )}
}