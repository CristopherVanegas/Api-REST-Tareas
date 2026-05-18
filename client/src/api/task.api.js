import axios from "axios";

const taskApi = axios.create({
  baseURL:'http://localhost:8000/tasks/api/v1/tasks/'
})
export const getAllTasks = () => {
  // return axios.get("http://localhost:8000/tasks/api/v1/tasks/");
  return taskApi.get('/')
};

export const createTask = (task) => {
  // return axios.post("http://localhost:8000/tasks/api/v1/tasks/");
  return taskApi.post('/', task)
};
