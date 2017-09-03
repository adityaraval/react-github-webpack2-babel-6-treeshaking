import * as types from '../actions/actionTypes';

let initialState = {
  tasks:[],
  isTasksLoaded:false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_TASKS:
      {
        return Object.assign({}, state, {
            tasks: action.payload.data.tasks,
            isTasksLoaded: true
          });
      }
    case types.POST_TASK:
      {
        return {tasks:[action.payload.data,...state.tasks],isTasksLoaded:true}
      }
    case types.DELETE_TASK:
    {
      let deletedArray = state.tasks.filter(data => data._id!=action.payload.data.task._id)
      return {tasks:deletedArray,isTasksLoaded:true}
    }
    case types.UPDATE_TASK:
    {
      let deletedArray = state.tasks.filter(data => data._id!=action.payload.data.task._id)
      deletedArray.push(action.payload.data.task);
      return {tasks:deletedArray,isTasksLoaded:true}
    }

    default:
      return state;
  }
}
