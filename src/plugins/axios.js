import axios from 'axios'

let token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_HOST, // Local
    headers: {
        common : {
            'Authorization': `Bearer ${token}`,
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    }
});

instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    })

export default instance
