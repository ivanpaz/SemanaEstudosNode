import axios from 'axios';

const api = axios.create({
    //Evitar ter que digitar esse caminho em toda rquisição no backend
    baseURL: 'http://localhost:3333',
});

export default api;