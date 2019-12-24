import React, { Component } from 'react';
import './style.scss'
import HeaderBack from '../../common/HeaderBack/HeaderBack'
import ImgLoader from './children/ImgLoader/ImgLoader'
import {connect} from 'react-redux'
import { TextareaItem ,DatePicker,List ,Modal } from 'antd-mobile';

function timestampToTime (timestamp) {
    const dateObj = new Date(+timestamp) // ps, 必须是数字类型，不能是字符串, +运算符把字符串转化为数字，更兼容
    const year = dateObj.getFullYear() // 获取年，
    const month = dateObj.getMonth()  // 获取月，必须要加1，因为月份是从0开始计算的
    const date = dateObj.getDate() // 获取日，记得区分getDay()方法是获取星期几的。
    return year + '-' + month + '-' + date ;
}

const alert = Modal.alert;
const showAlert = (title,content) => {
    const alertInstance = alert(title, content, [
      { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
      { text: '好的', onPress: () => console.log('ok') },
    ]);
  };


  
  const nowTimeStamp = Date.now();
  const now = new Date(nowTimeStamp);
const jonners = [
    {
        name:'你的故事',
        img:'/img/joinersImg/j1.png',
    },
    {
        name:'drake your',
        img:'/img/joinersImg/j2.png',
    },
    {
        name:'渐变',
        img:'/img/joinersImg/j3.png',
    },
    {
        name:'一直往南',
        img:'/img/joinersImg/j4.png',
    },
    {
        name:'silence',
        img:'/img/joinersImg/j5.png',
    },
    {
        name:'JOJO',
        img:'/img/joinersImg/j6.png',
    },
    {
        name:'mengHi',
        img:'/img/joinersImg/j7.png',
    },
    {
        name:'福州猛',
        img:'/img/joinersImg/j8.png',
    },
    {
        name:'关关雎鸠',
        img:'/img/joinersImg/j9.png',
    },
]
  let id = Math.floor(Math.random()*100000000);
  let viewNum = Math.floor(Math.random()*1000);
  let joinerNum = Math.floor(Math.random()*8+2);
  let commentNum = Math.floor(Math.random()*100);
export class NewTravel extends Component {
    constructor(props){
        super(props)
        this.state={
            date: now,
        }
    }
    SmtAction(){
        console.log();
        
        if(!this.imgLoader.state.files[0]){
            showAlert('图片','我们找不到图片呢');
            return;
        }
        if(!this.autoFocusInst.state.value){
            showAlert('地点','我们找不到地点呢');
            return;
        }
        if(!this.customFocusInst.state.value){
            showAlert('描述','我们找不到描述呢');
            return;
        }
        if(this.state.date=== now){
            showAlert('时间','你确定时间没错吗');
            return;
        }
        this.props.addNewTravel(
            {
                id:id,
                username:this.props.userInfo.name,
                userImg:this.props.userInfo.img,
                releaseTime:timestampToTime(Number(this.state.date)),
                title:this.autoFocusInst.state.value,
                img:this.imgLoader.state.files[0].url,
                views:viewNum,
                numOfJoin:joinerNum,
                commentNum:commentNum,
                joiner:jonners.slice(joinerNum),
            }
        );
        this.props.history.goBack();
    }
    getImgUrl(){
        // return this.state.file[0].url
        
    }
    render() {
        return (
            <div className="newTravel page subpage">
                <HeaderBack {...this.props}/>
                <div className="newTravelContent">

                    <div className="imgLoaderBox">
                        <ImgLoader ref={el => this.imgLoader = el} getImgUrl className="imgLoader"/>
                    </div>
                    <TextareaItem
                        title="地点"
                        placeholder="填写旅行的 标题"
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                        rows={1}
                        count={15}
                    />
                    <hr/>
                    <TextareaItem
                        title="描述"
                        placeholder="去旅行的感想和相对大家说的话"
                        data-seed="logId"
                        autoHeight
                        rows={4}
                        // count={60}
                        ref={el => this.customFocusInst = el}
                    />

                    <DatePicker
                        minDate={new Date(nowTimeStamp)}
                        mode='date'
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                        >
                        <List.Item arrow="horizontal">时间</List.Item>
                    </DatePicker>
                    {/* <PickerView
                    data={province}
                    value={['02', '02-1', '02-1-1']}
                    /> */}


                    <p className="newTravelSMT"  onClick={this.SmtAction.bind(this)}>发布</p>
                </div>
            </div>
        );
    }
}

const mapStateToPrpps = (state)=>{
    return{
        userInfo:state.user
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
        addNewTravel(data){
            dispatch({
                type:'addNewTravel',
                data:data
            });
          }
    }
  }

export default connect(mapStateToPrpps,mapDispatchToProps)(NewTravel);



