interface SiderInterFaceItem{
    id:string,
    title:string,
    path:string
}
interface SiderInterFaceConfig{
    id:string,
    root:string
    icon:string,
    children:SiderInterFaceItem[]
}

export const adminSiderConfig:SiderInterFaceConfig[] = [
    {
        id:'analysis',
        root:'分析',
        icon: 'pie-chart',
        children:[
            {
                id:'analysis-user',
                title:'用户分析',
                path:'/analysis/user'
            },
            {
                id:'analysis-travel',
                title:'旅行分析',
                path:'/analysis/travel'
            },
        ]
    },
    {
        id:'travels',
        root:'旅行',
        icon: 'picture',
        children:[
            {
                id:'travels-place',
                title:'按地点查询',
                path:'/travels/place'
            },
            {
                id:'travels-hot',
                title:'按热度查询',
                path:'/travels/hot'
            },
            {
                id:'travels-people',
                title:'按人数查询',
                path:'/travels/people'
            },
        ]
    },


    {
        id: 'setting',
        root: '设置',
        icon: 'setting',
        children: [
          {
            id: 'setting-permission',
            title: '权限管理',
            path: '/setting/permission/manager'
          },
          {
            id: 'setting-account',
            title: '账户管理',
            path: '/setting/account/manager'
          }
        ]
    }

]

export const workerSiderConfig:SiderInterFaceConfig[] = [
    {
        id:'analysis',
        root:'分析',
        icon: 'pie-chart',
        children:[
            {
                id:'analysis-user',
                title:'用户分析',
                path:'/analysis/user'
            },
            {
                id:'analysis-travel',
                title:'旅行分析',
                path:'/analysis/travel'
            },
        ]
    },
    {
        id:'travels',
        root:'旅行',
        icon: 'picture',
        children:[
            {
                id:'travels-place',
                title:'按地点查询',
                path:'/travels/place'
            },
            {
                id:'travels-hot',
                title:'按热度查询',
                path:'/travels/hot'
            },
            {
                id:'travels-people',
                title:'按人数查询',
                path:'/travels/people'
            },
        ]
    },
]

 const siderConfig:SiderInterFaceConfig[] = [
    {
        id:'analysis',
        root:'分析',
        icon: 'pie-chart',
        children:[
            {
                id:'analysis-user',
                title:'用户分析',
                path:'/analysis/user'
            },
            {
                id:'analysis-travel',
                title:'旅行分析',
                path:'/analysis/travel'
            },
        ]
    },
    {
        id:'travels',
        root:'旅行',
        icon: 'picture',
        children:[
            {
                id:'travels-place',
                title:'按地点查询',
                path:'/travels/place'
            },
            {
                id:'travels-hot',
                title:'按热度查询',
                path:'/travels/hot'
            },
            {
                id:'travels-people',
                title:'按人数查询',
                path:'/travels/people'
            },
        ]
    },


    {
        id: 'setting',
        root: '设置',
        icon: 'setting',
        children: [
          {
            id: 'setting-permission',
            title: '权限管理',
            path: '/setting/permission/manager'
          },
          {
            id: 'setting-account',
            title: '账户管理',
            path: '/setting/account/manager'
          }
        ]
    }

]

export default siderConfig;
