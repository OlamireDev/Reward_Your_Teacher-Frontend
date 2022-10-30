import axios from 'axios';
let headers = {};
headers.Authorization = localStorage.getItem('token')

export default axios.create({
    baseURL:"http://localhost:8080",
    headers
})