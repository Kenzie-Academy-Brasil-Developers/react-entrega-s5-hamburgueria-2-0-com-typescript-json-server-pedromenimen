import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-kenzie-menimen.herokuapp.com",
});

export default api;
