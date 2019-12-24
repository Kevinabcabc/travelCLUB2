import React from 'react'
import { Empty } from 'antd';
import {Link} from 'react-router-dom'

const Forbidden :React.FC<{}>=function Forbidden(){
    return(
        <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
          marginTop:'200px'
        }}
        description={
          <span>
            403,对不起，你没有权限访问
          </span>
        }
      >
         <Link to="/">返回首页</Link>
      </Empty>
    )
}
export default Forbidden