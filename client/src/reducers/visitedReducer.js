import {VISITED} from '../actions/types';

const visitedReducer = (state = {alreadyVisited: false}, action) => {
    switch(action.type){
        case VISITED:
            return {...state, alreadyVisited: true};
        default:
            return state;
    }
};

export default visitedReducer;