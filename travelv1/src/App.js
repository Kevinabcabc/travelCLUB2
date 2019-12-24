import React, { Component ,lazy , Suspense } from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom'
import Loading  from './components/Loading/Loading'
import Tabs from './components/Tabs/Tabs'
import Header from './components/Header/Header'

const FindTravel = lazy(()=>import('./pages/FindTravel/FindTravel/FindTravel'));
const ReleaseTravel = lazy(()=>import('./pages/ReleaseTravel/ReleaseTravel/ReleaseTravel'));
const MyTravel = lazy(()=>import('./pages/MyTravel/MyTravel/MyTravel'));
const Home = lazy(()=>import('./pages/Home/Home/Home'))

export default class App extends Component {
    render() {
        return (
            /* 路由 */
            <Router>
                {/* lazy加载 */}
                <Suspense fallback={<Loading/>}>

                    <Header/>
                    {/* 根页面 */}
                    <Switch>     
                        <Route path="/" exact render={()=>{
                            return <Redirect to="/findTravel" />
                        }}/>  

                        <Route path="/findTravel" component = {FindTravel}/>
                        <Route path="/releaseTravel" component = {ReleaseTravel}/>
                        <Route path="/myTravel" component = {MyTravel}/>
                        <Route path="/home" component = {Home}/>

                    </Switch>

                    <Tabs/>
                </Suspense>
            </Router>
        );
    }
}
