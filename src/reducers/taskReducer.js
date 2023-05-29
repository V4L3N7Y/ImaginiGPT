// reducers/taskReducer.js
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from '../actions/actionTypes';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case UPDATE_TASK:
      // Implement logic to update a task
      return state;
    case DELETE_TASK:
      // Implement logic to delete a task
      return state;
    default:
      return state;
  }
};

export default taskReducer;