import React from 'react'
import { Spin, Empty } from 'antd';


function useLoading(status:string,dom:React.ReactNode){

    if (status === 'loading'){
        return  (<div className="todaData">
                    <Spin tip="Loading..."></Spin>
                </div>)
    }else if (status === 'success'){
        return dom
    }else{
        return (
        <div  className="todaData">
            <Empty description='数据加载失败'/>
        </div>
        )
    }
}

export default useLoading;