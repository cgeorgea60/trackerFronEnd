import axios from "axios";
//require("dotenv").config();
//const url = process.env.baseURL;
export default axios.create({
  baseURL: "https://tasktracker-api.up.railway.app/api/tasks",
  //baseURL: "http://localhost:5000/api/tasks",
});
