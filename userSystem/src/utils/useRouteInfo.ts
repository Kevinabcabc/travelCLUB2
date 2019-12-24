import {useMemo} from 'react'
import {useLocation} from 'react-router'
import {matchRoutes} from 'react-router-config'
import {routes} from '../routes'
import siderConfig from '../config/sider.config'

interface ItemInterface{
    title:string,
    to?:string
}

export default  function useRouteInfo(){
    const  {pathname} = useLocation();//获得浏览器history路由
    const [{route:{path,breadcrumb}}]  = matchRoutes(routes,pathname);//匹配路由文件的面包屑
    const ids = useMemo(()=>{//use memo path改变计算
        let ids:string[] = [];
        if(typeof path === 'string'){
            ids = path.split('/');
            ids.shift();
            const match = siderConfig.find(item=>item.id === ids[0]);
            if(match){
                ids[1] = match.children.length === 1? match.children[0].id: `${ids[0]}-${ids[1]}`
            }
        }
        return ids;
    },[path]);


    return {
        breadcrumb:breadcrumb as ItemInterface[],
        ids:ids,
    }

}