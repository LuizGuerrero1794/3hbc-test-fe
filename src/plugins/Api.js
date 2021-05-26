import axios from 'axios';
const base = 'http://localhost:3000/';

export default {
    get(route){
        return axios.get(base+route);
    },
    delete(route, id){
        return axios.delete(`${base+route}/${id}`);
    },
    show(route,id){
        return axios.get(`${base+route}/${id}`);
    },
    new(route,data){
        return axios.post(`${base+route}`,data);
    },
    update(route,id, data){
        return axios.put(`${base+route}/${id}`, data);
    }
}