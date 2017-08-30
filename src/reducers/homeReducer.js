import * as types from '../actions/actionTypes';

export default function(state={},action){
    switch(action.type){
        case types.LOAD_HOME:
            console.log('REDUCER CALLED'+types.LOAD_HOME,action.payload);
        default:
            return state;
    }
}