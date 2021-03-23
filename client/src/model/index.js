
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import api from "./api";

import GlobalModel from "global-model";

const reducer = (state, action) => {
    if(state){
        return state.gReducer(action);

    }else{
        return new GlobalModel(
            false,
            "app",
            {
                api: api("app").gValue,
            },
            {
                api: api("app").gStructure,
            }
        ).gReducer(action);
    }
};

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

store.subscribe(()=>{
    console.log("store",store.getState())
});

console.log("store",store.getState());

export default store;