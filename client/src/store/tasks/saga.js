import { call, put, takeEvery } from "redux-saga/effects";
import {
  createTaskApi,
  fetchTaskApi,
  removeTaskApi,
  updateTaskApi,
} from "../../Api";
import {
  fetchTasksSuccess,
  deleteTaskSucceeded,
  deleteTaskFailed,
  updateTaskFailed,
  updateTaskSucceeded,
} from "./actions";
import {
  FETCH_TASKS,
  CREATE_TASKS,
  FETCH_TASKS_FAILED,
  CREATE_TASKS_FAILED,
  CREATE_TASKS_SUCCEEDED,
  DELETE_TASK,
  UPDATE_TASK,
} from "./actionTypes";

function* onCreateTask(action) {
  try {
    const task = yield call(createTaskApi, action.payload);
    yield put({ type: CREATE_TASKS_SUCCEEDED, payload: task });
  } catch (e) {
    yield put({ type: CREATE_TASKS_FAILED, message: e.message });
  }
}

function* onFetchTasks() {
  try {
    const tasks = yield call(fetchTaskApi);
    yield put(fetchTasksSuccess(tasks));
  } catch (e) {
    console.log(e);
    yield put({ type: FETCH_TASKS_FAILED, message: e.message });
  }
}

function* onDeleteTask(action) {
  try {
    const task = yield call(removeTaskApi, action.payload);
    yield put(deleteTaskSucceeded(task));
  } catch (e) {
    yield put(deleteTaskFailed(e.message));
  }
}

function* onUpdateTask(action) {
  try {
    const task = yield call(updateTaskApi, action.payload);
    yield put(updateTaskSucceeded(task));
  } catch (e) {
    yield put(updateTaskFailed(e.message));
  }
}

export default function* taskSaga() {
  yield takeEvery(FETCH_TASKS, onFetchTasks);
  yield takeEvery(CREATE_TASKS, onCreateTask);
  yield takeEvery(DELETE_TASK, onDeleteTask);
  yield takeEvery(UPDATE_TASK, onUpdateTask);
}
