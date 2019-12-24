const initialState = {
    id:465641786,
    name:'Keivn',
    age:'21',
    gender:'man',
    phone:15880322836,
    img:'/img/userImgDemo.png',
    userTravels:[],
    joiner:[
      {
        "id": 1575640781672,
        "user": {
          "id": 465641786,
          "name": "Keivn",
          "age": "21",
          "gender": "man",
          "phone": 15880322836,
          "img": "/img/userImgDemo.png",
          "userTravels": [],
          "joiner": "[CIRCULAR]"
        },
        "travel": {
          "id": 1,
          "username": "kevin",
          "userImg": "/img/userImg.jpg",
          "releaseTime": "10天后",
          "title": "去厦门的海边走走",
          "img": "/img/bg3.jpg",
          "views": "1321112",
          "numOfJoin": "26",
          "commentNum": "112",
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
        },
        'reason':'很想去很想去很想去很想去很想去很想去很想去很想去',
      }
    ]
};

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'addNewTravel':
    let newTravel = JSON.parse(JSON.stringify(state.userTravels));
    newTravel.push(action.data);
    return{
        ...state,
        userTravels:newTravel
    }
    case 'addTravelJoiner':
      let joners = state.joiner;
      joners.push(action.val);
      return {
        ...state,
        joiner: joners
      }

      case 'deleteTravelJoiner':
        let joners2 = state.joiner;
        let jonersrest =  joners2.filter(item=>(item.id !== action.val))
  
        return {
          ...state,
          joiner: jonersrest
        }
    default:
      return state;
  }
}