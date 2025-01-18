import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as Homereducers, reducer} from "./reducerfile/reducer";
import { reducers as CameraDronesreducers,reducers  } from "./reducerfile/reducer";
import {reducersof as Handheldreducers} from "./reducerfile/reducer"
import { thunk } from "redux-thunk";


const rootelement = combineReducers({
    Home: Homereducers,
    CameraDrones:CameraDronesreducers,
    Handheld: Handheldreducers,
    Cards:reducer,
    Infos:reducers
})
  


export const store = legacy_createStore(rootelement,applyMiddleware(thunk))