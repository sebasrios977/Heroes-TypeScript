import { Reducer } from 'react';
import { InitialState } from '../interfaces/initialState.interface';
import { types } from '../types/types';


const initialState: InitialState = {
    logged: false,
};

interface AuthAction {
    type: string,
    payload?: any;
}

export const authReducer: Reducer<InitialState, AuthAction> = (state = initialState, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                name: action.payload.name,
            }
       
        case types.logout:
            return {
                ...state,
                logged: false,
            }
    
        default:
            return state;
    }
}