import * as types from '../actions/actionTypes';

export default function(state=[],action){
    switch(action.type){
        case types.GET_TASKS:{
            console.log('REDUCER CALLED '+types.GET_TASKS,action.payload.data.tasks);
            //console.log([action.payload.data.tasks,...state])
            return [...action.payload.data.tasks,...state]
        }
        case types.POST_TASK:{
            console.log('REDUCER CALLED '+types.POST_TASK,action.payload.data);
            console.log([action.payload.data,...state])
            return [action.payload.data,...state]
        }

        default:return state;
    }
}