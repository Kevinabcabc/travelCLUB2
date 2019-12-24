const initialState = {list:[
    {
        id:1,
        username:'kevin',
        userImg : '/img/userImg.jpg',
        releaseTime:'10天后',
        title:'去厦门的海边走走',
        img:'/img/bg3.jpg',  
        views:"1321112",
        numOfJoin:"26",
        commentNum:'112',
        joiner:[
            {
                name:'你的故事',
                img:'/img/joinersImg/j1.png',
            },
            {
                name:'drake your',
                img:'/img/joinersImg/j2.png',
            },
            {
                name:'渐变',
                img:'/img/joinersImg/j3.png',
            },
            {
                name:'一直往南',
                img:'/img/joinersImg/j4.png',
            },
            {
                name:'silence',
                img:'/img/joinersImg/j5.png',
            },
            {
                name:'JOJO',
                img:'/img/joinersImg/j6.png',
            },
            {
                name:'mengHi',
                img:'/img/joinersImg/j7.png',
            },
            {
                name:'福州猛',
                img:'/img/joinersImg/j8.png',
            },
            {
                name:'关关雎鸠',
                img:'/img/joinersImg/j9.png',
            },
        ]
    },
    {
        id:2,
        username:'LJ',
        userImg : '/img/userImgDemo.png',
        releaseTime:'5天后',
        title:'去西藏的海边走走',
        img:'/img/bg4.jpg',  
        views:"313212",
        numOfJoin:"24",
        commentNum:'98',
        joiner:[
            {
                name:'你的故事',
                img:'/img/joinersImg/j1.png',
            },
            {
                name:'drake your',
                img:'/img/joinersImg/j2.png',
            },
            {
                name:'渐变',
                img:'/img/joinersImg/j3.png',
            },
            {
                name:'一直往南',
                img:'/img/joinersImg/j4.png',
            },
            {
                name:'silence',
                img:'/img/joinersImg/j5.png',
            },
            {
                name:'JOJO',
                img:'/img/joinersImg/j6.png',
            },
            {
                name:'mengHi',
                img:'/img/joinersImg/j7.png',
            },
            {
                name:'福州猛',
                img:'/img/joinersImg/j8.png',
            },
            {
                name:'关关雎鸠',
                img:'/img/joinersImg/j9.png',
            },
        ]
    },
]};
export default (state = initialState, action)=>{
  switch (action.type) {
    case 'addNewTravel':
        let newTravel = JSON.parse(JSON.stringify(state.list));
        newTravel.push(action.data);
        return{
            ...state,
            list:newTravel
        }
    // case 'add':
    //   return {
    //     ...state,
    //     value: ''
    //   }
    default:
      return state;
  }
}