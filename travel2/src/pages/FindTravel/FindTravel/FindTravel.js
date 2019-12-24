import React, { Component } from 'react';
import './style.scss'
import {connect} from 'react-redux'
import Scroll from '../../common/Scroll/Scroll'
import {Link} from 'react-router-dom'
import Swiper from 'swiper';
export class FindTravel extends Component {
    render() {
        return (
            <div className="page findTravel">
                {/* 滚动 */}
                <Scroll>
                    {/* 轮播图 */}
                    <div className="swiper-container" ref="container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide slide1">
                                    <img src="/img/banner1.png" alt=""/>
                            </div>
                            <div className="swiper-slide slide2">
                                   <img src="/img/banner2.png" alt=""/>

                            </div>
                            <div className="swiper-slide slide3">
                                   <img src="/img/banner3.png" alt=""/>

                            </div>
                        </div>

                    </div>
               <hr/>
               <Link to="/findTravel/hot100">
                <p className="content-tab" >
                    <span className="iconfont icon-icranking" >&nbsp;&nbsp;&nbsp;&nbsp;HOT旅行</span> <span className="iconfont icon-jiantouyou"></span>
                </p>
               </Link>
               <hr/>
                <p className="content-tab">
                    <span className="iconfont icon-fujin1" >&nbsp;&nbsp;&nbsp;&nbsp;发现附近旅行</span> <span className="iconfont icon-jiantouyou"></span>
                </p>
               <hr/>
                <p className="content-tab">
                    <span className="iconfont icon-fengjing" >&nbsp;&nbsp;&nbsp;&nbsp;搜索旅行</span> <span className="iconfont icon-jiantouyou"></span>
                </p>
               <hr/>
                <div className="needYourIdea">
                    {/* <span>我们需要</span> */}
                    <span className="iconfont icon-idea5"></span>
                    {/* <span>你的想法</span> */}
                </div>
                <p className="sendIdeaBox">
                    <span className="sendIdea">send idea</span>
                </p>
                </Scroll>

            </div>
        );
    }
    componentDidMount(){
        new Swiper (this.refs.container, {
          // Optional parameters
          direction: 'horizontal',
          loop: true,
          autoplay: {
            delay: 3000,//1秒切换一次
          },
          // // If we need pagination
          // pagination: {
          //   el: '.swiper-pagination',
          // },
        })
      }
}

const mapStateToPrpps = (state)=>{
    return{
    }
  }
  
  const mapDispatchToProps = (dispatch)=>{
    return{
    }
  }

export default connect(mapStateToPrpps,mapDispatchToProps)(FindTravel);

