import axios from "axios";

export default axios.create({
  baseURL: "https://tasktracker-api.up.railway.app/api/tasks",
});


