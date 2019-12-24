import React, { Component } from 'react';
import './style.scss'
import 'whatwg-fetch'
export class Home extends Component {
    render() {
        return (
            <div className="page home">
                home
            </div>
        );
    }
    componentDidMount(){
        this.initData();
      }

    async initData(){
        try {
          let response = await window.fetch('/ajax/movieOnInfoList?token=');
          let data = await response.json();
          console.log(data);
    
        } catch (error) {
          console.log(error);
        }
      }
}

export default Home;
