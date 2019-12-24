import React,{memo, useEffect,useRef} from 'react'
import { Spin, Empty } from 'antd';
import './style.scss'
import useLoading from '../../utils/useLoading'

var echarts = require('echarts/lib/echarts');
require("echarts/lib/chart/line");
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title'); 
    
function getEchartOptions(data:any){
    const legends = ['newCount','visitedCount','newtravelCount'];
    const dates:string[]=[];
    const series = legends.map(item=>{
        return {
                name:item,
                type:'line',
                stack: '总量',
                data:data.toJS().map((obj:any)=>{
                    return obj[item];
                })
        }
    })
    data.toJS().forEach((item:any)=>{
        // console.log(item);
        dates.push(item.date);
        // console.log(dates);
    });
    
    return {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:legends
        },
        grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dates
        },
        yAxis: {
            type: 'value'
        },
        series: series
    }
};




const AnalysisDataLine:React.FC<{data:any}> = memo(function AnalysisDataLine({data}){
   const lineData = data.get('data');
   const status = data.get('status');

    const contentRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
    if(status === 'success'){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(contentRef.current);
      const options = getEchartOptions(lineData);
      // 绘制图表
      myChart.setOption(options);
    }
  }, [lineData, contentRef, status]);

  const dataDom = lineData&&(<div className="todaData" ref={contentRef}>
        </div>)
    const loadingDataDom = useLoading(status,dataDom);
    return ( <div>
            {loadingDataDom}
    </div>)

})

export default AnalysisDataLine;