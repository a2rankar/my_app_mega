
import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.225.244.52/api/user/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default instance;
