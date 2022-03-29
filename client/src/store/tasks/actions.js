import {
  UPDATE_TASK,
  DELETE_TASK,
  DELETE_TASK_SUCCEEDED,
  DELETE_TASK_FAILED,
  FETCH_TASKS,
  FETCH_TASKS_SUCCEEDED,
  UPDATE_TASK_SUCCEEDED,
  UPDATE_TASK_FAILED,
  CREATE_TASKS,
  CREATE_TASKS_SUCCEEDED,
  CREATE_TASKS_FAILED,
} from "./actionTypes";

export const fetchTasks = () => {
  return {
    type: FETCH_TASKS,
  };
};

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCEEDED,
    payload: tasks,
  };
};

export const deleteTask = (task) => {
  return {
    type: DELETE_TASK,
    payload: task,
  };
};

export const deleteTaskSucceeded = (task) => {
  return {
    type: DELETE_TASK_SUCCEEDED,
    payload: task,
  };
};

export const deleteTaskFailed = (task) => {
  return {
    type: DELETE_TASK_FAILED,
    payload: task,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};

export const updateTaskSucceeded = (task) => {
  return {
    type: UPDATE_TASK_SUCCEEDED,
    payload: task,
  };
};

export const updateTaskFailed = (message) => {
  return {
    type: UPDATE_TASK_FAILED,
    payload: message,
  };
};

export const createTask = (task) => {
  return {
    type: CREATE_TASKS,
    payload: task,
  };
};

export const createTaskSucceeded = (task) => {
  return {
    type: CREATE_TASKS_SUCCEEDED,
    payload: task,
  };
};

export const createTaskFailed = (message) => {
  return {
    type: CREATE_TASKS_FAILED,
    payload: message,
  };
};
