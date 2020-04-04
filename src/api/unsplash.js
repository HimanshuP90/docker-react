import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 25c5b4719f60b12312d8e3dc4112ed4949272ebcb45c1f7f23c74bcc643d0fc9'
    }
});