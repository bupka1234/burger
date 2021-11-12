import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-d80be-default-rtdb.firebaseio.com/",
});

export default instance;
