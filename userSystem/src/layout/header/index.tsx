import React from 'react'
import './style.scss'
import Logo from '../../assets/logo.png'
import { Layout, Menu, Avatar } from 'antd';
const { Header } = Layout;

const AppHeader:React.FC<{}> = function AppHeader(){

    return(
        <Header className="app-header">
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">
            <Avatar className="userImg" style={{ backgroundColor: '#87d068' ,paddingLeft:'9px',marginRight:'10px'}} icon="user" />
            <span className="title">管理员</span>
          </Menu.Item>
          <Menu.Item key="2">退出</Menu.Item>
        </Menu>
      </Header>
    )
}

export default AppHeader;