import axios from 'axios'

const apiIP = axios.create({
    baseURL: 'https://api.ipgeolocation.io'
});

export default apiIP;