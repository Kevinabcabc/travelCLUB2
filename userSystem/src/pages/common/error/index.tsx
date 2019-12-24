import React from 'react'
import { Empty} from 'antd';
import {Link} from 'react-router-dom'
const Error :React.FC<{}>=function Error(){
    return(
        <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
          marginTop:'200px'
        }}
        description={
          <span>
            404，出错了
          </span>
        }
      >
         <Link to="/">返回首页</Link>
      </Empty>
    )
}
export default Error