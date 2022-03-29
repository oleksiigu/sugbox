import {
  CREATE_TASKS_FAILED,
  CREATE_TASKS_SUCCEEDED,
  DELETE_TASK_FAILED,
  DELETE_TASK_SUCCEEDED,
  FETCH_TASKS,
  FETCH_TASKS_SUCCEEDED,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_SUCCEEDED,
} from "./actionTypes";

const initialState = {
  tasks: [],
  status: "idle",
  self_link: "/api/tasks",
  error: null,
};

export const selectAllTasks = (state) => state.tasks;
export const selectTaskById = (state, taskId) =>
  state.tasks.find((task) => task.id === taskId);

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASKS_SUCCEEDED:
      console.log(action);
      state = { ...state, tasks: state.tasks.concat(action.payload) };
      break;
    case FETCH_TASKS:
      state = { ...state, status: "loading" };
      break;
    case FETCH_TASKS_SUCCEEDED:
      console.log(action);
      state = {
        ...state,
        tasks: action.payload.tasks,
        status: "succeeded",
        self_link: action.payload.self_link,
      };
      break;
    case DELETE_TASK_SUCCEEDED:
      state = {
        ...state,
        tasks: state.tasks.filter(
          (t) => t._links.self.href !== action.payload._links.self.href
        ),
      };
      break;
    case UPDATE_TASK_SUCCEEDED:
      const objIndex = state.tasks.findIndex(
        (t) => t._links.self.href === action.payload._links.self.href
      );
      const newTasks = [...state.tasks];
      newTasks[objIndex].state = action.payload.state;
      state = { ...state, tasks: newTasks };
      break;
    case UPDATE_TASK_FAILED:
    case DELETE_TASK_FAILED:
    case CREATE_TASKS_FAILED:
      console.error(action.payload);
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
};

export default TaskReducer;
