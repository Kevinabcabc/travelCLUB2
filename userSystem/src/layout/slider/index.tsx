import React ,{useCallback,useMemo} from 'react'
import {useHistory} from 'react-router'
import { Layout, Menu, Icon } from 'antd';
import {adminSiderConfig,workerSiderConfig} from '../../config/sider.config'
import useRouteInfo from '../../utils/useRouteInfo'
const { SubMenu } = Menu;
const { Sider } = Layout;
 

const AppSlider:React.FC<{role:string}> = function AppSlider(role){

  // console.log( useRouteInfo());
  const {ids} = useRouteInfo();
  const history = useHistory();
  console.log(role);
  
  const SiderConfig = useMemo(()=>{
    if((role.role)==="admin"){
      return  adminSiderConfig;
    }else{
      return  workerSiderConfig;
    }
  },[adminSiderConfig,workerSiderConfig,role]);

  const itemClickAciton = useCallback((path:string)=>{
    history.push(path);
  },[history])
    console.log([ids[0]],[ids[1]]);
    
    return(
      <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[ids[1]]}
        defaultOpenKeys={[ids[0]]}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          SiderConfig.map(configItem=>(
            <SubMenu
              key={configItem.id}
              title={
                <span>
                  <Icon type={configItem.icon} />
                  {configItem.root}
                </span>
              }
            >
              {
                configItem.children.map(item=>(
                  <Menu.Item key={item.id} onClick={()=>{
                    itemClickAciton(item.path);
                }}>{item.title}</Menu.Item>
                ))
              }
            </SubMenu>
          ))
        }
      </Menu>
    </Sider>
    )
}

export default AppSlider;