import axios from "axios";
require("dotenv").config();
export default axios.create({
  baseURL: process.env.baseURL,
  //baseURL: "http://localhost:5000/api/tasks",
});
