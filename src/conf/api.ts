import axios from "axios";
import url from "./url";

const API = axios.create({
    baseURL: url.back + "api/",
    method: 'post',
    headers: {
        "Content-Type": "application/json"
    }
});

export default API