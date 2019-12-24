import React, { Component } from 'react';
import './style.scss'
import store from '../../store'
export class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            title:store.getState().headerTitle,
            isBack:store.getState().isBack,
        }
    }
    render() {
        return (
            <div className="header">
                {this.state.title}
            </div>
        );
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                title:store.getState().headerTitle,
                isBack:store.getState().isBack,
            })
            
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
}

export default Header;
