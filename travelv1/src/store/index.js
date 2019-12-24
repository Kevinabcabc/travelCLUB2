import {createStore} from 'redux'

const initState = {
    headerTitle:'发现旅行',
    isBack:false
}

const reducer = function(state = initState ,action){
    console.log('reducer run',state,action);
    if(action.type==='setHeaderTitle'){
        return{
            ...state,
            headerTitle:action.title
        }
    }else{
        return state;
    }
}

const store = createStore(reducer);

export default store;