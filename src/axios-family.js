import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapplearning.firebaseio.com/'
});

export default instance;