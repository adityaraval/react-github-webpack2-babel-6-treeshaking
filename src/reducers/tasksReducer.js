import * as types from '../actions/actionTypes';

let initialState = {
  tasks:[],
  isTasksLoaded:false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_TASKS:
      {
        console.log('REDUCER CALLED ' + types.GET_TASKS, action.payload.data.tasks);
        //console.log([action.payload.data.tasks,...state])
        //return [...action.payload.data.tasks, ...state]
        return Object.assign({}, state, {
            tasks: action.payload.data.tasks,
            isTasksLoaded: true
          });
      }
    case types.POST_TASK:
      {
        console.log('REDUCER CALLED ' + types.POST_TASK, action.payload.data);
        console.log([...state, action.payload.data])
        //return [...state, action.payload.data];
        return {tasks:[action.payload.data,...state.tasks]}
      }

    default:
      return state;
  }
}
