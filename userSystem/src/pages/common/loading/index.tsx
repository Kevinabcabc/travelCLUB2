import React from 'react'
import { Spin } from 'antd';
import './style.scss'
const Loading :React.FC<{}>=function Loading(){
    return(
        <div className="loading">
            <Spin size="large" />
        </div>
    )
}
export default Loading