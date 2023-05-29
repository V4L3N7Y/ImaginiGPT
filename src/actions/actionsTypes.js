// actions/actionTypes.js
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// actions/taskActions.js
import { ADD_TASK, UPDATE_TASK, DELETE_TASK } from './actionTypes';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { taskId, updatedTask },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});