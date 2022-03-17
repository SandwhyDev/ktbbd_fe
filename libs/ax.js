import axios from "axios";

const ax = axios.create({
  baseURL: "http://localhost:5000/api",
  responseType: "json",
});

export default ax;
