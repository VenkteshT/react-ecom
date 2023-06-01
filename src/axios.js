import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/VenkteshT/data/products",
});

export default instance;
