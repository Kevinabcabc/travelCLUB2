import React, { Component } from 'react';
import './style.scss'
import Swiper from 'swiper';

const JoinerBox =(props)=>{
    return(
        <div className="joinerBox">
            <div className="joinerImgBox">
                <img src={props.item.img} alt=""/>
            </div>
            <p className="joiner-name">{props.item.name}</p>
        </div>
    )
}

export class Joiners extends Component {
    render() {
        
        return (
            <div className="joiners">
                <div className="swiper-container" ref="container">
                    <div className="swiper-wrapper">

                        {
                            this.props.joiner.map((item,index)=>{
                                
                                return (
                                <div className="swiper-slide" key={index}>
                                    <JoinerBox item={item}/>
                                </div>)})
                        }
                      
                    </div>

                </div>
            </div>
        );
    }

    componentDidMount(){
        new Swiper (this.refs.container, {
          // Optional parameters
          direction: 'horizontal',
          loop: false,
          slidesPerView: 5.6,
          spaceBetween: 10,
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
      
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      }
}

export default Joiners;
