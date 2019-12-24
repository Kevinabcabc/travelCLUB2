import React, { Component } from 'react';
import './style.scss'
import BScroll from 'better-scroll'
export class Scroll extends Component {
    render() {
        return (
            <div className="content" ref="content">
                <div className="scroll">
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }

    componentDidMount(){
        let scroll = new BScroll(this.refs.content,{
            tap:true,
            click:true,
        });

        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
        
    }
}

export default Scroll;
