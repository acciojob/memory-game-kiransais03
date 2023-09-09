import { GAME_MODE_DATA } from "../actions/actionTypes";
import savegamemodeActions from "../actions/savegamemodeActions";

let initialState = {redux:"yes",gamemode:null};

const gamemodeReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case GAME_MODE_DATA : {return ({...state,gamemode:action.payload})}
         default : return state;
    }
}

export default gamemodeReducer;