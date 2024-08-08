import axios from "axios";

const api = axios.create({
  baseURL: "https://internconnect-fdoz.onrender.com/",
});

// Set the default headers for all requests
api.defaults.headers.common["Content-Type"] = "application/json";
// api.defaults.headers.common["Access-Control-Allow-Origin"] =
//   "https://internconnect-fdoz.onrender.com/";

export default api;
