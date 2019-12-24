import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import {  Breadcrumb } from 'antd';
import useRouteInfo from '../../utils/useRouteInfo'

const AppBreadcrumb:React.FC<{}> = function AppBreadcrumb(){
    const {breadcrumb} = useRouteInfo();
    if(!breadcrumb){
      return null
    }
    return(
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          breadcrumb.map((item,index:number)=>(
            <Breadcrumb.Item key={index}>
              { 
                  item.to?<Link to={item.to}>
                    {item.title}
                  </Link>:item.title
              }
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    )
}

export default AppBreadcrumb;