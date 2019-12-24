import 'whatwg-fetch';

const initialState = {
    headerTitle :'发现旅行',
    headerIsBack:false
}


// export const setHeaderTitle = (val)=>({
//     type:'setHeaderTitle',
//     value:val
// });


// export const setHeaderBack = (val)=>({
//     type:'setHeaderBack',
//     value:val
// })


export default (state = initialState,action)=>{
    switch (action.type){
        case 'setHeaderTitle':
            
            return{
                ...state,
                headerTitle:action.val
            }
        case 'setHeaderBack':
            return{
                ...state,
                headerIsBack:action.val
            }
        default:
            return state;
    }
}