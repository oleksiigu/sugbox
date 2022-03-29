import axios from "axios";

const nextStateMapping = {
  TODO: "IN_PROGRESS",
  IN_PROGRESS: "DONE",
  DONE: "ARCHIVED",
  ARCHIVED: "REMOVED",
};

export const createTaskApi = async (initialTask) => {
  const response = await axios.post("/api/tasks", initialTask);
  return response.data;
};

export const fetchTaskApi = async () => {
  const response = await axios.get(`api/tasks`);
  return {
    tasks: response.data._embedded.tasks,
    self_link: response.data._links.self.href,
  };
};

export const updateTaskApi = async (existingTask) => {
  let newState = nextStateMapping[existingTask.state];

  const response = await axios.patch(existingTask._links.self.href, {
    state: newState,
  });
  return response.data;
};

export const removeTaskApi = async (task) => {
  const response = await axios.delete(task._links.self.href);
  return task;
};
