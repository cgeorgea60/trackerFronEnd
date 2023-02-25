import axios from "axios";
require("dotenv").config();
const url = process.env.baseURL;
export default axios.create({
  baseURL: url,
  //baseURL: "http://localhost:5000/api/tasks",
});
