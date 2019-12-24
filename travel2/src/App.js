import React, { Component ,lazy , Suspense } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom'
import CacheRoute, { CacheSwitch } from 'react-router-cache-route'
import Loading  from './components/Loading/Loading'
import Tabs from './components/Tabs/Tabs'
import Header from './components/Header/Header'

const FindTravel = lazy(()=>import('./pages/FindTravel/FindTravel/FindTravel'));
const Hot100 =  lazy(()=>import('./pages/FindTravel/hot100/Hot100'))
const Apply =  lazy(()=>import('./pages/FindTravel/Apply/Apply'))
const ReleaseTravel = lazy(()=>import('./pages/ReleaseTravel/ReleaseTravel/ReleaseTravel'));
const NewTravel = lazy(()=>import('./pages/ReleaseTravel/NewTravel/NewTravel'));
const MyTravel = lazy(()=>import('./pages/MyTravel/MyTravel/MyTravel'));
const Home = lazy(()=>import('./pages/Home/Home/Home'))
const MyJoinedTravels = lazy(()=>import('./pages/Home/MyJoinedTravels/MyJoinedTravels'))

export default class App extends Component {
    render() {
        return (
            /* 路由 */
            <Router>
                {/* lazy加载 */}
                <Suspense fallback={<Loading/>}>

                    <Header/>
                    {/* 根页面 */}
                    <CacheSwitch>     
                        <Route path="/" exact render={()=>{
                            return <Redirect to="/findTravel" />
                        }}/>  

                        <CacheRoute path="/findTravel" component = {FindTravel}/>
                        <CacheRoute path="/releaseTravel" component = {ReleaseTravel}/>
                        <CacheRoute path="/myTravel" component = {MyTravel}/>
                        <CacheRoute path="/home" component = {Home}/>

                    </CacheSwitch>
                        {/* 子页面 */}
                    <Route path="/findTravel/hot100" component={Hot100}/>
                    <Route path="/findTravel/apply/:id" component={Apply}/>
                    <Route path="/releaseTravel/newTravel" component={NewTravel}/>
                    <Route path="/home/myJoinedTravels" component = {MyJoinedTravels}/>


                    <Tabs/>
                </Suspense>
            </Router>
        );
    }
}
