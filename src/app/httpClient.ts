import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.quran.com/api/v3/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
