import axios from "axios";


export const axiosClient = axios.create({
    baseURL: 'https://dummyjson.com/products',
    headers: {
        Accept: 'Application/json'
    }
})