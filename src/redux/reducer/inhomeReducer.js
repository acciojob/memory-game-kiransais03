import inhomeActions from "../actions/inhomeActions";
import { IN_HOME } from "../actions/actionTypes";

let initialState = {camehome:"no"};

const inhomeReducer = (state=initialState,action)=>{
 switch(action.type) {
    case IN_HOME : return ({...state,camehome:action.payload})
    default : return state;
 }
}

export default inhomeReducer;

