import React, { Component } from 'react';
import './style.scss'
import loadingImg from '../../assets/loading.gif'
export class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="imgBox">
                    <img src={loadingImg} alt=""/>
                </div>
            </div>
        );
    }
}

export default Loading;
