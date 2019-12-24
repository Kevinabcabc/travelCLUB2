import immutable from 'immutable'
import API from '../../ajax/api'
import ajax from '../../ajax'
import {Dispatch } from 'redux'


enum SetAnalysisUserDataType {
    load = 'set_analysis_user_load',
    success = 'set_analysis_user_success',
    fail = 'set_analysis_user_fail',
}

//同步请求
const setAnalysisUserStoreData = (type:SetAnalysisUserDataType,date:string,value?:any)=>({
    type,
    date,
    value
});


type Action  =  ReturnType<typeof setAnalysisUserStoreData>;

export const requestAnalysisUserData = (value?:number)=>(dispatch:Dispatch)=>{
    const valStr = value ? value.toString() : '';

    const action = setAnalysisUserStoreData(SetAnalysisUserDataType.load,valStr)
    dispatch(action);

    ajax.get(API.ANALYSIS_USER_SELECT_DATA,{
        params:{
            count:value
        }
    })
    .then(({data})=>{
        const action = setAnalysisUserStoreData(SetAnalysisUserDataType.success,valStr,data.data)
        dispatch(action);
        console.log(data);
        
        // console.log('成功了');
    })
    .catch(error=>{
        const action = setAnalysisUserStoreData(SetAnalysisUserDataType.fail,valStr)
        dispatch(action);
    })
}


const initialState = {
    user:{
        '-1':{
            data:null,
            status:'waiting'
        },
        '7':{
            data:null,
            status:'waiting'
        },
        '15':{
            data:null,
            status:'waiting'
        },
        '30':{
            data:null,
            status:'waiting'
        },
        '180':{
            data:null,
            status:'waiting'
        },
        '360':{
            data:null,
            status:'waiting'
        },
        
    }
}

const immutableState  = immutable.fromJS(initialState);


export default (state = immutableState,action: Action )=>{
    switch (action.type) {
        case SetAnalysisUserDataType.load:
        return state.setIn(['user',action.date,'status'],'loading');
    case SetAnalysisUserDataType.success:
        const newState = state.setIn(['user',action.date,'status'],'success')
        return newState.setIn(['user',action.date,'data'],immutable.fromJS(action.value));
    case SetAnalysisUserDataType.fail:
        return state.setIn(['user',action.date,'status'],'fail');
    default:
        return state;
    }
}