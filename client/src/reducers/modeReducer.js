import {MODE} from '../actions/types';

//sets MODE as true or false (true = lightmode, false = darkmode)
const modeReducer = (state = {mode: true}, action) => {
    switch(action.type){
        case MODE:
            return {...state, mode: action.payload};
        default:
            return state;
    }
};

export default modeReducer;