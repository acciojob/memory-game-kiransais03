
import {createStore,combineReducers} from "redux";
import gamemodeReducer from "./reducer/gamemodeReduer";
import inhomeReducer from "./reducer/inhomeReducer";

let mergedReducers = combineReducers({
gamemodeReducer1:gamemodeReducer,
inhomeReducer1 : inhomeReducer,
})

const store = createStore(mergedReducers);

export default store;
