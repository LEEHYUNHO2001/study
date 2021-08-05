import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from './user';
import post from './post';

//이전상태와 액션을 이용하여 다음상태를 만듬
const rootReducer = combineReducers({ index: (state = {}, action) => {
        switch(action.type){
            case HYDRATE:
                return{...state, ...action.payload};
                
                default:
                    return state;
        };
    },
    user,
    post
})

export default rootReducer;