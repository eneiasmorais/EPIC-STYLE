import axios from "axios";

export const api = axios.create({
    baseURL: "https://projeto-front-end-fakeapi.onrender.com/",
    timeout: 10000,
})