import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from "redux-thunk";
import home from '../pages/Home/Home/reducer'
import findTravel from '../pages/FindTravel/FindTravel/reducer'
import user from './reducers/user'
import travels from './reducers/travels'

const reducer = combineReducers({
    home,user,travels,findTravel
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;