import axios from "axios";

import { ONE_MINUTE, baseURL } from "./constants";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Cache-Control": "no-cache",
};

const API = axios.create({
  baseURL,
  timeout: ONE_MINUTE,
  headers,
});

export default API;
