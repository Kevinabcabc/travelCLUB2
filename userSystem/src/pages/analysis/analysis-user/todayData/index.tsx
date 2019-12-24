import React ,{memo} from 'react'
import { Spin, Empty } from 'antd';
import './style.scss'
const TodayData :React.FC<{flag:any}>= memo(function TodayData({flag}){
    
    const status = flag.get('status');
    const data = flag.get('data');
    
    if(status==='loading'){
        return(
            <div  className="todaData">

                <Spin tip="Loading..."></Spin>
            </div>

        )
    }else if(status==='success'){
        return (
            <div  className="todaData">
                <div className='todaDataBox'>   
                        <div>
                            <p>新用户</p>
                            <p className="data">{data.get('newUser')}</p>
                        </div>
                        <div>
                            <p>在线用户</p>
                            <p className="data">{data.get('online')}</p>
                        </div>
                        <div>
                            <p>新发布旅行</p>
                            <p className="data">{data.get('newTravels')}</p>
                        </div>
                        <div>
                            <p>用户总人数</p>
                            <p className="data">{data.get('allUser')}</p>
                        </div>
                </div>
            </div>
        )
    }else{
        return(
            <div  className="todaData">
                <Empty description='数据加载失败'/>
            </div>
        )
    }

})
export default TodayData;