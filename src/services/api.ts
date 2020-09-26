import axios from "axios";

const api = axios.create({
  baseURL: "http://www.zbr.net.br/",
});

export default api;
