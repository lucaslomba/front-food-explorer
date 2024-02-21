import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-food-explorer-zc31.onrender.com"
})