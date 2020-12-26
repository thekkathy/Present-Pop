import {
    SIGN_IN,
    SIGN_OUT,
    VISITED
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const setVisited = () => {
    return{
        type: VISITED
    }
}