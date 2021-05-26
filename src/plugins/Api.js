import axios from 'axios';
const base = 'http://localhost:3000/';

export default {
    get(route){
        return axios.get(base+route);
    },
    delete(route, id){
        return axios.delete(`${base+route}/${id}`);
    }
}