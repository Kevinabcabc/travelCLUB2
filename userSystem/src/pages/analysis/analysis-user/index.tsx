import React ,{useState,useCallback,useEffect,useMemo}from 'react'
import { Collapse, Icon } from 'antd';
import {List,Set} from 'immutable'
import {useDispatch,useSelector} from 'react-redux'
import {requestAnalysisUserData} from '../../../store/models/analysis'
import TodayData from './todayData'
import AnalysisDataLine from '../../../components/analysisDataLine'
const { Panel } = Collapse;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const AnalysisUser :React.FC<{}>=function AnalysisUser(){
    const [hasselectedBorders, hassetselectedBorders] = useState(List(['-1']));
    // console.log(selectedBorders.toJS());
    const dispatch = useDispatch();
    //第一次请求数据

    useMemo(()=>{
      dispatch(requestAnalysisUserData(-1));
    },[dispatch]);

    const useData = useSelector(state=>(state as any).getIn(['analysis','user']));


    const selectAction = useCallback(
      (dataArr:string[]|string)=>{
       if(typeof dataArr === 'object'){
          dataArr.forEach(item=>{
            if(useData.toJS()[item].status === 'waiting'){
              dispatch(requestAnalysisUserData(Number(item)));
            }
          })
       }

        // console.log(useData.toJS());

        if(dataArr !== [] && typeof dataArr !== 'string'){
          const set = Set([...dataArr,...hasselectedBorders.toJS()])
          hassetselectedBorders(List(set));
        }
        
        // console.log(selectedBorders.toJS());
        // dispatch(requestAnalysisUserData(7));
      
      },[dispatch,hasselectedBorders,hassetselectedBorders]);  

const dataLineArr = [
  {
    header:"七日数据统计",
    key:'7'
  },
  {
    header:"十五日数据统计",
    key:'15'
  },
  {
    header:"三十日数据统计",
    key:'30'
  },
  {
    header:"半年数据统计",
    key:'180'
  },
  {
    header:"一年数据统计",
    key:'360'
  },
]
    return(
        <Collapse
          bordered={false}
          defaultActiveKey={['-1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
          expandIconPosition={"right"}
          onChange={selectAction}
        >
        <Panel header="昨日数据统计" key="-1" style={customPanelStyle}>
          <TodayData  flag={useData.get('-1')}/>
        </Panel>

        {
          dataLineArr.map(item=>{
            return <Panel header={item.header} key={item.key} style={customPanelStyle}>
                      <AnalysisDataLine data={useData.get(item.key)}/>
                  </Panel>
          })
        }
      </Collapse>
    )
}
export default AnalysisUser