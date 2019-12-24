const initialState = {
    myApplyTravels:[
        {
            "id": 2,
            "username": "LJ",
            "userImg": "/img/userImgDemo.png",
            "releaseTime": "5天后",
            "title": "去西藏的海边走走",
            "img": "/img/bg4.jpg",
            "views": "313212",
            "numOfJoin": "24",
            "commentNum": "98",
            "joiner": [
              {
                "name": "你的故事",
                "img": "/img/joinersImg/j1.png"
              },
              {
                "name": "drake your",
                "img": "/img/joinersImg/j2.png"
              },
              {
                "name": "渐变",
                "img": "/img/joinersImg/j3.png"
              },
              {
                "name": "一直往南",
                "img": "/img/joinersImg/j4.png"
              },
              {
                "name": "silence",
                "img": "/img/joinersImg/j5.png"
              },
              {
                "name": "JOJO",
                "img": "/img/joinersImg/j6.png"
              },
              {
                "name": "mengHi",
                "img": "/img/joinersImg/j7.png"
              },
              {
                "name": "福州猛",
                "img": "/img/joinersImg/j8.png"
              },
              {
                "name": "关关雎鸠",
                "img": "/img/joinersImg/j9.png"
              }
            ]
          }
    ]
}

export default (state = initialState,action)=>{
    switch (action.type){
        case 'applyOneTravel':
            let arr = state.myApplyTravels;
            arr.push(action.val);
            return{
                ...state,
                myApplyTravels:arr
            }
        default:
            return state;
    }
}